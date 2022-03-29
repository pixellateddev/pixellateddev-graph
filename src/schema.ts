import { makeSchema } from 'nexus';
import { join } from 'path';

export const schema = makeSchema({
    types: [],
    outputs: {
        schema: join(process.cwd(), 'src/schema.graphql'),
        typegen: join(process.cwd(), 'src/nexus-typegen.ts')
    }
})