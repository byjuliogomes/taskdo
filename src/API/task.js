import Axios from "axios";

const taskUrl = "https://arbyte-todo-list-api.herokuapp.com";

function getToken() {
  const userData = localStorage.getItem("userData");
  const { token } = JSON.parse(userData);
  return token;
}

export async function getTasks() {
  const response = await Axios.get(`${taskUrl}/tasks`, {
    headers: { authorization: `Bearer ${getToken()}` },
  });
  return response.data;
}

export async function createTask(task) {
  const response = await Axios.post(`${taskUrl}/tasks`, task, {
    headers: { authorization: `Bearer ${getToken()}` },
  });
  return response.data;
}

export async function deleteTask(id) {
  await Axios.delete(`${taskUrl}/tasks/${id}`, {
    headers: { authorization: `Bearer ${getToken()}` },
  });
}

export async function updateTask(id, task) {
  const response = await Axios.put(`${taskUrl}/tasks/${id}`, task, {
    headers: { authorization: `Bearer ${getToken()}` },
  });
  return response.data;
}
