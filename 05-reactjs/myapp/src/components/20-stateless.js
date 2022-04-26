
import React from 'react'

const Stateless = () => {

    let counter = 10;

    const artir = () => { 
        counter++;
        console.log(counter);
        document.querySelector("b").innerText = counter;  /* bu sekilde yapcaksakm eger react a gerek yok */
        // Bu örnekte state kullanılmadı. document.queryselector ile React DOM
        // bypass edilerek doğrudan gerçek DOM a yazıldı
        // BU REACT İÇİN İSTENİLEN BİR DURUM DEĞİL
    }

  return (
    <div>
        <b>{counter}</b>
        <button onClick={artir} >Artır</button>
    </div>
  )
}

export default Stateless