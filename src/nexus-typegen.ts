/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./context"
import type { FieldShieldResolver, ObjectTypeShieldResolver } from "nexus-shield"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CourseInput: { // input type
    courseName: string; // String!
    currentlyPersuing: boolean; // Boolean!
    endYear?: string | null; // String
    instituteName: string; // String!
    location?: string | null; // String
    score: string; // String!
    startYear: string; // String!
  }
  JobInput: { // input type
    currentlyWorking: boolean; // Boolean!
    description?: string | null; // String
    endDate?: string | null; // String
    orgName: string; // String!
    role: string; // String!
    startDate: string; // String!
  }
  PersonalDetailsInput: { // input type
    currentRole?: string | null; // String
    email: string; // String!
    fullName: string; // String!
    github?: string | null; // String
    linkedin?: string | null; // String
    location: string; // String!
    phoneNumber: string; // String!
    website?: string | null; // String
  }
  SkillInput: { // input type
    description?: string | null; // String
    proficiency: number; // Int!
    skill: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  AuthPayload: { // root type
    token: string; // String!
    tokenType: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Course: { // root type
    courseName: string; // String!
    currentlyPersuing: boolean; // Boolean!
    endYear?: string | null; // String
    id: string; // ID!
    instituteName: string; // String!
    location?: string | null; // String
    score: string; // String!
    startYear: string; // String!
  }
  Info: { // root type
    code: number; // Int!
    message: string; // String!
    status: string; // String!
  }
  Job: { // root type
    currentlyWorking: boolean; // Boolean!
    description?: string | null; // String
    endDate?: string | null; // String
    id: string; // ID!
    orgName: string; // String!
    role: string; // String!
    startDate: string; // String!
  }
  Mutation: {};
  PersonalDetails: { // root type
    currentRole?: string | null; // String
    email: string; // String!
    fullName: string; // String!
    github?: string | null; // String
    linkedin?: string | null; // String
    location: string; // String!
    phoneNumber: string; // String!
    website?: string | null; // String
  }
  Query: {};
  Resume: { // root type
    educationDetails?: NexusGenRootTypes['Course'][] | null; // [Course!]
    id: string; // ID!
    personalDetails?: NexusGenRootTypes['PersonalDetails'] | null; // PersonalDetails
    skills?: NexusGenRootTypes['Skill'][] | null; // [Skill!]
    title: string; // String!
    userId: string; // String!
    workExperience?: NexusGenRootTypes['Job'][] | null; // [Job!]
  }
  Skill: { // root type
    description?: string | null; // String
    id: string; // ID!
    proficiency: number; // Int!
    skill: string; // String!
  }
  User: { // root type
    email: string; // String!
    id: string; // String!
    username?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string; // String!
    tokenType: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Course: { // field return type
    courseName: string; // String!
    currentlyPersuing: boolean; // Boolean!
    endYear: string | null; // String
    id: string; // ID!
    instituteName: string; // String!
    location: string | null; // String
    score: string; // String!
    startYear: string; // String!
  }
  Info: { // field return type
    code: number; // Int!
    message: string; // String!
    status: string; // String!
  }
  Job: { // field return type
    currentlyWorking: boolean; // Boolean!
    description: string | null; // String
    endDate: string | null; // String
    id: string; // ID!
    orgName: string; // String!
    role: string; // String!
    startDate: string; // String!
  }
  Mutation: { // field return type
    addCourse: NexusGenRootTypes['Resume']; // Resume!
    addJobExperience: NexusGenRootTypes['Resume']; // Resume!
    addSkill: NexusGenRootTypes['Resume']; // Resume!
    createResume: NexusGenRootTypes['Resume']; // Resume!
    deleteCourse: NexusGenRootTypes['Resume']; // Resume!
    deleteJobExperience: NexusGenRootTypes['Resume']; // Resume!
    deleteResume: NexusGenRootTypes['Info']; // Info!
    deleteSkill: NexusGenRootTypes['Resume']; // Resume!
    editPersonalDetails: NexusGenRootTypes['Resume']; // Resume!
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    signup: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    updateCourse: NexusGenRootTypes['Resume']; // Resume!
    updateJobExperience: NexusGenRootTypes['Resume']; // Resume!
    updateSkill: NexusGenRootTypes['Resume']; // Resume!
  }
  PersonalDetails: { // field return type
    currentRole: string | null; // String
    email: string; // String!
    fullName: string; // String!
    github: string | null; // String
    linkedin: string | null; // String
    location: string; // String!
    phoneNumber: string; // String!
    website: string | null; // String
  }
  Query: { // field return type
    me: NexusGenRootTypes['User'] | null; // User
    resume: NexusGenRootTypes['Resume'] | null; // Resume
    resumes: NexusGenRootTypes['Resume'][]; // [Resume!]!
    user: NexusGenRootTypes['User'] | null; // User
    users: Array<NexusGenRootTypes['User'] | null>; // [User]!
  }
  Resume: { // field return type
    educationDetails: NexusGenRootTypes['Course'][] | null; // [Course!]
    id: string; // ID!
    personalDetails: NexusGenRootTypes['PersonalDetails'] | null; // PersonalDetails
    skills: NexusGenRootTypes['Skill'][] | null; // [Skill!]
    title: string; // String!
    userId: string; // String!
    workExperience: NexusGenRootTypes['Job'][] | null; // [Job!]
  }
  Skill: { // field return type
    description: string | null; // String
    id: string; // ID!
    proficiency: number; // Int!
    skill: string; // String!
  }
  User: { // field return type
    email: string; // String!
    id: string; // String!
    username: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayload: { // field return type name
    token: 'String'
    tokenType: 'String'
    user: 'User'
  }
  Course: { // field return type name
    courseName: 'String'
    currentlyPersuing: 'Boolean'
    endYear: 'String'
    id: 'ID'
    instituteName: 'String'
    location: 'String'
    score: 'String'
    startYear: 'String'
  }
  Info: { // field return type name
    code: 'Int'
    message: 'String'
    status: 'String'
  }
  Job: { // field return type name
    currentlyWorking: 'Boolean'
    description: 'String'
    endDate: 'String'
    id: 'ID'
    orgName: 'String'
    role: 'String'
    startDate: 'String'
  }
  Mutation: { // field return type name
    addCourse: 'Resume'
    addJobExperience: 'Resume'
    addSkill: 'Resume'
    createResume: 'Resume'
    deleteCourse: 'Resume'
    deleteJobExperience: 'Resume'
    deleteResume: 'Info'
    deleteSkill: 'Resume'
    editPersonalDetails: 'Resume'
    login: 'AuthPayload'
    signup: 'AuthPayload'
    updateCourse: 'Resume'
    updateJobExperience: 'Resume'
    updateSkill: 'Resume'
  }
  PersonalDetails: { // field return type name
    currentRole: 'String'
    email: 'String'
    fullName: 'String'
    github: 'String'
    linkedin: 'String'
    location: 'String'
    phoneNumber: 'String'
    website: 'String'
  }
  Query: { // field return type name
    me: 'User'
    resume: 'Resume'
    resumes: 'Resume'
    user: 'User'
    users: 'User'
  }
  Resume: { // field return type name
    educationDetails: 'Course'
    id: 'ID'
    personalDetails: 'PersonalDetails'
    skills: 'Skill'
    title: 'String'
    userId: 'String'
    workExperience: 'Job'
  }
  Skill: { // field return type name
    description: 'String'
    id: 'ID'
    proficiency: 'Int'
    skill: 'String'
  }
  User: { // field return type name
    email: 'String'
    id: 'String'
    username: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addCourse: { // args
      course: NexusGenInputs['CourseInput']; // CourseInput!
      resumeId: string; // ID!
    }
    addJobExperience: { // args
      newJob: NexusGenInputs['JobInput']; // JobInput!
      resumeId: string; // ID!
    }
    addSkill: { // args
      resumeId: string; // ID!
      skill: NexusGenInputs['SkillInput']; // SkillInput!
    }
    createResume: { // args
      title: string; // String!
    }
    deleteCourse: { // args
      courseId: string; // ID!
      resumeId: string; // ID!
    }
    deleteJobExperience: { // args
      jobId: string; // ID!
      resumeId: string; // ID!
    }
    deleteResume: { // args
      resumeId: string; // ID!
    }
    deleteSkill: { // args
      resumeId: string; // ID!
      skillId: string; // ID!
    }
    editPersonalDetails: { // args
      personalDetails: NexusGenInputs['PersonalDetailsInput']; // PersonalDetailsInput!
      resumeId: string; // ID!
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    signup: { // args
      email: string; // String!
      password: string; // String!
    }
    updateCourse: { // args
      course: NexusGenInputs['CourseInput']; // CourseInput!
      courseId: string; // ID!
      resumeId: string; // ID!
    }
    updateJobExperience: { // args
      job: NexusGenInputs['JobInput']; // JobInput!
      jobId: string; // ID!
      resumeId: string; // ID!
    }
    updateSkill: { // args
      resumeId: string; // ID!
      skill: NexusGenInputs['SkillInput']; // SkillInput!
      skillId: string; // ID!
    }
  }
  Query: {
    resume: { // args
      resumeId: string; // ID!
    }
    user: { // args
      id: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
    /**
     * Default authorization rule to execute on all fields of this object
     */
    shield?: ObjectTypeShieldResolver<TypeName>
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Authorization rule to execute for this field
     */
    shield?: FieldShieldResolver<TypeName, FieldName>
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}