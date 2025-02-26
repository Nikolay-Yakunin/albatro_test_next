import Image from 'next/image'
import logoImage from '@/public/Logo.svg'

interface LogoProps {
    className?: string
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary' | 'default'
}

export const Logo = ({className, size = 'md', color = 'default'}: LogoProps) => {
    const sizes = {
        sm: {
          width: 50, 
        },
        md: {
          width: 75,
        },
        lg: {
          width: 100,
        }
    }[size]

    const colors = {
      primary: "fiil-blue-500",
      secondary: "fill-gray-800",
      default: "fill-[#FFFFFF]",
    }[color]

    return (
        <Image className={`${className} ${colors}`} src={logoImage} alt="logo" width={sizes.width} />
    )
}