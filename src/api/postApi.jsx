import axios from "axios";

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1",
})

// https method
export const getCountryData = ()=>{
    return api.get("/all?fields=name,population,region,capital,flags,currencies");
};

// get method from indivisula country;

export const getCountryIndiData = (name)=>{
    return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,flags,currencies,languages,borders`);
};
