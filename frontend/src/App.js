import React, { Component } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

import ReactDOM from "react-dom";
import axios from "axios";

import FormIngreso from "./components/pages/ingreso/FormIngreso";

import Home from "./components/pages/home/Home";

import RutasNormales from "./components/RutasNormales";
import ProtegerRutas from "./components/ProtegerRutas";
import ProtegerRutasAdmin from "./components/ProtegerRutasAdmin";

import Proveedor from "./components/pages/proveedor/ListarProveedor";
import FormAgregarProveedor from "./components/pages/proveedor/FormAgregarProveedor";
import FormEditarProveedor from "./components/pages/proveedor/FormEditarProveedor";
import FormBorrarProveedor from "./components/pages/proveedor/FormBorrarProveedor";

import Producto from "./components/pages/producto/ListarProducto";
import FormAgregarProducto from "./components/pages/producto/FormAgregarProducto";
import FormEditarProducto from "./components/pages/producto/FormEditarProducto";
import FormBorrarProducto from "./components/pages/producto/FormBorrarProducto";

import Usuario from "./components/pages/usuario/ListarUsuario";
import FormAgregarUsuario from "./components/pages/usuario/FormAgregarUsuario";
import FormEditarUsuario from "./components/pages/usuario/FormEditarUsuario";
import FormBorrarUsuario from "./components/pages/usuario/FormBorrarUsuario";

import FormCambiarUsuario from "./components/pages/cuenta/FormCambiarUsuario";
import FormCambiarClave from "./components/pages/cuenta/FormCambiarClave";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RutasNormales />}>
          <Route path="/ingreso" element={<FormIngreso />} />
        </Route>
        <Route element={<ProtegerRutas />}>
          <Route path="/" element={<Home/>} />
          <Route path="/proveedores" element={<Proveedor/>} />
          <Route path="/proveedores/agregar" element={<FormAgregarProveedor/>} />
          <Route path="/proveedores/:id/editar" element={<FormEditarProveedor/>} />
          <Route path="/proveedores/:id/borrar" element={<FormBorrarProveedor/>} />
          <Route path="/productos" element={<Producto/>} />
          <Route path="/productos/agregar" element={<FormAgregarProducto/>} />
          <Route path="/productos/:id/editar" element={<FormEditarProducto/>} />
          <Route path="/productos/:id/borrar" element={<FormBorrarProducto/>} />
          <Route path="/cambiarUsuario" element={<FormCambiarUsuario/>} />
          <Route path="/cambiarClave" element={<FormCambiarClave/>} />
        </Route>
        <Route element={<ProtegerRutasAdmin />}>
          <Route path="/usuarios" element={<Usuario/>} />
          <Route path="/usuarios/agregar" element={<FormAgregarUsuario/>} />
          <Route path="/usuarios/:id/editar" element={<FormEditarUsuario/>} />
          <Route path="/usuarios/:id/borrar" element={<FormBorrarUsuario/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}