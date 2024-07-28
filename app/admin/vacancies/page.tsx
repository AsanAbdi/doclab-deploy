import React from "react";
import VacancyCard from "../components/VacancyCard";

const vacancies = [
  {
    id: 1,
    title: "Врач-терапевт",
    description: "Описание вакансии для врача-терапевта",
    isActive: true,
  },
  {
    id: 2,
    title: "Медсестра",
    description: "Описание вакансии для медсестры",
    isActive: false,
  },
];

const VacancyList: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 mt-28 lg:px-10">
      <div className="vacancy-list">
        {vacancies.map((vacancy) => (
          <VacancyCard key={vacancy.id} vacancy={vacancy} />
        ))}
      </div>
    </div>
  );
};

export default VacancyList;
