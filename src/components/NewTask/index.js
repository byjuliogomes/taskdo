import React, { useState } from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import { getTasks, createTask } from "../../API/task";
import { listTasks } from "../../pages/Tasks"
import Btn from "../Btn";
import { FaPlusCircle } from "react-icons/fa";

const ContainerTask = styled.div`
    width: 100%;
    display: flex;
    align-items: center;    
`;

const Box = styled.div`
  width: 100%;
  height: 72px;
  background-color: #fff;
  border: 1px dashed #CCCCCC;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: ${(props) => (props.margin ? "16px" : "0px")};

  :hover {
    border: 2px solid ${(props) => props.border};
  }
`;

const Check = styled(FaCheckCircle)`
  width: 30px;
  height: auto;
  color: #e8e8e8;
  margin: 4% 2% 4% 2%;
`;

const Text = styled.input`
  color: #bfbfbf;
  margin: 4%;
  font-size: 12px;
`;

const BtnNewTask = styled(Btn)`
  width: 5px;
  height: 5px;
`;


const NewTask = ({ placeholder, onChangeText, color, border, margin }) => {
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  const newTaskfunction = async () => {
    await createTask({ description })
    listTasks();
    setDescription = "";
  }

  const listTasks = async () => {
    const tasks = await getTasks()
    setTasks(tasks)
  }

  return (
    <>

      <Box
        margin={margin}
        color={color}
        border={border}
        type="text"
        placeholder={placeholder}
        onChange={(event) => onChangeText(event.target.value)}
      >
        <ContainerTask>
          <Check></Check>
          <Text placholder="Nova Tarefa"></Text>
          <BtnNewTask color={"#28E07B"}>Adicionar tarefa<FaPlusCircle></FaPlusCircle></BtnNewTask>
        </ContainerTask>
      </Box>
    </>
  );
};

export default NewTask;
