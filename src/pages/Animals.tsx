import React from 'react'
import AnimalLeft from '../components/AnimalLeft'
import AnimalRight from '../components/AnimalRight'

export default function Animals() {
  return (
    <div>
      {/* Hero */}
      <img src="/Zoo/Images/Gruene-Meeresschildkroete.jpg" alt="panda" className='w-screen object-cover xl:h-128 h-96'/>
      <AnimalLeft 
      link = "panda"
      image="panda liegt auf baum_ergebnis.jpg"
      name="Grosser Panda"
      sciName="Grosser Panda (Ailuropoda melanoleuca)"
      endangered="Verletzlich"
      popultaion="1864 Individuen (Stand 2015)."
      weight="bis zu 125 kg"
      size="1,2 m – 1,8 m"/>
      <AnimalRight
      link = "polarbear"
      image="Polar bear.jpg"
      name="Eisbär"
      sciName="Eisbär (Ursus maritimus)"
      endangered="Verletzlich"
      popultaion="Weltweit: 22'000 bis 31'000 Eisbären (IUCN 2016)."
      weight="150 - 650 kg"
      size="1,8 - 2,8 m"/>
      <AnimalLeft 
      link = "tiger"
      image="tiger-in-petchaburi.jpg"
      name="Tiger"
      sciName="Tiger (Panthera tigris)"
      endangered="Stark gefährdet"
      popultaion="4900 Individuen"
      weight="75 – 325 kg"
      size="1,5 – 2,9 m"/>
      <AnimalRight 
      link = "turtle"
      image="turtle-reef.jpg"
      name="Meeresschildkröten"
      sciName="Meeresschildkröten (Cheloniidae)"
      endangered="Stark gefährdet"
      popultaion="Keine gesicherten Zahlen."
      weight="bis zu 200 Kilogramm"
      size="70 cm – 2 m"/>
    </div>
  )
}
