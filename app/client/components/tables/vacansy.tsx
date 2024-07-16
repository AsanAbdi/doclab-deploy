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
            {
                eles[0].is_actual ? 
                    <div onClick={() => toggleShow(eles[0].id)} key={eles[0].id} style={{ border: "2px solid #3FADFF ", minHeight: "115px",height: 'auto', paddingTop:"15px", paddingLeft:"50px",paddingRight:"50px", paddingBottom:"15px", marginLeft:"150px" , marginTop:"15px", marginBottom:"15px", fontWeight:"bold", backgroundColor:"#70CBFF  ", color:"black", width:"1200px", borderRadius:"20px"}}> 
                        <div className='title' style={{ display: "block",  fontSize:"25px", width:'500px'}}> 
                            {eles[0].role}
                        </div> 
                        <div style={{ paddingRight:"50px", float: "left", paddingTop: '10px', display: "block",  fontSize:"17px",}}> 
                        {showMore[eles[0].id] ? eles[0].requirements : eles[0].requirements.slice(0, 85) + "..."}
                        </div> 
                        <div style={{paddingRight:"50px", float: "right",  display: "block",  fontSize:"22px"}}> 
                            {ShowSalary(eles[0])}
                        </div> 
                    </div> 
                : null
            }
            {
                eles[1].is_actual ? 
                    <div onClick={() => toggleShow(eles[1].id)} key={eles[1].id} style={{ border: "2px solid #3FADFF ", minHeight: "115px",height: 'auto', paddingTop:"15px", paddingLeft:"50px",paddingRight:"50px", paddingBottom:"15px", marginLeft:"150px" , marginTop:"15px", marginBottom:"15px", fontWeight:"bold", backgroundColor:"#70CBFF  ", color:"black", width:"1200px", borderRadius:"20px"}}> 
                        <div className='title' style={{ display: "block",  fontSize:"25px", width:'500px'}}> 
                            {eles[1].role}
                        </div> 
                        <div style={{ paddingRight:"50px", float: "left", paddingTop: '10px', display: "block",  fontSize:"17px",}}> 
                        {showMore[eles[1].id] ? eles[1].requirements : eles[1].requirements.slice(0, 85) + "..."}
                        </div> 
                        <div style={{paddingRight:"50px", float: "right",  display: "block",  fontSize:"22px"}}> 
                            {ShowSalary(eles[1])}
                        </div> 
                    </div> 
                : null
            }
            {
                eles[2].is_actual ? 
                    <div onClick={() => toggleShow(eles[2].id)} key={eles[2].id} style={{ border: "2px solid #3FADFF ", minHeight: "115px",height: 'auto', paddingTop:"15px", paddingLeft:"50px",paddingRight:"50px", paddingBottom:"15px", marginLeft:"150px" , marginTop:"15px", marginBottom:"15px", fontWeight:"bold", backgroundColor:"#70CBFF  ", color:"black", width:"1200px", borderRadius:"20px"}}> 
                        <div className='title' style={{ display: "block",  fontSize:"25px", width:'500px'}}> 
                            {eles[2].role}
                        </div> 
                        <div style={{ paddingRight:"50px", float: "left", paddingTop: '10px', display: "block",  fontSize:"17px",}}> 
                        {showMore[eles[2].id] ? eles[2].requirements : eles[2].requirements.slice(0, 85) + "..."}
                        </div> 
                        <div style={{paddingRight:"50px", float: "right",  display: "block",  fontSize:"22px"}}> 
                            {ShowSalary(eles[2])}
                        </div> 
                    </div> 
                : null
            }
            {
                eles[3].is_actual ? 
                    <div onClick={() => toggleShow(eles[3].id)} key={eles[3].id} style={{ border: "2px solid #3FADFF ", minHeight: "115px",height: 'auto', paddingTop:"15px", paddingLeft:"50px",paddingRight:"50px", paddingBottom:"15px", marginLeft:"150px" , marginTop:"15px", marginBottom:"15px", fontWeight:"bold", backgroundColor:"#70CBFF  ", color:"black", width:"1200px", borderRadius:"20px"}}> 
                        <div className='title' style={{ display: "block",  fontSize:"25px", width:'500px'}}> 
                            {eles[3].role}
                        </div> 
                        <div style={{ paddingRight:"50px", float: "left", paddingTop: '10px', display: "block",  fontSize:"17px",}}> 
                        {showMore[eles[3].id] ? eles[3].requirements : eles[3].requirements.slice(0, 85) + "..."}
                        </div> 
                        <div style={{paddingRight:"50px", float: "right",  display: "block",  fontSize:"22px"}}> 
                            {ShowSalary(eles[3])}
                        </div> 
                    </div> 
                : null
            }
            {
                eles[4].is_actual ? 
                    <div onClick={() => toggleShow(eles[4].id)} key={eles[4].id} style={{ border: "2px solid #3FADFF ", minHeight: "115px",height: 'auto', paddingTop:"15px", paddingLeft:"50px",paddingRight:"50px", paddingBottom:"15px", marginLeft:"150px" , marginTop:"15px", marginBottom:"15px", fontWeight:"bold", backgroundColor:"#70CBFF  ", color:"black", width:"1200px", borderRadius:"20px"}}> 
                        <div className='title' style={{ display: "block",  fontSize:"25px", width:'500px'}}> 
                            {eles[4].role}
                        </div> 
                        <div style={{ paddingRight:"50px", float: "left", paddingTop: '10px', display: "block",  fontSize:"17px",}}> 
                        {showMore[eles[4].id] ? eles[4].requirements : eles[4].requirements.slice(0, 85) + "..."}
                        </div> 
                        <div style={{paddingRight:"50px", float: "right",  display: "block",  fontSize:"22px"}}> 
                            {ShowSalary(eles[4])}
                        </div> 
                    </div> 
                : null
            }
        </div> 
    ); 
}; 
 
export default ItemList;
