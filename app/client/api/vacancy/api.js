import axios from 'axios'

export const fetchVacancies = async () => {
    try {
        const response = await axios.get('http://localhost:8000/api/v1/vacancies/');
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);        
        return null;
    }};
