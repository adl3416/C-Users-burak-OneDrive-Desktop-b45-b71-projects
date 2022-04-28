import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";


const UseEffect2 = () => {
  const [counter, setCounter] = useState(0);
  const [status, setStatus] = useState("pending");

  const artir = () => {
    setCounter(counter + 1);
  };

  useEffect( ()=>{
    document.title = counter;     /* sadece counter guncellendiginde burasi calisira ama status guncellenirse burasi calismaz */
    }, [counter]);                /* counter degıstıgınde calıstr */


  return (
    <div className="text-center">
      <div>{counter}</div>
      <Button variant="warning" onClick={artir}>
        Tıkla
      </Button>
      <Button variant="danger" onClick={()=>setStatus("done")}>Status</Button>
    </div>
  );
};
export default UseEffect2;