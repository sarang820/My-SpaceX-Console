
import Axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";


const About=()=>{
    const url="https://api.spacexdata.com/v4/company";
    const [data, setData] =  useState("");

    const sendGetRequest = async () => {
        const resp = await Axios.get(url);
        setData(resp.data);
};
    if(data===""){
    sendGetRequest();
    }
    console.log(data.links);
    return(
       <>
       
       <div className="about-info">
           <div>
               <h1>Headquaters</h1>
               <ul>
                    <li>Address: Rocket Road</li>
                    <li>City: Hawthrone</li>
                    <li>State: California</li>
               </ul>
               <hr/>
           </div>
           
           <div>
               <h1>Links</h1>
               <ul>
                    <li><a href="https://www.spacex.com/">Website </a> </li>
                    <li><a href="https://www.flickr.com/photos/spacex/">flickr</a></li>
                    <li><a href="https://twitter.com/SpaceX">Twitter</a></li>
                    <li><a href="https://twitter.com/elonmusk">Elon_Twitter </a></li>
               </ul>
               <hr/>
           </div>

           <div>
               <h1>Details</h1>
               <ul>
                    <li>Name: {data.name}</li>
                    <li>Founder: {data.founder}</li>
                    <li>Founded: {data.founded}</li>
                    <li>Employees: {data.employees}</li>
                    <li>Vehicles: {data.vehicles}</li>
                    <li>Launch_sites: {data.launch_sites}</li>
                    <li>Test_sites: {data.test_sites}</li>
                    <li>CEO: {data.ceo}</li>
                    <li>CTO: {data.cto}</li>
                    <li>COO: {data.coo}</li>
                    <li>CTO_propulsions: {data.cto_propulsion}</li>
                    <li>Valuation: {data.valuation}</li>
                    <li>Summary: {data.summary}</li>
                    <li>Id: {data.id}</li>
               </ul>
               <hr/>
           </div>
       </div>
       </> 
    )
}

export default About;