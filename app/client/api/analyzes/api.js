import axios from 'axios'

export const fetchAnalyzes = async () => {
    try {
        const response = await axios.get("https://doclab.pythonanywhere.com/api/v1/analyzes/analyzes/");
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);        
        return null;
    }};


export const fetchAnalyze = async (id) => {
    try {
        const response = await axios.get("https://doclab.pythonanywhere.com/api/v1/analyzes/analyzes/", { params: {"order_id": id} });
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);        
        return null;
    }};
