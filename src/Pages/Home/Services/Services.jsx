import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services , setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
     return (
        <div className="text-center mt-2 mb-3">
            <h2 className="text-xl font-bold text-red-400">Service</h2>
             <h2 className="text-4xl font-bold ">Our Service Area</h2>
             <p className="text-[#737373]">The majority have suffered alteration in some form, by injected humour, or <br /> randomised words which don't look even slightly believable. </p>
             

             <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-2">
                {
                    services.map(service => <ServicesCard key={service} service={service}></ServicesCard>)
                }
             </div>
            
        </div>
    );
};

export default Services;