import Link from "next/link"
import { LoginForm } from "./components/login-form"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Login",
  description: "Faça login na sua conta para acessar o conteúdo exclusivo.",
}

export default function Login() {
  return (
    <div className="min-h-screen grid md:grid-cols-[40%_1fr] p-2">
      <div className="px-4 flex justify-center items-center">
        <div className="flex flex-col gap-4 px-4 md:max-w-[400px] w-full">
          <h2 className="text-2xl font-bold">Bem-vindo!</h2>
          <p className="text-xs">Por favor, digite suas credenciais para prosseguir.</p>
          <LoginForm />
        </div>
      </div>
      <div className="bg-violet-500 h-full max-md:hidden rounded-2xl flex items-center justify-center">
        <Link href="https://lippe.dev/pt-br" className="text-3xl font-semibold text-white underline">Feito com 💜 por Filipe Vieira da Silva</Link>
      </div>
    </div>
  )
}