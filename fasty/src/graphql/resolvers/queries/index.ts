import { IResolvers } from "mercurius"

export const Query: IResolvers["Query"] = {
  hello(_root, args, ctx, info) {
    return "hello " + args.id
  },
}
