import React, { ReactNode } from 'react'

type SectionProp = {
    title?: string
    children: ReactNode
}

const Section = ({ title = "Hey!", children }: SectionProp) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{children}</p>
        </div>
    )
}

export default Section
