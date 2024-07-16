"use client"; 

import React, { useEffect, useState } from 'react'; 
import { fetchVacancies } from '../../api/vacancy/api.js'; 
 
const ItemList = () => { 
    const [eles, setItems] = useState([]); 
    const [showMore, setShowMore] = useState({})
 
    useEffect(() => { 
        const fetchData = async () => { 
            const data = await fetchVacancies();
            if (data) { 
                setItems(data); 
            } 
        }; 
 
        fetchData(); 
    }, []); 

    const ShowSalary = (item) => {
      if (item.salary == 'Договорная'){
        return item.salary  + ''
      } else{
        return item.salary + ' cом'
      }
    }

    const toggleShow = (itemId) => {
      setShowMore(prevState => ({
          ...prevState,
          [itemId]: !prevState[itemId]
      }));
  }

 
    return ( 
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {eles.map(item => ( item.is_actual ? 
                <div onClick={() => toggleShow(item.id)} key={item.id} style={{ border: "2px solid #3FADFF ", minHeight: "115px",height: 'auto', paddingTop:"15px", paddingLeft:"50px",paddingRight:"50px", paddingBottom:"15px", marginLeft:"150px" , marginTop:"15px", marginBottom:"15px", fontWeight:"bold", backgroundColor:"#70CBFF  ", color:"black", width:"1200px", borderRadius:"20px"}}> 
                    <div className='title' style={{ display: "block",  fontSize:"25px", width:'500px'}}> 
                        {item.role}
                    </div> 
                    <div style={{ paddingRight:"50px", float: "left", paddingTop: '10px', display: "block",  fontSize:"17px",}}> 
                    {showMore[item.id] ? item.requirements : item.requirements.slice(0, 85) + "..."}
                    </div> 
                    <div style={{paddingRight:"50px", float: "right",  display: "block",  fontSize:"22px"}}> 
                        {ShowSalary(item)}
                    </div> 
                </div> : null
            ))} 
        </div> 
    ); 
}; 
 
export default ItemList;
