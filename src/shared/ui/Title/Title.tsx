import { HTMLAttributes } from "react"

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
    size?: 'sm' | 'md' | 'lg'
    children: React.ReactNode
}

export const Title = ({ className, size = 'md', children, ...rest }: TitleProps) => {
    const sizes = {
        sm: "text-[32px] lg:text-[48px]",
        md: "text-[32px] md:text-[50px]",
        lg: "text-[32px] md:text-[64px] lg:text-[80px]",
    }[size];

    return (
        <h1 className={`font-bold uppercase ${className} ${sizes}`} {...rest}>
            {children}
        </h1>
    )
}