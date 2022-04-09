import { inputObjectType, interfaceType, objectType } from 'nexus';

export const Resume = objectType({
    name: 'Resume',
    definition(t) {
        t.nonNull.string('id'),
        t.nonNull.string('title'),
        t.nonNull.string('userId')
        t.field('personalDetails', {
            type: 'PersonalDetails'
        })
    }
})


const personalDetailsSchema = (t: any) => {
    t.nonNull.string('fullName')
    t.nonNull.string('location')
    t.nonNull.string('phoneNumber')
    t.nonNull.string('email')
}

export const PersonalDetails = objectType({
    name: 'PersonalDetails',
    definition(t) {
       personalDetailsSchema(t)
    }
})

export const PersonalDetailsInput = inputObjectType({
    name: 'PersonalDetailsInput',
    definition(t) {
        personalDetailsSchema(t)
    }
})
