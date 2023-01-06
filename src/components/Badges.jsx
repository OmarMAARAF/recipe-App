import React from "react";
import { Badge } from "reactstrap";

export default function Badges({query,setQuery}) {
  return (
    <div className="ml-12 mb-5">
      <Badge color="dark" className="text-white bg-black px-3 py-1.5 rounded-md mr-3 cursor-pointer " onClick={()=>setQuery("Chicken")} >
        Chicken
      </Badge>
      <Badge className="text-white bg-black px-3 py-1.5 rounded-md mr-3 cursor-pointer" onClick={()=>setQuery("Beef")} >
        Beef
      </Badge>
      <Badge className="text-white bg-black px-3 py-1.5 rounded-md mr-3 cursor-pointer" onClick={()=>setQuery("Tuna")}>
      Tuna
      </Badge>
      <Badge className="text-white bg-black px-3 py-1.5 rounded-md mr-3 cursor-pointer" onClick={()=>setQuery("Tilapia")}>
      Tilapia
      </Badge>
      <Badge className="text-white bg-black px-3 py-1.5 rounded-md mr-3 cursor-pointer" onClick={()=>setQuery("Catfish")}>
      Catfish
      </Badge>
    </div>
  );
}
