import React from 'react'
import { cn } from '@/lib/utils'
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
    "relative group border text-foreground mx-auto text-center rounded-full transition-all duration-300",
    {
        variants: {
            variant: {
                default: "bg-blue-500/5 hover:bg-blue-500/10 border-blue-500/20",
                solid: "bg-blue-500 hover:bg-blue-600 text-white border-transparent hover:border-foreground/50 transition-all duration-200",
                ghost: "border-transparent bg-transparent hover:border-zinc-600 hover:bg-white/10",
            },
            size: {
                default: "px-7 py-3",
                sm: "px-4 py-1.5",
                lg: "px-10 py-4",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { neon?: boolean }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, neon = true, size, variant, children, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size }), className)}
                ref={ref}
                {...props}
            >
                {/* Верхняя неоновая линия */}
                <span className={cn(
                    "absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out inset-x-0 -top-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-blue-500 to-transparent", 
                    neon ? "block" : "hidden"
                )} />
                
                {children}
                
                {/* Нижняя неоновая линия */}
                <span className={cn(
                    "absolute opacity-50 group-hover:opacity-100 transition-all duration-500 ease-in-out inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-blue-500 to-transparent", 
                    neon ? "block" : "hidden"
                )} />
            </button>
        );
    }
)

Button.displayName = 'Button';

export { Button, buttonVariants };