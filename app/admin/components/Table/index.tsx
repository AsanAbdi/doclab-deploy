import React from "react";

const data = [
  {name: "Иванов Иван Иванович", phone: "123-456-7890", status: "Принят"},
  {name: "Петров Петр Петрович", phone: "987-654-3210", status: "Ожидание"},
  {name: "Сидоров Сидор Сидорович", phone: "555-555-5555", status: "Отклонён"},
];

const Table = () => {
  return (
    <div id="aboutus-section">
      <div className="mx-auto max-w-7xl px-4 mt-28 lg:px-10 rounded-3xl relative">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">ФИО</th>
              <th className="border px-4 py-2">Телефон</th>
              <th className="border px-4 py-2">Статус звонков</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.phone}</td>
                <td className="border px-4 py-2">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
