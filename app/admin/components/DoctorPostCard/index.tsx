import React from "react";

interface DoctorPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

interface DoctorPostCardProps {
  post: DoctorPost;
  // onEditClick: (id: number) => void;
  // onDeleteClick: (id: number) => void;
}

const DoctorPostCard: React.FC<DoctorPostCardProps> = ({
  post,
  // onEditClick,
  // onDeleteClick,
}) => {
  return (
    <div className="bg-white shadow-md rounded-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
      <p className="text-gray-700 mb-4">{post.content}</p>
      <p className="text-gray-600 mb-2">Автор: {post.author}</p>
      <p className="text-gray-600 mb-4">Дата: {post.date}</p>
      <div className="flex">
        <button
          // onClick={() => onEditClick(post.id)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Изменить
        </button>
        <button
          // onClick={() => onDeleteClick(post.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

export default DoctorPostCard;
