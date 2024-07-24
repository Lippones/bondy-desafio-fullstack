'use client'
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { AUTHENTICATE_MUTATION } from "@/graphql/mutations/authenticate-mutation"
import { useMutation } from "@apollo/client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const loginSchema = z.object({
  email: z.string().email('Digite um e-mail válido'),
  password: z.string().min(1, 'Digite sua senha'),
})

type LoginData = z.infer<typeof loginSchema>

export function LoginForm() {
  const [authenticate] = useMutation(AUTHENTICATE_MUTATION)
  
  const { register, handleSubmit, setError, formState:{ errors, isSubmitting } } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  })

  async function login({ email, password }: LoginData) {
    try {
      const { data } = await authenticate({
        variables: {
          email,
          password,
        }
      })
  
      console.log(data)
    } catch (error) {
      setError('password', {
        type: 'manual',
        message: 'E-mail ou senha inválidos'
      })
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(login)}>
      <div className="space-y-2">
        <label htmlFor="email" className="font-medium text-sm">E-mail</label>
        <Input type="email" id="email" {...register('email')} />
        {
          errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )
        }
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="font-medium text-sm">Senha</label>
        <Input type="password" id="password" {...register('password')} />
        {
            errors.password && (
              <span className="text-red-500 text-sm">{errors.password.message}</span>
            )
        }
      </div>

      <Button disabled={isSubmitting} type="submit" className="w-full">Login</Button>
    </form>
  )
}