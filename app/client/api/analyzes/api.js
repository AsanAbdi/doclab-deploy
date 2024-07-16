import axios from 'axios'

export const fetchAnalyzes = async () => {
    try {
        const response = await axios.get('https://475e-176-123-246-58.ngrok-free.app/api/v1/analyzes/');
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);        
        return null;
    }};
