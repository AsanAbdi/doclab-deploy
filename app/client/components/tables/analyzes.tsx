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
            {
                els[0].is_actual ? 
                    <div onClick={() => toggleShow(els[0].id)} key={els[0].id} style={{ border: "2px solid #00D4FF", minHeight: "115px",height: 'auto', paddingTop:"15px", paddingLeft:"50px",paddingRight:"50px", paddingBottom:"15px", marginLeft:"150px" , marginTop:"15px", marginBottom:"15px", fontWeight:"bold", backgroundColor:"#49DDFB ", color:"black", width:"1200px", borderRadius:"20px"}}> 
                        <div className='title' style={{ display: "block",  fontSize:"25px", width:'500px'}}> 
                            {els[0].name}
                        </div> 
                        <div style={{ paddingRight:"50px", float: "left", paddingTop: '10px', display: "block",  fontSize:"17px",}}> 
                        {showMore[els[0].id] ? els[0].description : els[0].description.slice(0, 85) + "..."}
                        </div> 
                        <div style={{paddingRight:"50px", float: "right",  display: "block",  fontSize:"22px"}}> 
                            {els[0].price} сом
                        </div> 
                    </div> 
                : null
            }
            {
                els[1].is_actual ? 
                    <div onClick={() => toggleShow(els[1].id)} key={els[1].id} style={{ border: "2px solid #00D4FF", minHeight: "115px",height: 'auto', paddingTop:"15px", paddingLeft:"50px",paddingRight:"50px", paddingBottom:"15px", marginLeft:"150px" , marginTop:"15px", marginBottom:"15px", fontWeight:"bold", backgroundColor:"#49DDFB ", color:"black", width:"1200px", borderRadius:"20px"}}> 
                        <div className='title' style={{ display: "block",  fontSize:"25px", width:'500px'}}> 
                            {els[1].name}
                        </div> 
                        <div style={{ paddingRight:"50px", float: "left", paddingTop: '10px', display: "block",  fontSize:"17px",}}> 
                        {showMore[els[1].id] ? els[1].description : els[1].description.slice(0, 85) + "..."}
                        </div> 
                        <div style={{paddingRight:"50px", float: "right",  display: "block",  fontSize:"22px"}}> 
                            {els[1].price} сом
                        </div> 
                    </div> 
                : null
            }
            {
                els[2].is_actual ? 
                    <div onClick={() => toggleShow(els[2].id)} key={els[2].id} style={{ border: "2px solid #00D4FF", minHeight: "115px",height: 'auto', paddingTop:"15px", paddingLeft:"50px",paddingRight:"50px", paddingBottom:"15px", marginLeft:"150px" , marginTop:"15px", marginBottom:"15px", fontWeight:"bold", backgroundColor:"#49DDFB ", color:"black", width:"1200px", borderRadius:"20px"}}> 
                        <div className='title' style={{ display: "block",  fontSize:"25px", width:'500px'}}> 
                            {els[2].name}
                        </div> 
                        <div style={{ paddingRight:"50px", float: "left", paddingTop: '10px', display: "block",  fontSize:"17px",}}> 
                        {showMore[els[2].id] ? els[2].description : els[2].description.slice(0, 85) + "..."}
                        </div> 
                        <div style={{paddingRight:"50px", float: "right",  display: "block",  fontSize:"22px"}}> 
                            {els[2].price} сом
                        </div> 
                    </div> 
                : null
            }
            {
                els[3].is_actual ? 
                    <div onClick={() => toggleShow(els[3].id)} key={els[3].id} style={{ border: "2px solid #00D4FF", minHeight: "115px",height: 'auto', paddingTop:"15px", paddingLeft:"50px",paddingRight:"50px", paddingBottom:"15px", marginLeft:"150px" , marginTop:"15px", marginBottom:"15px", fontWeight:"bold", backgroundColor:"#49DDFB ", color:"black", width:"1200px", borderRadius:"20px"}}> 
                        <div className='title' style={{ display: "block",  fontSize:"25px", width:'500px'}}> 
                            {els[3].name}
                        </div> 
                        <div style={{ paddingRight:"50px", float: "left", paddingTop: '10px', display: "block",  fontSize:"17px",}}> 
                        {showMore[els[3].id] ? els[3].description : els[3].description.slice(0, 85) + "..."}
                        </div> 
                        <div style={{paddingRight:"50px", float: "right",  display: "block",  fontSize:"22px"}}> 
                            {els[3].price} сом
                        </div> 
                    </div> 
                : null
            }
            {
                els[4].is_actual ? 
                    <div onClick={() => toggleShow(els[0].id)} key={els[4].id} style={{ border: "2px solid #00D4FF", minHeight: "115px",height: 'auto', paddingTop:"15px", paddingLeft:"50px",paddingRight:"50px", paddingBottom:"15px", marginLeft:"150px" , marginTop:"15px", marginBottom:"15px", fontWeight:"bold", backgroundColor:"#49DDFB ", color:"black", width:"1200px", borderRadius:"20px"}}> 
                        <div className='title' style={{ display: "block",  fontSize:"25px", width:'500px'}}> 
                            {els[4].name}
                        </div> 
                        <div style={{ paddingRight:"50px", float: "left", paddingTop: '10px', display: "block",  fontSize:"17px",}}> 
                        {showMore[els[4].id] ? els[4].description : els[4].description.slice(0, 85) + "..."}
                        </div> 
                        <div style={{paddingRight:"50px", float: "right",  display: "block",  fontSize:"22px"}}> 
                            {els[4].price} сом
                        </div> 
                    </div> 
                : null
            }
        </div> 
    ); 
}; 
 
export default ItemList;
