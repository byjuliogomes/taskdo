import React from "react";
import styled from "styled-components";

const ContainerInput = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 400px) {
    justify-content: flex-start;
  }
`;

const InputBox = styled.input`
  width: 260px;
  height: 60px;
  border-bottom: 5px solid var(--grey);
  background-color: ${(props) => props.color};
  outline: 0;
  border-width: 0 0 2px;
  padding-left: 40px;

  margin-bottom: ${(props) => (props.margin ? "16px" : "0px")};

  :focus {
    border-bottom: 5px solid ${(props) => props.border};
  }
`;

const Input = ({
  placeholder,
  onChangeText,
  color,
  border,
  margin,
  onEnterPressed,
  value,
}) => {
  return (
    <>
      <ContainerInput>
        <InputBox
          margin={margin}
          color={color}
          border={border}
          value={value}
          type="text"
          onChange={(e) => onChangeText(e.target.value)}
          placeholder={placeholder}
          onKeyPress={(event) =>
            onEnterPressed &&
            event.key === "Enter" &&
            onEnterPressed(onChangeText(event.target.value))
          }
        ></InputBox>
      </ContainerInput>
    </>
  );
};

export default Input;
