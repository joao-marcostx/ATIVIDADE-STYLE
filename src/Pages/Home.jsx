import React from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div
     
        style={{
          backgroundColor: "#574646",
          height: "190px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop:"350px",
          width:"80%",
          marginLeft:"12%",
          gap:"5em"
        }}
        
      >
        <h1>CARNE</h1>
        <div style={{
            
            backgroundColor:"#F7F7F7",
            width:"12%",
            height:"80%", 
            borderRadius:"10px",
            justifyContent:"space-around"
        }}></div>
        <div style={{
            backgroundColor:"#F7F7F7",
            width:"12%",
            height:"80%", 
            borderRadius:"10px",
            justifyContent:"space-around"
        }}></div>
        <div style={{
            backgroundColor:"#F7F7F7",
            width:"12%",
            height:"80%", 
            borderRadius:"10px",
            justifyContent:"space-around"
        }}></div>
        <div style={{
            backgroundColor:"#F7F7F7",
            width:"12%",
            height:"80%", 
            borderRadius:"10px",
            justifyContent:"space-around"
        }}></div>
      </div>

      <div
        style={{
          backgroundColor: "#574646",
          height: "190px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop:"40px",
          width:"80%",
          marginLeft:"12%",
          gap:"5em"
        }}
      >
        <h1>FRIOS</h1>
        <div style={{
            backgroundColor:"#F7F7F7",
            width:"12%",
            height:"80%", 
            borderRadius:"10px",
            justifyContent:"space-around"
        }}></div>
        <div style={{
            backgroundColor:"#F7F7F7",
            width:"12%",
            height:"80%", 
            borderRadius:"10px",
            justifyContent:"space-around"
        }}></div>
        <div style={{
            backgroundColor:"#F7F7F7",
            width:"12%",
            height:"80%", 
            borderRadius:"10px",
            justifyContent:"space-around"
        }}></div>
        <div style={{
            backgroundColor:"#F7F7F7",
            width:"12%",
            height:"80%", 
            borderRadius:"10px",
            justifyContent:"space-around"
        }}></div>
      </div>
    </div>
  );
};

export default Home;
