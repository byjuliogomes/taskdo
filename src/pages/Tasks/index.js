import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import styled from "styled-components";
import LogoVerde from "../../assets/Logo.svg";
import NewTask from "../../components/NewTask";
import TaskList from "../../components/TaskList";
import { getTasks, createTask, deleteTask, updateTask } from "../../API/task";
import { isLogged } from "../../API/user";

// const tasks = [
//     {
//         id: 7,
//         description: "Subir Essa Api",
//         completed: false,
//     },
//     {
//         id: 8,
//         description: "Conectar esse App com a API",
//         completed: false,
//     },
//     {
//         id: 9,
//         description: "Subir o código para o github no final da aula.",
//         completed: false,
//     },
// ];

const ContainerText = styled.div`
  margin: 8% 8% 8% 8%;

  h1 {
    font-size: 24pt;
    margin-top: 0px;
  }

  h2 {
    font-size: 12pt;
    margin-bottom: 0px;
  }
`;

const ContainerTask = styled.div`
  margin: 8% 8% 8% 8%;
`;

const Tasks = ({ history }) => {
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  const newTask = async () => {
    await createTask({ description });
    listTasks();
    setDescription = "";
  };

  const listTasks = async () => {
    const tasks = await getTasks();
    setTasks(tasks);
  };

  useEffect(() => {
    if (isLogged()) {
      listTasks();
    } else {
      history.push("/login");
    }
  }, []);

  const onTaskDeleted = async (task) => {
    await deleteTask(task.id);
    listTasks();
  };
  const onTaskUpdated = async (task) => {
    await updateTask(task.id, task);
    listTasks();
  };

  const nome = () => {
    const response = JSON.parse(localStorage.getItem("userData"));
    return response != null ? response : alert("Não deu");
  };
  return (
    <div>
      <Header on={true} logo={LogoVerde} history={history}></Header>
      <ContainerText>
        <h2>Bem-vindo, {nome().user.fullName} </h2>
        <h1>Suas tarefas</h1>
      </ContainerText>
      <ContainerTask>
        <NewTask
          placeholder="Digite uma tarefa"
          onChangeText={(text) => setDescription(text)}
          onPress={newTask}
          value={description}
          icon="plus"
        ></NewTask>

        <TaskList
          tasks={tasks}
          onPress={() => console.log("Botão do TextInputWithIcon clicado")}
          onTaskUpdated={onTaskUpdated}
          onTaskDeleted={onTaskDeleted}
        ></TaskList>
      </ContainerTask>
    </div>
  );
};

export default Tasks;
