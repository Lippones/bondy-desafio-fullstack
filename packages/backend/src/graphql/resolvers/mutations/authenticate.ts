import { GraphQLError } from 'graphql'
import { User } from '../../../models/User'
import bcrypt from 'bcrypt'

export const authenticate = async (
  _parent,
  args: { email: string; password: string },
  _context,
  _info
) => {
  try {
    const userExits = await User.findOne({
      email: args.email,
    })

    if (!userExits) {
      throw new GraphQLError('User not found', {
        extensions: {
          code: '404',
        },
      })
    }

    const passwordMatch = await bcrypt.compare(
      args.password,
      userExits.password
    )

    if (!passwordMatch) {
      throw new GraphQLError('Password does not match', {
        extensions: {
          code: '401',
        },
      })
    }

    return {
      id: userExits._id,
      email: userExits.email,
      name: userExits.name,
      company: userExits.company,
    }
  } catch (error) {
    throw new GraphQLError('Error authenticating user')
  }
}
