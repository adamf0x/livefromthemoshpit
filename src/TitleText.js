import { Canvas } from '@react-three/fiber'
import Rect from 'react'
import Box from './Box'

const TitleText = ({text})=>{
    return(
        <h1 id="home-page-title" className="glitch">
            <span aria-hidden='true'>{text}</span>
            {text}
            <span aria-hidden='true'>{text}</span>
        </h1>
    )

}

export default TitleText