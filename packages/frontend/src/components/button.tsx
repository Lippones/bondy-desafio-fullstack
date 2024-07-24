import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<'button'>{}


export function Button({className, children, ...props}: ButtonProps){
    return(
        <button {...props} className={twMerge('h-11 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-violet-500 font-semibold text-white text-sm', className)}>
            {children}
        </button>
    )
}