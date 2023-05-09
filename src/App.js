import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const handleAddUser = () => {
    toast("User Added");
  };
  return (
    <div>
      <h1>React Toast</h1>
      <button onClick={handleAddUser}>Add User</button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        theme="dark"
      />
    </div>
  );
};

export default App;
