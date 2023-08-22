import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/todos";

export const createTodo = async (body) => {
  const response = await axios.post(`${baseUrl}`, body);
  return response.data;
};

export const getTodoList = async () => {
  const response = await axios.get(`${baseUrl}`);
  return response.data;
};
