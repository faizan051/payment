import React, { useState, useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const KEY ="pk_test_51L7G4MFQp7JJFE0WPqrcd8A9DGxwv7JiJ3Ro08T5Q5KcUmXmP7ClptucP6pkWYkRaJlGwNvqJyRxD0E8PGwc1EM300XfqcTBaz"

const Pay = () => {

  const[stripeToken, setStripeToken] = useState(null);

  const navigate = useNavigate()


  const onToken=(token)=>{
    setStripeToken(token);
  };

  useEffect(()=>{
    const makeRequest=async()=>{
      try{
               const res = await axios.post(
                 "http:// localhost:5000/api/checkout/payment",
                 {
                  
                  tokenId:stripeToken.id,
                  amount:2000,

                 }
                 );
                 console.log(res.data);
                 navigate.push("/success")
      }catch(err){
        console.log(err)
     }
   }
   stripeToken && makeRequest();

  },[stripeToken, navigate])




  return (
    <div 
    style={{
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    }}
    >
{stripeToken ? (<span>Please wait Processing...</span>) : (


<StripeCheckout 
name="YartCom"
image="/images/logo.png"
billingAddress
shippingAddress
description="Your total is $20"
amount={2000}
token={onToken}
stripeKey={KEY}
>


    <button
    style={{
        padding:"10px 20px",
        backgroundColor:"black",
        borderRadius:"10px",
        color:"white"
    }}
    >Pay Now</button>
    </StripeCheckout>
)}
    </div>
  )
}

export default Pay