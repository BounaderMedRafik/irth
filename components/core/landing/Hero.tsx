import React from "react";

const Hero = () => {
  return (
    <div style={{   marginTop:"70px",width:"100%",height:"100%",backgroundColor:"transparent",display:"flex",flexDirection:"row"}}>
 <div style={{width:"40%",height:"100%",display:"flex",justifyContent:"space-evenly",gap:"20vh",flexDirection:"column"}}>
 <div  style={{height:"100%",alignItems:"center",flexDirection:"column",display:"flex",gap:"2vh",paddingLeft:"10%",paddingTop:"4%"}}> 
    <div style={{display:"flex",flexDirection:"column",fontSize:"250%",fontWeight:"600",gap:"1vh",justifyContent:"start",alignItems:"start"}}>
      <p style={{fontFamily:"Inknut Antiqua"}}>Preserving Heritage</p><p style={{fontSize:"100%",fontWeight:"600",fontFamily:"Inknut Antiqua"}}>With Intelligence</p>
      </div>
  <div  style={{fontWeight:"400",fontSize:"2vh"}}>AI-powered exploration of cultural legacy </div>
  <div  style={{display:"flex", gap:'2vh'}}><button style={{backgroundColor:"#D7FCD4",padding:"1%",width:"17vh",height:"auto",fontWeight:"600",borderRadius:"8px",}}>Start Exploring</button> <button style={{backgroundColor:"transparent",border:"1px solid black",padding:"1%",width:"17vh",height:"auto",fontWeight:"600",borderRadius:"8px",}}>Chat with IRTH</button> </div>
  </div>
  <div style={{display:"flex",width:"100%",height:"20vh",gap:"3vh",justifyContent:"center",alignItems:"center"}}>
  <div style={{display:"flex",justifyContent:"center",flexDirection:"column",fontWeight:"500"}}><img style={{border:"2px solid #222222",backgroundColor:"white",borderRadius:"20px"}}  src="landing imgs/logo 1.png"/><p style={{textAlign:"center"}} >AI Assistent</p></div>
  <div style={{display:"flex",justifyContent:"center",flexDirection:"column",fontWeight:"500"}}><img style={{border:"2px solid #222222",backgroundColor:"white",borderRadius:"20px"}} src='landing imgs/icon hirtage 1.png'/><p  style={{textAlign:"center"}}>Cultural Heritage</p></div>
  </div>
 </div>

  <div  style={{width:"60%",height:"100%",backgroundColor:""}}><img style={{scale:"0.8"}} src ="landing imgs/Untitled-4 1.png"/>

  </div>
    </div>
  );
};

export default Hero;
