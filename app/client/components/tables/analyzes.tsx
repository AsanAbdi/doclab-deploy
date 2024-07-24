"use client"; 

import React, { useEffect, useState } from 'react'; 
import { fetchAnalyzes } from '../../api/analyzes/api.js'; 
 
const ItemList = () => { 
    const [els, setEls] = useState<any[]>([]); 
    const [showMore, setShowMore] = useState<{ [key: string]: boolean }>({});
    const [error, setError] = useState<string | null>(null);
 
    useEffect(() => {
        const fetchData = async () => { 
            try {
                const data = await fetchAnalyzes();
                if (data) { 
                    setEls(data); 
                }
            } catch (err) {
                setError("Failed to fetch data.");
                console.error(err);
            }
        }; 
 
        fetchData(); 
    }, []); 

    const toggleShow = (itemId: string) => {
        setShowMore(prevState => ({
            ...prevState,
            [itemId]: !prevState[itemId]
        }));
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (els.length === 0) {
        return <div>Loading...</div>;
    }

    return ( 
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {els.map((el) => (
                <div 
                    onClick={() => toggleShow(el.id)} 
                    key={el.id} 
                    style={{ 
                        border: "2px solid #00D4FF", 
                        minHeight: "115px", 
                        height: 'auto', 
                        paddingTop: "15px", 
                        paddingLeft: "50px", 
                        paddingRight: "50px", 
                        paddingBottom: "15px", 
                        marginLeft: "150px", 
                        marginTop: "15px", 
                        marginBottom: "15px", 
                        fontWeight: "bold", 
                        backgroundColor: "#49DDFB ", 
                        color: "black", 
                        width: "1200px", 
                        borderRadius: "20px"
                    }}
                > 
                    <div className='title' style={{ display: "block", fontSize: "25px", width: '500px' }}> 
                        {el.name}
                    </div> 
                    <div style={{ paddingRight: "50px", float: "left", paddingTop: '10px', display: "block", fontSize: "17px" }}> 
                        {showMore[el.id] ? el.description : el.description.slice(0, 85) + "..."}
                    </div> 
                    <div style={{ paddingRight: "50px", float: "right", display: "block", fontSize: "22px" }}> 
                        {el.price} сом
                    </div> 
                </div>
            ))}
        </div> 
    ); 
}; 
 
export default ItemList;
