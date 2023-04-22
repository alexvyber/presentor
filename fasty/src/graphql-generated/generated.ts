import type { GraphQLResolveInfo } from "graphql";
import type { MercuriusContext } from "mercurius";
import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) =>
  | Promise<import("mercurius-codegen").DeepPartial<TResult>>
  | import("mercurius-codegen").DeepPartial<TResult>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _FieldSet: any;
};

export type Mutation = {
  __typename?: "Mutation";
  slideChange: Scalars["Boolean"];
};

export type MutationslideChangeArgs = {
  presentationId: Scalars["ID"];
  slide: Scalars["Int"];
};

export type Query = {
  __typename?: "Query";
  hello: Scalars["String"];
};

export type QueryhelloArgs = {
  id: Scalars["ID"];
};

export type Subscription = {
  __typename?: "Subscription";
  slideChanged?: Maybe<Silde>;
};

export type SubscriptionslideChangedArgs = {
  presentationId: Scalars["ID"];
};

export type Silde = {
  __typename?: "Silde";
  slide: Scalars["Int"];
};

export type Presentation = {
  __typename?: "Presentation";
  id: Scalars["ID"];
  slides: Scalars["Int"];
  current: Scalars["Int"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Subscription: ResolverTypeWrapper<{}>;
  Silde: ResolverTypeWrapper<Silde>;
  Presentation: ResolverTypeWrapper<Presentation>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Mutation: {};
  Boolean: Scalars["Boolean"];
  ID: Scalars["ID"];
  Int: Scalars["Int"];
  Query: {};
  String: Scalars["String"];
  Subscription: {};
  Silde: Silde;
  Presentation: Presentation;
};

export type MutationResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  slideChange?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    RequireFields<MutationslideChangeArgs, "presentationId" | "slide">
  >;
};

export type QueryResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  hello?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType,
    RequireFields<QueryhelloArgs, "id">
  >;
};

export type SubscriptionResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes["Subscription"] = ResolversParentTypes["Subscription"]
> = {
  slideChanged?: SubscriptionResolver<
    Maybe<ResolversTypes["Silde"]>,
    "slideChanged",
    ParentType,
    ContextType,
    RequireFields<SubscriptionslideChangedArgs, "presentationId">
  >;
};

export type SildeResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes["Silde"] = ResolversParentTypes["Silde"]
> = {
  slide?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PresentationResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes["Presentation"] = ResolversParentTypes["Presentation"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  slides?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  current?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = MercuriusContext> = {
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Silde?: SildeResolvers<ContextType>;
  Presentation?: PresentationResolvers<ContextType>;
};

export type Loader<TReturn, TObj, TParams, TContext> = (
  queries: Array<{
    obj: TObj;
    params: TParams;
  }>,
  context: TContext & {
    reply: import("fastify").FastifyReply;
  }
) => Promise<Array<import("mercurius-codegen").DeepPartial<TReturn>>>;
export type LoaderResolver<TReturn, TObj, TParams, TContext> =
  | Loader<TReturn, TObj, TParams, TContext>
  | {
      loader: Loader<TReturn, TObj, TParams, TContext>;
      opts?: {
        cache?: boolean;
      };
    };
export interface Loaders<
  TContext = import("mercurius").MercuriusContext & {
    reply: import("fastify").FastifyReply;
  }
> {
  Silde?: {
    slide?: LoaderResolver<Scalars["Int"], Silde, {}, TContext>;
  };

  Presentation?: {
    id?: LoaderResolver<Scalars["ID"], Presentation, {}, TContext>;
    slides?: LoaderResolver<Scalars["Int"], Presentation, {}, TContext>;
    current?: LoaderResolver<Scalars["Int"], Presentation, {}, TContext>;
  };
}
export type slideChangeMutationVariables = Exact<{
  presentationId: Scalars["ID"];
  slide: Scalars["Int"];
}>;

export type slideChangeMutation = {
  __typename?: "Mutation";
  slideChange: boolean;
};

export type slideChangedSubscriptionVariables = Exact<{
  presentationId: Scalars["ID"];
}>;

export type slideChangedSubscription = {
  __typename?: "Subscription";
  slideChanged?: { __typename?: "Silde"; slide: number } | null;
};

export const slideChangeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "slideChange" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "presentationId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "slide" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "slideChange" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "presentationId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "presentationId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "slide" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "slide" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<slideChangeMutation, slideChangeMutationVariables>;
export const slideChangedDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "subscription",
      name: { kind: "Name", value: "slideChanged" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "presentationId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "slideChanged" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "presentationId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "presentationId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "slide" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  slideChangedSubscription,
  slideChangedSubscriptionVariables
>;
declare module "mercurius" {
  interface IResolvers
    extends Resolvers<import("mercurius").MercuriusContext> {}
  interface MercuriusLoaders extends Loaders {}
}
