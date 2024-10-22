"use client";

import React, { useEffect, useState } from 'react';
import { fetchAnalyze } from '../../api/analyzes/api.js';
import { useSearchParams } from 'next/navigation'; // Use useSearchParams instead of useRouter

const ItemList = () => {
    const searchParams = useSearchParams();
    const order_id = searchParams.get('order_id'); // Access the order_id from searchParams

    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!order_id) return; // Wait for order_id to be available

        const fetchData = async () => {
            try {
                const data = await fetchAnalyze(order_id); // Fetch data using order_id
                if (data) {
                    setData(data);
                    console.log('this is data', data, 'this is data')
                }
            } catch (err) {
                setError("Failed to fetch data.");
                console.error(err);
            }
        };

        fetchData();
    }, [order_id]); // Add order_id as a dependency

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (data.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Информация о пользователе</h1>
            {data.map((item) => (
                <div key={item.id} style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px' }}>
                    <p><strong>Имя пользователя:</strong> {item.user_full_name}</p>
                    <p><strong>Возраст пользователя:</strong> {item.user_age}</p>
                    <p><strong>Пол пользователя:</strong> {item.user_gender}</p>
                    <p><strong>ID заказа:</strong> {item.order_id}</p>
                    <p><strong>Дата сбора образца:</strong> {item.date_of_specimen_collection}</p>
                    <p><strong>Дата получения образца:</strong> {item.date_of_receipt_specimen}</p>
                    <p><strong>Результат:</strong> {item.result}</p>

                    <p><strong>QR код: </strong></p>
                    <img src={item.qr_code} alt="QR code" style={{ maxWidth: '200px', maxHeight: '200px' }} />

                    <p><strong>Скачать PDF анализ:</strong> <a href={item.pdf} target="_blank" rel="noopener noreferrer">Скачать PDF</a></p>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
