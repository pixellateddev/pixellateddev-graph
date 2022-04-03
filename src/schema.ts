import { ForbiddenError } from 'apollo-server';
import { makeSchema } from 'nexus';
import { allow, nexusShield } from 'nexus-shield';
import { join } from 'path';

import * as types from './graphql';

export const schema = makeSchema({
    types,
    outputs: {
        schema: join(process.cwd(), 'src/schema.graphql'),
        typegen: join(process.cwd(), 'src/nexus-typegen.ts')
    },
    contextType: {
        module: join(process.cwd(), './src/context.ts'),
        export: "Context"
    },
    plugins: [
        nexusShield({
            defaultError: new ForbiddenError('Not Authenticated'),
            defaultRule: allow
        })
    ]
})