import React, {useState} from "react";
import { ButtonGroup, Button, ProgressBar} from "react-bootstrap";



const Practise= () => {
  const [count, setCount] = useState(0);

  const handleCount = (cnt) => {
    if(cnt<0 || cnt>100) return;
    setCount(cnt); 
  }

  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="success" onClick={()=>handleCount(count+10)}>+</Button>
      <Button variant="light">{count}</Button>
      <Button variant="danger" onClick={()=>handleCount(count-10)}>-</Button>

      <div className="count">
      <ProgressBar variant="success" now={40} />
     <ProgressBar variant="info" now={20} />
     <ProgressBar variant="warning" now={60} />
     <ProgressBar variant="danger" now={80} />
    </div> 
    </ButtonGroup>

    
  );

 
};

export default Practise;
