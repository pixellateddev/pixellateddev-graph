import { objectType } from 'nexus';

export const Resume = objectType({
    name: 'Resume',
    definition(t) {
        t.nonNull.string('id'),
        t.nonNull.string('title'),
        t.nonNull.string('userId')
    }
})