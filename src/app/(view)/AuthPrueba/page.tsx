"use client";
import React from "react";
import { useAuthContext } from "../../../../context/authContext"; 

const TestAuth = () => {
  const { user, isAuth, SaveUserData, ResetUserData, token } = useAuthContext();

  const handleLogin = () => {
   const usuarioDemo = {
  id: 1,
  name: "Usuario Demo",
  surname: "Apellido Demo",
  email: "demo@email.com",
  phone: "123456789",
  rol: 1 as 0 | 1
};
    SaveUserData({
      user: usuarioDemo,
      token: "token-falso-123"
    });
  };

  const handleLogout = () => {
    ResetUserData();
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white shadow-md rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Prueba de AuthContext</h2>
      <p className="text-lg mb-2">
        ¿Autenticado?: <span className="font-semibold">{isAuth ? "Sí" : "No"}</span>
      </p>
      <p className="text-lg mb-2">
        Usuario: <span className="font-semibold">{user ? user.name : "Ninguno"}</span>
      </p>
      <p className="text-lg mb-6">
        Token: <span className="font-semibold">{token || "Ninguno"}</span>
      </p>
      <button 
        onClick={handleLogin}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
      >
        Simular Login
      </button>
      <button 
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      >
        Logout
    </button>
  </div>
)}

export default TestAuth;