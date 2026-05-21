import React, { useEffect, useState, useTransition } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getCountryIndiData } from '../../api/postApi';


export const CountryDetails = () => {
    const params= useParams();
      const [isPending, startTransition] = useTransition();
      const [countryinfo,setcountryinfo]=useState(" ");
    
      useEffect(() => {
        startTransition(async () => {
          const res = await getCountryIndiData(params.id);
          console.log(res.data[0]);
          setcountryinfo(res.data[0]);
          // if(res.status==200){
          // }
        }) 
      }, []);
    
    console.log(countryinfo.capital);


  if(isPending) return <h1>Loding</h1>
  return (
    <section className='card countryDetail-section ontainer'>
      <div className=" countrydetailCard container-card bg-white-box">
        <div className="img">
          <img src={countryinfo?.flags?.png} alt={countryinfo?.flags?.alt} srcset="" />
        </div>
        <div className="county-details">
          <h1>{Object.values(countryinfo?.name?.nativeName || {})[0]?.official}</h1>
          <p><span>Native Name : </span>{Object.values(countryinfo?.name?.nativeName || {})[0]?.common}</p>
          <p><span>Border : </span>{countryinfo.borders?.join(", ")}</p>
          <p><span>Population : </span>{countryinfo.population}</p>
          <p><span>Region : </span>{countryinfo.region}</p>
          <p><span>Sub Region : </span>{countryinfo.subregion}</p>
          <p><span>Capital : </span>{countryinfo.capital}</p>
          <p><span>Currencies : </span>
           {Object.values(countryinfo?.currencies || {}).map((currency) => currency.name).join(", ")}</p>
         <p><span>Languages : </span>
          {Object.values(countryinfo?.languages || {}).join(", ")}</p>
        </div>
        <div className="country-card-backBtn">  
          <NavLink to="/country" className="Back_btn">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>  
    </section>
  )
} 