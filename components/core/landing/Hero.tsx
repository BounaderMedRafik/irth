import React from "react";

const Hero = () => {
  return (
    <div style={{width:"100%",height:"100vh",backgroundColor:"white",display:"flex",flexDirection:"row"}}>
 <div style={{width:"100%",height:"100%"}}>
 <div  style={{width:"40%",height:"100%",backgroundColor:"",flexDirection:"column",display:"flex",gap:"2vh",paddingLeft:"10%",paddingTop:"4%"}}> 
    <div style={{display:"flex",flexDirection:"column",fontSize:"250%",fontWeight:"600",gap:"1vh",width:"100%",justifyContent:"start",alignItems:"start"}}>
      <p style={{fontFamily:"Inknut Antiqua"}}>Preserving Heritage</p><p style={{fontSize:"100%",fontWeight:"600",fontFamily:"Inknut Antiqua"}}>With Intelligence</p>
      </div>
  <div  style={{fontWeight:"400",fontSize:"2vh"}}>AI-powered exploration of cultural legacy </div>
  <div  style={{display:"flex", gap:'2vh'}}><button style={{backgroundColor:"#D7FCD4",padding:"1%",width:"17vh",height:"auto",fontWeight:"600",borderRadius:"8px",}}>Start Exploring</button> <button style={{backgroundColor:"transparent",border:"1px solid black",padding:"1%",width:"17vh",height:"auto",fontWeight:"600",borderRadius:"8px",}}>Chat with IRTH</button> </div>
  </div>
 </div>

  <div  style={{width:"50%",height:"100%",backgroundColor:"blue"}}><img style={{scale:"0.8"}} src ="Untitled-4 1.png"/></div>
    </div>
  );
};

export default Hero;
