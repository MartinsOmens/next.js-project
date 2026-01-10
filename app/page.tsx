"use client";

import Todo from "@/components/Todo";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [todoData, setTodoData] = useState([]);

  //Function that fetches todos
  const fetchTodos = async () => {
    const response = await axios("/api/route");
    setTodoData(response.data.todos);
  };

  //Function that deletes todo
  const deleteTodo = async (id) => {
    const response = await axios.delete("/api/route", {
      params: {
        mongoId: id,
      },
    });
    toast.success(response.data.msg);
    fetchTodos();
  };

  //Function that updates todo
  const updateTodo = async (id) => {
    const response = await axios.put("/api/route",{}, {
      params: {
        mongoId: id,
      },
    });
    toast.success(response.data.msg);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  //To target the values that was inputed into the form
  const onchangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((form) => ({ ...form, [name]: value }));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  //Here is where you work on the CRUD operation
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      //api code
      const response = await axios.post("/api/route", formData);
      toast.success(response.data.msg);
      setFormData({
        title: "",
        description: "",
      });
      await fetchTodos();
    } catch (error) {
      toast.error("Error");
    }
  };

  return (
    <>
      <ToastContainer theme="dark" />
      <form
        onSubmit={onSubmitHandler}
        className="flex items-start flex-col gap-4 mt-24 mx-auto w-[80%] max-w-150"
      >
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          className="py-2 px-3 border border-[#eee] w-full outline-none"
          onChange={onchangeHandler}
          value={formData.title}
        />
        <textarea
          name="description"
          placeholder="Enter Description"
          className="w-full border border-[#eee] px-3 py-2 outline-none"
          onChange={onchangeHandler}
          value={formData.description}
        ></textarea>
        <button
          type="submit"
          className="bg-orange-500 text-white mt-5 px-6 py-2 rounded cursor-pointer uppercase"
        >
          ADD TODO
        </button>
      </form>

      <div className="relative mt-20 w-[60%] mx-auto overflow-x-auto  shadow-xs rounded-base border ">
        <table className="w-full text-sm text-left rtl:text-right text-body ">
          <thead className="text-sm text-body  bg-neutral-100 border-b rounded-base">
            <tr>
              <th scope="col" className="px-6 py-3 font-semibold uppercase">
                Id
              </th>
              <th scope="col" className="px-6 py-3 font-semibold uppercase">
                Title
              </th>
              <th scope="col" className="px-6 py-3 font-semibold uppercase">
                Desciption
              </th>
              <th scope="col" className="px-6 py-3 font-semibold uppercase">
                Status
              </th>
              <th scope="col" className="px-6 py-3 font-semibold uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* To display all the created todos */}
            {todoData.map((item, index) => (
              <Todo
                key={index}
                id={index + 1}
                title={item.title}
                description={item.description}
                completed={item.isCompleted}
                mongoId={item._id}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
