import React from 'react'

function CardWrapper() {
    return <div>
      <CardWrapper>
        hai there 
      </CardWrapper>
      <CardWrapper>
      <div>
          inside div
        </div> 
      </CardWrapper>
    </div>
}
function CardWrapper({children}){
  return <div style={{border: "2px solid black",borderRadius:"5px", color:"red", padding:"50px"}}>
    {children}
  </div>
}

export default CardWrapper