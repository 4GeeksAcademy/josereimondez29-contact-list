import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const UserRegistration = () => {
  
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    direccion: '',
    edad: '',
    pais: '',
    email: '',
  });

  const urlTodos = "https://playground.4geeks.com/apis/fake/contact/"

  const handleSubmit = (e) => {
    const newForm = {
        label: inputValue,
        done: false 
      };
      setFormData([...formData, newForm]);
      fetch(urlTodos, {
        method: "POST",
        body: JSON.stringify([...formData, newForm]),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => { return response.json() })
			.then((data) => { console.log(data) })
			.catch((err) => { err })
  };

  const handleCancel = () => {
    <div>
        <Link to="/">
				<button className="btn btn-danger">Cancel</button>
		</Link>
    </div>
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="user-registration-form">
      <h2>Formulario de Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
        <input type="text" name="apellido" placeholder="Apellido" value={formData.apellido} onChange={handleChange} required />
        <input type="text" name="direccion" placeholder="Dirección" value={formData.direccion} onChange={handleChange} required />
        <input type="number" name="edad" placeholder="Edad" value={formData.edad} onChange={handleChange} required />
        <input type="text" name="pais" placeholder="País" value={formData.pais} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <div className="buttons">
          <button type="submit" className="save-btn">Guardar</button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default UserRegistration;
