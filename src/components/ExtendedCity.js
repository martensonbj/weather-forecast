import React from 'react'

const getDays = () => {
  let things = [0, 1, 2, 3, 4, 5]
  return things.map((thing, i) => {
    return (
      <div key={i} className="extended-day">
        <h3>Day Of Week</h3>
        <div className="extended-icon">Icon Goes Here</div>
        <p className="extended-high">
          <span className="title">High:</span>
          <span className="data">100</span>
        </p>
        <p className="extended-low">
          <span className="title">Low:</span>
          <span className="data">100</span>
        </p>
        <p className="extended-Wind">
          <span className="title">Wind:</span>
          <span className="data">100</span>
        </p>
      </div>
    )
  })
}

const ExtendedCity = (props) => {
  return (
    <section className="ExtendedCity">
      <h2>5 Day Extended Forecast: <span>City Name</span></h2>
      <section className="extended-days">
        { getDays() }
      </section>
    </section>
  )
}

export default ExtendedCity
