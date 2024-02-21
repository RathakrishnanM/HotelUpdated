import StripeCheckout from 'react-stripe-checkout';
import {useState,useEffect} from "react";
import axios from 'axios';
const key="pk_test_51Oc2VtSC4oDF879mvvBh17W86c6h3F4py0tYYgR4g8BCLNE0pAOXsC7Yzu8kgHMq8yo8wPUsIaWNsII3TLo8qbXU00aGIAvQDy"
const Pay=()=>{
    const [stripeToken,setStripeToken]=useState(null)
    const onToken=()=>(token)=>{
        setStripeToken(token);
    };
    useEffect(()=>{
    const makeRequest=async()=>{
        if(stripeToken){
        try{
            const res = await axios.post("http://localhost:5003/api/checkOut/payment",{
            tokenId:stripeToken.id,
            amount:2000,
          });
          console.log(res.data);
        }catch(err){
            console.log(err);
        }
    }
};
    stripeToken && makeRequest();
    },[stripeToken])
    return(
        <div style={{
            height:"100vh",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
        }}
        >
            {stripeToken ? (<span>ProcessingInstruction.Please wait</span>):(
            <StripeCheckout name="wow stays"
             image="images/hotel-2.png"
             billingAddress
             shippingAddress={false}

             amount={2000}
             token={onToken}
             stripeKey={key}>
            <button style={{
                border:"none",
                widht:120,
                borderRadius:5,
                padding:"20px",
                backgroundColor:"black",
                color:"white",
                fontWeight:"600",
                cursor:"pointer",
            }}>
                Pay Now
            </button>
            </StripeCheckout>
            )}
            
        </div>
    )
}
export default Pay;