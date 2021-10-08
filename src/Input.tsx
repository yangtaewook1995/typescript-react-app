import React from "react";
import styled from "styled-components";

interface IInputProps {
  value: string;
  onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

export const Input: React.FunctionComponent<IInputProps> = ({
  value,
  onChange,
}) => {
  return (
    <input
      type="text"
      placeholder="Name"
      value={value}
      onChange={onChange}
    ></input>
  );
};

export const Form: React.FunctionComponent = ({ children }) => {
  return <form>{children}</form>;
};
