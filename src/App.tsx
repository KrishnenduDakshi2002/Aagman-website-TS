import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BlogsPage } from "./BlogsPage/blogsPage";
import { CollaboratePage } from "./CollaboratePage/collaboratePage";
import { HeaderComponent } from "./components/header/header.component";
import { SideBar } from "./components/sideBar/sideBar";

export const  App:React.FC<{children: JSX.Element}>=({children})=>{
  return (
    <div className="body">
      <HeaderComponent />
      <div className="container">
        <SideBar />
        <div className="pageContainer">
          {/* only this pages under routes will be change on re-rendering */}
          {children}
        </div>
      </div>
    </div>
  );
}

