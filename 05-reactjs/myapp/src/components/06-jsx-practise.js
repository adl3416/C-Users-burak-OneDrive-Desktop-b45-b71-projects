import React from 'react';
import countries from "../assets/data/countries.json";

const JsxPractise = () => {
  return (
    <>
    <h1>Countries</h1>
    <ul>
      {
        countries.map( (country, index) => <li key={index}>{country.name}</li> )
      }
    </ul>
    </>
  )
}
export default JsxPractise