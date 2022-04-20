import React from 'react'

const StyleInternal = () => {

  const stil = {
      color:"red", 
      textAlign: "center",
     backgroundColor: "yellow" 
    };

  return (
      <>

    <div style={stil}>StyleInternal</div>
    <div style={{...stil, color: "blue"}}> Hello</div>     {/* {...stil, color: "blue"} ile  sariyazi yi ezerek mavi yaptik sadece bu satir icin*/}
    <div style={stil}>StyleInternal</div>

    </>
  )
}

export default StyleInternal