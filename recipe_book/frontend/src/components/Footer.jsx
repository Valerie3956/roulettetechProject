import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard } from "@fortawesome/free-solid-svg-icons"

export default function Footer(){
    return(
        <div className = "footer">
            <a href = "https://github.com/Valerie3956/roulettetechProject" >
            <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href = "https://valeriesmith.dev">
        <FontAwesomeIcon icon={faAddressCard} />
        </a>
        </div>
    )
}