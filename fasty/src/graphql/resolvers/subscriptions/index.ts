import { IResolvers } from "mercurius"

export const Subscription: IResolvers["Subscription"] = {
  slideChanged: {
    subscribe: (_root, args, { pubsub }) => {
      return pubsub.subscribe("presentation-" + args.presentationId)
    },
  },
}
