import React from 'react'
import {NavLink} from "react-router-dom"

export const CountryCard = ({country}) => {
    const{flags,name,currencies,capital,population}=country;
  return (
    <li className='country-card '>
        <div className="container-card ">
          <div className="country-img">
            <img src={flags.png} alt={flags.alt} />
          </div>
            <div className="details">
                <p className='country-name'>
                  {name.common.length > 11? name.common.slice(0.11)+"...":
                  name.common}
                  </p>
                <p><span className="capital">Capital:</span>{capital}</p>
                <p><span className="population">population:</span>{population}</p>
            </div>
            <div className="button">
              <NavLink to={`/country/${name.common}`}>
                <button type="button" className='countrybtn'>Read More</button>
              </NavLink>
            </div>
        </div>
    </li>
  )
}
