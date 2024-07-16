'use client'
import React from "react";
import DoctorPostCard from "../components/DoctorPostCard";

const doctorPosts = [
  {
    id: 1,
    title: "Пост врача 1",
    content: "Содержание поста врача 1",
    author: "Автор 1",
    date: "Дата 1",
  },
  {
    id: 2,
    title: "Пост врача 2",
    content: "Содержание поста врача 2",
    author: "Автор 2",
    date: "Дата 2",
  },
];

const DoctorPostsList: React.FC = () => {
  const handleEditClick = (id: number) => {
    console.log(`Edit post with ID ${id}`);
  };

  const handleDeleteClick = (id: number) => {
    console.log(`Delete post with ID ${id}`);
  };

  return (
    <div className="doctor-posts-list">
      {doctorPosts.map((post) => (
        <DoctorPostCard
          key={post.id}
          post={post}
          // onEditClick={handleEditClick}
          // onDeleteClick={handleDeleteClick}
        />
      ))}
    </div>
  );
};

export default DoctorPostsList;
