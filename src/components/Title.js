import React from 'react'
import { TitleWrapper } from './Title.styled'

const Title = ({title,subtitile}) => (
        <TitleWrapper>
            <h1>{title}</h1>
    <p>{subtitile}</p>
            
        </TitleWrapper>
    )


export default Title
