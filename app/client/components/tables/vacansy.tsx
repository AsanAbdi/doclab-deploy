"use client";

import React, { useEffect, useState } from 'react'; 
import { fetchVacancies } from '../../api/vacancy/api.js'; 
 
const ItemList = () => { 
    const [items, setItems] = useState<any[]>([]); 
    const [showMore, setShowMore] = useState<{ [key: string]: boolean }>({});
    const [error, setError] = useState<string | null>(null);
 
    useEffect(() => { 
        const fetchData = async () => { 
            try {
                const data = await fetchVacancies();
                if (data) { 
                    setItems(data); 
                }
            } catch (err) {
                setError("Failed to fetch data.");
                console.error(err);
            }
        }; 
 
        fetchData(); 
    }, []); 

    const showSalary = (item: any) => {
        return item.salary === 'Договорная' ? item.salary : `${item.salary} сом`;
    }

    const toggleShow = (itemId: string) => {
        setShowMore(prevState => ({
            ...prevState,
            [itemId]: !prevState[itemId]
        }));
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (items.length === 0) {
        return <div>Loading...</div>;
    }

    return ( 
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {items.map(item => (
                <div 
                    onClick={() => toggleShow(item.id)} 
                    key={item.id} 
                    style={{ 
                        border: "2px solid #3FADFF", 
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
                        backgroundColor: "#70CBFF", 
                        color: "black", 
                        width: "1200px", 
                        borderRadius: "20px"
                    }}
                > 
                    <div className='title' style={{ display: "block", fontSize: "25px", width: '500px' }}> 
                        {item.role}
                    </div> 
                    <div style={{ paddingRight: "50px", float: "left", paddingTop: '10px', display: "block", fontSize: "17px" }}> 
                        {showMore[item.id] ? item.requirements : item.requirements.slice(0, 85) + "..."}
                    </div> 
                    <div style={{ paddingRight: "50px", float: "right", display: "block", fontSize: "22px" }}> 
                        {showSalary(item)}
                    </div> 
                </div>
            ))}
        </div> 
    ); 
}; 
 
export default ItemList;
