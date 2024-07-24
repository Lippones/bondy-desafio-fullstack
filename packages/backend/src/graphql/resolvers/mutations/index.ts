import { GraphQLResolveInfo } from 'graphql'
import { mutationTest } from './mutationTest'
import { authenticate } from './authenticate'

export default {
  mutationTest: (
    parent: any,
    args: any,
    context: any,
    info: GraphQLResolveInfo
  ) => mutationTest(parent, args, context, info),

  authenticate: (
    parent: any,
    args: { email: string; password: string },
    context: any,
    info: GraphQLResolveInfo
  ) => authenticate(parent, args, context, info),
}
