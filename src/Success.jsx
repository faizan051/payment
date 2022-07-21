import React from 'react'

const success = () => {
  return (
   <div
   style={{
       height:"100vh",
       display:"flex",
       justifyContent:"center",
       alignItems:"center",
       flexDirection:"column"

   }}>

<h3 style={{
    textAlign:"center",
    color:"gray",

}}>Thanks For Shopping</h3>
<button
style={{
    padding :"15px 20px",
    border:"none",
    borderRadius:"10px",
    color:"white",
    fontWeight:"700",
    backgroundColor:"teal",
}}
>
Successful 
</button>

<p
style={{
    color:"gray",
    width:"30%",
    textAlign:"center",
    fontWight:"600"
}}
>
    Your Order has been Placed. Thanks for chossing YartCom.
</p>

   </div>
  )
}

export default success