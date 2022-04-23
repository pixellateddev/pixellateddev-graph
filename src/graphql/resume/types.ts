import { objectType } from 'nexus';

import { courseSchema, jobSchema, personalDetailsSchema, skillSchema } from './generic';

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
        t.list.nonNull.field('educationDetails', { type: 'Course'})
        t.list.nonNull.field('skills', {type: 'Skill'})
    }
})

export const PersonalDetails = objectType({
    name: 'PersonalDetails',
    definition(t) {
       personalDetailsSchema(t)
    }
})

export const Job = objectType({
    name: 'Job',
    definition(t) {
        t.nonNull.id('id')
        jobSchema(t)
    }
})

export const Course = objectType({
    name: 'Course',
    definition(t) {
        t.nonNull.id('id')
        courseSchema(t)
    }
})

export const Skill = objectType({
    name: 'Skill',
    definition(t) {
        t.nonNull.id('id')
        skillSchema(t)
    }
})
