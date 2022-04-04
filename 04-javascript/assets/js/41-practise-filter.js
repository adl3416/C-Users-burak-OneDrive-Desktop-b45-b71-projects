import { countries } from "../data/countries.js";

const loadCountry = (cc) =>{
  alert(cc);

  // filtreleme yapılacak ve ilgili ülke seçilip detayları bir div içinde gösterilecek
}


const loadCountries = () => { 
  let rows = "";
  for (let country of countries) {
    rows += `<tr>
    <td>${country.ccn3}</td>
    <td>${country.name.common}</td>
    <td>${country.area}km<sup>2</sup></td>
    <td></td>
    </tr>`;
  }

  document.querySelector("#tblCountries tbody").innerHTML = rows;

}

loadCountries();


document.querySelectorAll("#tblCountries tbody tr").forEach(row => {
  row.addEventListener('click', ()=>{

    let kod = row.querySelector("td:first-child").innerText;

    loadCountry(kod);
  });
})

