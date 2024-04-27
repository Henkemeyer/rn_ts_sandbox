import { ReactNode } from "react"

type HintBoxProps = {
    mode: 'hint'
    children: ReactNode
}

type WarningBoxProps = {
    mode: 'warning'
    children: ReactNode
    severity: 'low' | 'medium' | 'high'
}

type InfoBoxProps = HintBoxProps | WarningBoxProps

export default function InfoBox(props: InfoBoxProps) {
    const { children, mode } = props

    if( mode === 'hint') {    
        return (
            <aside className="infobox infobox-hint">
                <h2>Warning</h2>
                <p>{children}</p>
            </aside>
        )
    }
    
    return (
        <aside className={`infobox infobox-warning warning--${props.severity}`}>
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    )
}