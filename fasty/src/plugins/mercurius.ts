import fp from "fastify-plugin"
import { SensibleOptions } from "@fastify/sensible"
import mercurius, { type IResolvers } from "mercurius"
import type { FastifyReply, FastifyRequest } from "fastify"
import codegenMercurius, { CodegenMercuriusOptions, loadSchemaFiles } from "mercurius-codegen"
import { buildSchema } from "graphql"
import { Query } from "../graphql/resolvers/queries"
import { Mutation } from "../graphql/resolvers/mutations"
import { Subscription } from "../graphql/resolvers/subscriptions"
// import { loaders } from "../graphql/loaders";

const buildContext = async (req: FastifyRequest, _reply: FastifyReply) => {
  return {
    authorization: req.headers.authorization,
  }
}

type PromiseType<T> = T extends PromiseLike<infer U> ? U : T

declare module "mercurius" {
  interface MercuriusContext extends PromiseType<ReturnType<typeof buildContext>> {}
}

const codegenMercuriusOptions: CodegenMercuriusOptions = {
  targetPath: "./src/graphql/generated.ts",
  operationsGlob: "./src/graphql/operations/*.gql",
  watchOptions: {
    enabled: process.env.NODE_ENV === "development",
  },
}

const resolvers: IResolvers = {
  Query,
  Mutation,
  Subscription,
}

export default fp<SensibleOptions>(async fastify => {
  const { schema } = loadSchemaFiles("src/graphql/schema/**/*.gql", {
    watchOptions: {
      enabled: process.env.NODE_ENV === "development",
      onChange(schema) {
        fastify.graphql.replaceSchema(buildSchema(schema.join("\n")))
        fastify.graphql.defineResolvers(resolvers)

        codegenMercurius(fastify, codegenMercuriusOptions).catch(console.error)
      },
    },
  })

  fastify.register(mercurius, {
    schema,
    resolvers,
    // loaders,
    context: buildContext,
    subscription: true,
  })

  codegenMercurius(fastify, {
    targetPath: "./src/graphql-generated/generated.ts",
    operationsGlob: "./src/graphql/operations/*.gql",
    codegenConfig: {
      loadersCustomParentTypes: {
        Human: "never",
      },
    },
  }).catch(console.error)
})
