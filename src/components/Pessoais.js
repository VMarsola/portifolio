import React from 'react'
import eu from '../assets/eu.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"



export default function pessoais() {
  return (
    <div className="flex-row">
      <img src={eu} className="eu" alt="eu" />
      <ul>
        <li className="lista-info"><p className="texto">Vinicius Marsola de Matos</p></li>
        <li className="lista-info"><p className="texto"><FontAwesomeIcon className="icone-wpp" icon={faWhatsapp} size="lg" /> +55 11 997750373</p></li>
        <li className="lista-info"><p className="texto">vinicius.marsola1@gmail.com</p></li>
      </ul>
    </div>
  )
}


