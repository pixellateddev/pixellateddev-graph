import { inputObjectType, interfaceType, objectType } from 'nexus';

export const Resume = objectType({
    name: 'Resume',
    definition(t) {
        t.nonNull.id('id'),
        t.nonNull.string('title'),
        t.nonNull.string('userId')
        t.field('personalDetails', {
            type: 'PersonalDetails'
        })
        t.list.nonNull.field('workExperience', {
            type: 'Job'
        })
    }
})


const personalDetailsSchema = (t: any) => {
    t.nonNull.string('fullName')
    t.nonNull.string('location')
    t.nonNull.string('phoneNumber')
    t.nonNull.string('email')
    t.string('currentRole')
    t.string('website')
    t.string('github')
    t.string('linkedin')
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


const jobSchema = (t: any) => {
    t.nonNull.string('role')
    t.nonNull.string('orgName')
    t.nonNull.string('startDate')
    t.string('endDate')
    t.nonNull.boolean('currentlyWorking')
    t.string('description')
}

export const Job = objectType({
    name: 'Job',
    definition(t) {
        t.nonNull.id('id')
        jobSchema(t)
    }
})

export const NewJobInput = inputObjectType({
    name: 'NewJobInput',
    definition(t) {
        jobSchema(t)
    }
})




