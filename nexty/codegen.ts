import { CodegenConfig } from "@graphql-codegen/cli";
import * as dotenv from "dotenv";

dotenv.config();

const config: CodegenConfig = {
  schema: `${process.env.PUBLIC_API_URL}/graphql`,
  documents: ["src/**/*.(ts|tsx)"],
  generates: {
    "./src/graphql/__generated__/": {
      preset: "client",

      plugins: [
        // "typescript",
        // "typescript-operations",
        // "typescript-react-apollo",
      ],
      config: {
        enumsAsTypes: true,
        scalars: { JSON: "string", UUID: "string", Date: "string" },
      },
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
