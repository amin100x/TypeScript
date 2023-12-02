import React, { ReactElement } from 'react'

type HeadingProp = { title: string }

const Heading = ({ title }: HeadingProp) : ReactElement => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

export default Heading
