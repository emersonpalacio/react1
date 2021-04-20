import React, { useState } from "react";
import Title from "../login/components/Title/Title";
import Label from "../login/components/Label/Label";
import Input from "../login/components/Input/Input";

import CrudApi from "../../components/CrudApi";
import "../../index.css";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [islogin, setIslogin] = useState(false);
  const [hasError, setHasError] = useState(false);

  function handleChhange(name, value) {
    if (name === "usuario") {
      setUser(value);
      setHasError(false);
    } else {
      if (value.length < 6) {
        setPasswordError(true);
        setHasError(false);
      } else {
        setPasswordError(false);
        setPassword(value);
        setHasError(false);
      }
    }
  }

  function ifMatch(param) {
    if (param.user.length > 0 && param.password.length > 0) {
      if (param.user == "cidenet" && param.password === "1234567") {
        const { user, password } = param;
        let ac = { user, password };
        let account = JSON.stringify(ac);
        localStorage.setItem("account", account);
        setIslogin(true);
      } else {
        //localStorage.clear();
        setIslogin(false);
        setHasError(true);
      }
    } else {
      setIslogin(false);
    }
  }
  // console.log('usuario', user);
  // console.log('password', password);
  function handleSubmit() {
    let account = { user, password };
    if (account) {
      ifMatch(account);
      console.log("account", account);
    }
  }

  return (
    <div className="login-container">
      {islogin ? (
        <div className="home-container">
          <h1>!hola , {user}!</h1>
          <label> Feclicitaciones </label>
          <CrudApi />

          {/* <DataSearch /> */}
        </div>
      ) : (
        <div className="login-content">
          <Title text="!BienVenido" />
          <Label text="Usuario" />
          {hasError && (
            <label className="label-alert">
              Su contraseña o usuario son incorrectos
            </label>
          )}
          <Input
            attribute={{
              id: "usuario",
              name: "usuario",
              type: "text",
              placeholder: "Ingrese usuario",
            }}
            handleChhange={handleChhange}
          />
          <Label text="Contraseña" />
          <Input
            attribute={{
              id: "contraseña",
              name: "contraseña",
              type: "password",
              placeholder: "Ingrese contraseña",
            }}
            handleChhange={handleChhange}
            param={passwordError}
          />
          <button onClick={handleSubmit} id="ingresar">
            Ingresar
          </button>
        </div>
      )}
    </div>
  );
}
