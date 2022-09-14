import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";

const Search = ({onSearchChange}) => {

  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return (
      fetch(
        `${GEO_API_URL}/cities?minPopulation=20000&namePrefix=${inputValue}`, 
        geoApiOptions)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude}, ${city.longitude}`,
              label: `${city.name}, ${city.region}, ${city.countryCode}`,
            }
          })
        }
      }
      )
      .catch(err => console.error(err))
    )
  }

  const handleChange =  (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  }

  return (
    <AsyncPaginate
    className="searchBar"
      placeholder='Search for City'
      // Debounce helps cut down on api calls
      debounceTimeout={800}
      value={search}
      onChange={handleChange}
      loadOptions={loadOptions}
    />
  )

}

export default Search;