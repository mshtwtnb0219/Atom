import { BrowserRouter,Route, Routes } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefaultLayout } from "../components/templates1/DefaultLayout";
import { HeaderOnly } from "../components/templates1/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout><Top/></DefaultLayout>}></Route>
        <Route path="/users" element={<HeaderOnly><Users /></HeaderOnly>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
