import React from 'react'
import City from './City'

const getPinnedCities = (cities) => {
  console.log("in get pinned cities");
  // return (
  //   cities.forEach( city => {
  //     return <City name={city.name} desc={city.desc} temp={city.temp} />
  //   })
  // )
}

const Cities = ({pinnedCities}) => {
  return (
    <section className="Cities">
       {/*{ getPinnedCities(pinnedCities) }*/}
       <City />
       <City />
       <City />
    </section>
  )
}

export default Cities
