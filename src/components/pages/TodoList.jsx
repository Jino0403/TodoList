import React, { useState } from "react";
import Form from "../form/Form";
import Header from "../header/Header";
import Layout from "../layout/Layout";
import List from "../list/List";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "나만의 TodoList 만들기",
      body: "어렵네요.. 하지만 만들어봅시다",
      isDone: false,
    },
    {
      id: 2,
      title: "나만의 TodoList 만들기",
      body: "어렵지만 해냈네요!",
      isDone: true,
    },
  ]);

  return (
    <Layout>
      <Header />
      <Form setTodos={setTodos} todos={todos} />
      <List todos={todos} setTodos={setTodos} />
    </Layout>
  );
};

export default TodoList;
