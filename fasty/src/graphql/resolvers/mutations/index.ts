import { IResolvers } from "mercurius";

export const Mutation: IResolvers["Mutation"] = {
  slideChange(root, { presentationId, slide }, { pubsub }) {
    pubsub.publish({
      topic: "presentation-" + presentationId,
      payload: {
        slideChanged: {
          slide,
        },
      },
    });

    return true;
  },
};
