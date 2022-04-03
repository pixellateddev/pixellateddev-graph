import { generic, ruleType } from 'nexus-shield';

export const isAuthenticated = generic(ruleType({
    resolve: async (_, __, ctx) => {
        if (!ctx.userId) {
            return false
        }
        const user = await ctx.prisma.user.findUnique({ where: {id: ctx.userId! }})
        if (!user) {
            return false
        }
        ctx.user = user
        return true
    }
}))