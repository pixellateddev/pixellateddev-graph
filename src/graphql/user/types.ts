import { objectType } from 'nexus';

export const User = objectType({
    name: 'User',
    definition(t) {
        t.nonNull.string('email')
        t.string('username')
        t.nonNull.string('id')
    }
})