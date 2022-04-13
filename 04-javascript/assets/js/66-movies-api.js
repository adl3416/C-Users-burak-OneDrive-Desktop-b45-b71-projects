
const searchShow= (show) => {
    fetch(`https://api.tvmaze.com/search/shows?q=${show}`)      /* burda endpointe baglaniyoruz */
    .then(resp=> resp.json())                                  /* burda cevabi karsiliyoruz  cevabijson a gonderiyo oda log dayata gonderiyor*/
    .then(data=> console.log(data));

}
export{searchShow}