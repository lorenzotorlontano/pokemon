import React, { useState } from "react";
import Input from "../../Components/Input";
import ButtonDefault from "../../Components/Button";
import { useHistory } from "react-router-dom";
import "./style.css";
export default function Login({}) {
  let history = useHistory();

  const login = () => {
    history.push("/home");
  };
  return (
    <>
      <div className="wrapper">
        <Input />
        <ButtonDefault login={login} />
      </div>
    </>
  );
}
