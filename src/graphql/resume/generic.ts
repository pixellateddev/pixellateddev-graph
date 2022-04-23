export const personalDetailsSchema = (t: any) => {
    t.nonNull.string('fullName')
    t.nonNull.string('location')
    t.nonNull.string('phoneNumber')
    t.nonNull.string('email')
    t.string('currentRole')
    t.string('website')
    t.string('github')
    t.string('linkedin')
}


export const jobSchema = (t: any) => {
    t.nonNull.string('role')
    t.nonNull.string('orgName')
    t.nonNull.string('startDate')
    t.string('endDate')
    t.nonNull.boolean('currentlyWorking')
    t.string('description')
}


export const courseSchema = (t: any) => {
    t.nonNull.string('courseName')
    t.nonNull.string('instituteName')
    t.nonNull.string('startYear')
    t.string('endYear')
    t.nonNull.boolean('currentlyPersuing')
    t.string('location')
    t.nonNull.string('score')
}

export const skillSchema = (t: any) => {
    t.nonNull.string('skill')
    t.nonNull.int('proficiency')
    t.string('description')
}