import React from 'react';


interface Vacancy {
  id: number;
  title: string;
  description: string;
  isActive: boolean;
}

interface VacancyCardProps {
  vacancy: Vacancy;
}

const VacancyCard: React.FC<VacancyCardProps> = ({ vacancy }) => {
  const { title, isActive } = vacancy;
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', backgroundColor: isActive ? '#e6ffe6' : '#ffe6e6' }}>
      <h3>{title}</h3>
      <p>Статус: {isActive ? 'Активная' : 'Неактивная'}</p>
    </div>
  );
};

export default VacancyCard;