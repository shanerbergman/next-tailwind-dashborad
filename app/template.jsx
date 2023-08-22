import React from "react";
import Sidebar from "./components/Sidebar";

export default function Template({ children }) {
  return (
    <>
      <Sidebar>{children}</Sidebar>
    </>
  );
}
