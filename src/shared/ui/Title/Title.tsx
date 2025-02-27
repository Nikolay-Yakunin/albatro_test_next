import { HTMLAttributes } from "react"

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
    className?: string
    size?: 'sm' | 'md' | 'lg'
    children: React.ReactNode
}

export const Title = ({ className = "", size = 'md', children, ...rest }: TitleProps) => {
    // Мобильная версия (базовый): 32px для всех
    // Планшет (md): sm – 32px, md – 50px, lg – 64px
    // Десктоп (lg): sm – 48px, md – 50px, lg – 80px
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