import React from 'react'


export const SearchFilter = ({search,setsearch,searchfilter,setsearchfilter}) => {


// search function
const handleInputSearch = (e)=>{
    e.preventDefault();
    setsearch(e.target.value);
};


// filter function
const handlesearchFilter = (e)=>{
   e.preventDefault();
   setsearchfilter(e.target.value);
};
 
  return (
    <div className='SearchFilter_section'>
        <input type="text" classname="searchInput" placeholder="Enter the Country" value={search} onChange={handleInputSearch}/>
        <select className="filtercountry" value={searchfilter} onChange={handlesearchFilter}>
            <option value="All">All</option>
            <option value="Africa">Africa</option> 
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Americsa">North America</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
  )
}
