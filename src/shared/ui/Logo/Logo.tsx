import Image from 'next/image'
import logoImage from '@/public/Logo.svg'

interface LogoProps {
    size?: 'sm' | 'md' | 'lg'
}

export const Logo = ({size = 'md'}: LogoProps) => {
    const sizes = {
        sm: {
          width: 100,
          height: 100   
        },
        md: {
          width: 200,
          height: 200
        },
        lg: {
          width: 300,
          height: 300
        }
    }[size]

    return (
        <Image src={logoImage} alt="logo" width={sizes.width} height={sizes.height}/>
    )
}