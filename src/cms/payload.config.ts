import { buildConfig } from 'payload/config'
import { Pages } from './collections/pages.collection'
import * as path from 'path'
import { Logo, LogoIcon } from './logo/logo.component'
import { LexicalPlugin } from "payload-plugin-lexical";

export default buildConfig({
  plugins: [
    LexicalPlugin({   }),
  ],
  collections: [
    Pages,
  ],
  routes: {
    admin: '/cms/admin',
    api: '/cms/api',
    graphQL: '/cms/graphql',
    graphQLPlayground: '/cms/playground',
  },
  admin: {
    components: {
      graphics: {
        Logo,
        Icon: LogoIcon,
      },
    },
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'types/cms.types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'types/generated-schema.graphql'),
  },
})
