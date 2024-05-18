import { useEffect, useState,  } from "react";

const useMenu = ()=>{
    const [menu ,setMemu]= useState([]);
    const [loading, setLoading]= useState(true)

    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res=>res.json())
        .then(data=>{
            
            setMemu(data);
            setLoading(false)
        })
  },[])
  return  [menu, loading ]
}

export default useMenu;