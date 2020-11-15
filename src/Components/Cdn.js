/** @jsx jsx */

import { useState } from 'react'
import axios from 'axios'

import Media from '../Layout/Media'

const Cdn = (props) => {
    const [image, setImage] = useState('')
    const [imagePlaceholder, setImagePlaceholder] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const url = props.image || props.src
    let newProps = JSON.parse(JSON.stringify(props))
    newProps.width = `${newProps.width}px`
    newProps.height = `${newProps.height}px`

    if(image === '') {
        let encodedUrl = encodeURIComponent(url)
        axios({
            method:'GET',
            url: `${process.env.API_URL}/cdn?url=${encodedUrl}&w=${props.width / 10}&h=${props.height / 10}`,
            headers:{ 'Content-Type': 'application/json' }
        })
        .then(response => response.data)
        .then(data => {
            setImagePlaceholder(data)

            axios({
                method:'GET',
                url: `${process.env.API_URL}/cdn?url=${encodedUrl}&w=${props.width}&h=${props.height}`,
                headers:{ 'Content-Type': 'application/json' }
            })
            .then(response => response.data)
            .then(data => {
                setImage(data)
                setTimeout(() => {
                    setIsLoading(false)
                }, 100)
            })
        })
    }

    return <Media {...newProps} imagePlaceholder={imagePlaceholder} image={image} isLoading={isLoading} blur="20px"/>
    
}

export default Cdn