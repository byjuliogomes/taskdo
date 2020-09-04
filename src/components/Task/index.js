import React, { useState } from "react";
import styled from "styled-components";
import { FaCheckCircle, FaEdit, FaTrashAlt, FaSave } from "react-icons/fa";

const ContainerTask = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Box = styled.div`
  width: 100%;
  height: 72px;
  background-color: #fff;
  border: 1px solid #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.0416667);
`;

const Check = styled(FaCheckCircle)`
  width: 30px;
  height: auto;
  color: ${(props) => (props.check ? "#28E07B" : "#D8D8D8")};
  margin: 4% 1% 4% 2%;
`;
const Edit = styled(FaEdit)`
  width: 30px;
  height: auto;
  color: ${(props) => (props.edit ? "#28E07B" : "#D8D8D8")};
  margin: 4% 15px 4% 2%;
`;
const Delete = styled(FaTrashAlt)`
  width: 30px;
  height: auto;
  color: #d8d8d8;
  margin: 4% 2% 4% 2%;
`;

const Save = styled(FaSave)`
  width: 30px;
  height: auto;
  color: #d8d8d8;
  margin: 4% 2% 4% 2%;
`;

const Text = styled.textarea`
  border: none;
  color: #bfbfbf;
  margin: 4%;
  font-size: 12px;
  max-width: 30ch;
  background-color: #fff;
`;

const ContainerIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 4%;
`;

const Task = ({
  placeholder,
  onChangeText,
  color,
  border,
  margin,
  task,
  onTaskUpdated,
  onTaskDeleted,
}) => {
  const [completed, setCompleted] = useState(task.completed);
  const [disabled, setDisabled] = useState(true);
  const [description, setDescription] = useState(task.description);

  const onSavePressed = () => {
    onTaskUpdated({ ...task, description });
    setDisabled(true);
  };

  const onCheckChanged = (checked) => {
    onTaskUpdated({ ...task, completed: checked });
    setCompleted(checked);
  };

  return (
    <>
      <Box
        margin={margin}
        color={color}
        border={border}
        type="text"
        placeholder={placeholder}
      >
        <ContainerTask>
          <Check
            check={completed}
            onClick={() => setCompleted(!completed)}
          ></Check>
          <Text
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            type="text"
            disabled={disabled}
          ></Text>
        </ContainerTask>
        <ContainerIcons>
          {disabled ? (
            <Save onClick={() => setDisabled(false)}></Save>
          ) : (
            <Edit
              edit={!disabled}
              onClick={() => setDisabled(!disabled)}
              onClick={onSavePressed}
            ></Edit>
          )}

          <Delete onClick={() => onTaskDeleted(task)}></Delete>
        </ContainerIcons>
      </Box>
    </>
  );
};

export default Task;
