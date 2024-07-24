'use client'
import { ComponentProps, forwardRef } from "react"
import { twMerge } from "tailwind-merge"

interface InputProps extends ComponentProps<'input'>{}

export const Input = forwardRef<HTMLInputElement, InputProps>(({className, ...props}, ref) => {
    return(
      <input 
        {...props} 
        ref={ref} 
        className={twMerge('h-11 px-4 w-full rounded-md border border-zinc-200 outline-none focus:border-violet-500', className)}
      />
    )
})