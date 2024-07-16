import axios from 'axios'

export const fetchAnalyzes = async () => {
    try {
        const response = await axios.get('http://localhost:8000/api/v1/analyzes/');
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);        
        return null;
    }};
