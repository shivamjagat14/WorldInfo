import { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../api/postApi.jsx';
import { CountryCard } from '../Component/Layout/CountryCard.jsx';
import { SearchFilter } from '../Component/UI/SearchFilter.jsx';
import { Loader } from '../Component/UI/Loader.jsx';

export const Country = () => {

  const [isPending, startTransition] = useTransition();
  const [countres, setcountry] = useState([]);

  const [search,setsearch]=useState();
  const [searchfilter,setsearchfilter]=useState("All");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setcountry(res.data);
    })
  }, []);

  // here the main search logic
  const searchCountry =(country)=>{
    if(search){
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    else{
      return countres;
    }
  }
  

  // filter Region
  const filterRegion = (country)=>{
    if(searchfilter==="All"){
      return countres;
    }
    else{
      return country.region === searchfilter;
    }
  }
  // search / filter 
  const filterCountre=countres.filter((country) => searchCountry(country)&&filterRegion(country));
  console.log(filterCountre.name);
  console.log(filterCountre.region);
  console.log(filterCountre);
  console.log(filterCountre);
  console.log(filterCountre);
if(isPending){
 return <Loader/>
}

  return (
    <section className='country-section'>
      <SearchFilter
       search={search} 
       setsearch={setsearch} 
       searchfilter={searchfilter} 
       setsearchfilter={setsearchfilter}/>

      <ul className='grid-four-cols grid'>
        {
          filterCountre .map((currcountry, index) => {
            return <CountryCard country={currcountry} key={index} />
          })
        } 
      </ul>
    </section>
  )
}
