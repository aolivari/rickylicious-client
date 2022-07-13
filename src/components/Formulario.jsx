import React, { useState } from "react";
import { listaCumpleaños, nombre as name } from "../utils/ListaInvitados";

export default function Formulario() {
  const listArray = listaCumpleaños;
  const [nombre, setNombre] = useState("");

  let nameValue = name;
  console.log(nameValue, listArray);
  // const name = nombre;
  console.log(nombre);

  return (
    <>
      <h2>formulario</h2>
      <form>
        <label htmlFor="nombre">Nombre: </label>
        <input
          type="text"
          placeholder=" ej: Toño"
          name="nombre"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </form>
    </>
  );
}
