import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RandomUserGenerator } from "../pages/RandomUserGenerator/index";
import { useNavigate } from "react-router-dom";

import { Login } from "../pages/Login/index";
import { DashboardLayout } from "../components/Dashboard/Layout";
import { HttpCat } from "../pages/HttpCat";
import { RandomDog } from "../pages/RandomDog";
import { Crud } from "../pages/Crud";

const Private = ({ Item }: any) => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("auth");
  const remember = localStorage.getItem("remember");
  const tokenNull = JSON.parse(token || "false");

  if (remember || tokenNull) {
    return (
      <Fragment>
        <DashboardLayout>
          <Item />
        </DashboardLayout>
      </Fragment>
    );
  }

  navigate("/");

  return <Login />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/random-user-generator" element={<Private Item={RandomUserGenerator} />} />
        <Route path="/http-cat" element={<Private Item={HttpCat} />} />
        <Route path="/random-dog" element={<Private Item={RandomDog} />} />
        <Route path="/crud-backend" element={<Private Item={Crud} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
