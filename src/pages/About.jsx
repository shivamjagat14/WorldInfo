import React from 'react'
import countryInfo from "../api/countyData.json"

export const About = () => {
  return (
    <section className='about-section'>
      <div className="container">
        <h2 className='container-title'>
          Here are the Intersting Facts
          <br />
          We're proud of
        </h2>
        <div className="grandient-cards">
          {
            countryInfo.map((countrys) => {
              const { id, country, capital, population, interesting_fact } = countrys
              return (
                <div className="card" key={id}>
                  <div className="container-card">
                    <p className="country-name">{country}</p>
                    <p>
                      <span className='card-description'>capital:</span>
                      {capital}
                    </p>
                    <p>
                      <span className='card-description'>Population</span>
                      {population}
                    </p>
                    <p>
                      <span className="card-description">Interesting Fact:</span>
                      {interesting_fact}
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
