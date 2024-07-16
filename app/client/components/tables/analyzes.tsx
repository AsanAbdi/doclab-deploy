"use client"; 

import React, { useEffect, useState } from 'react'; 
import { fetchAnalyzes } from '../../api/analyzes/api.js'; 
 
const ItemList = () => { 
    const [els, setEls] = useState([]); 
    const [showMore, setShowMore] = useState({})
 
    useEffect(() => { 
        const fetchData = async () => { 
            const data = await fetchAnalyzes();
            if (data) { 
                setEls(data); 
            } 
        }; 
 
        fetchData(); 
    }, []); 

    const toggleShow = (itemId: string) => {
      setShowMore(prevState => ({
          ...prevState,
          // @ts-ignore
          [itemId]: !prevState[itemId]
      }));
  }

    return ( 
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {els.map(item => ( item?.is_actual ? 
                <div onClick={() => toggleShow(item.id)} key={item.id} style={{ border: "2px solid #00D4FF", minHeight: "115px",height: 'auto', paddingTop:"15px", paddingLeft:"50px",paddingRight:"50px", paddingBottom:"15px", marginLeft:"150px" , marginTop:"15px", marginBottom:"15px", fontWeight:"bold", backgroundColor:"#49DDFB ", color:"black", width:"1200px", borderRadius:"20px"}}> 
                    <div className='title' style={{ display: "block",  fontSize:"25px", width:'500px'}}> 
                        {item.name}
                    </div> 
                    <div style={{ paddingRight:"50px", float: "left", paddingTop: '10px', display: "block",  fontSize:"17px",}}> 
                    {showMore[item.id] ? item.description : item.description.slice(0, 85) + "..."}
                    </div> 
                    <div style={{paddingRight:"50px", float: "right",  display: "block",  fontSize:"22px"}}> 
                        {item.price} сом
                    </div> 
                </div> : null
            ))} 
        </div> 
    ); 
}; 
 
export default ItemList;
