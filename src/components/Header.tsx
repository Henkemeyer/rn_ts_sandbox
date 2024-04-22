import { type ReactNode } from 'react';

interface Image { 
    src:string, 
    alt:string
}

type HeaderProps = {
    image:Image
    children: ReactNode
}

export default function Header({ image, children }: HeaderProps) {
    return <header>
        <img {...image}/>
        {children}
    </header>
}
