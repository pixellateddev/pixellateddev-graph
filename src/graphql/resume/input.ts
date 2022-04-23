import { inputObjectType } from 'nexus';

import { courseSchema, jobSchema, personalDetailsSchema, skillSchema } from './generic';

export const PersonalDetailsInput = inputObjectType({
    name: 'PersonalDetailsInput',
    definition(t) {
        personalDetailsSchema(t)
    }
})

export const JobInput = inputObjectType({
    name: 'JobInput',
    definition(t) {
        jobSchema(t)
    }
})


export const CourseInput = inputObjectType({
    name: 'CourseInput',
    definition(t) {
        courseSchema(t)
    }
})

export const SkillInput = inputObjectType({
    name: 'SkillInput',
    definition(t) {
        skillSchema(t)
    }
})