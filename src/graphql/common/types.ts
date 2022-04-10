import { objectType } from 'nexus';

export const Success = objectType({
    name: 'Info',
    definition(t) {
        t.nonNull.string('status')
        t.nonNull.string('message')
        t.nonNull.int('code')
    }
})