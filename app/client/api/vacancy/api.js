import axios from 'axios'

export const fetchVacancies = async () => {
    try {
        const response = await axios.get('https://475e-176-123-246-58.ngrok-free.app/api/v1/vacancies/');
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);        
        return null;
    }};
