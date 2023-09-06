


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import styles from "./FormLogin.module.css";

const FormLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const dispatch = useDispatch();
  



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(formData));

    
  };

  return (
    <div className={styles.container}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <input
          className={styles.input}
          type="text"
          name="username"
          placeholder="Usuario"
          value={formData.username}
          onChange={handleInputChange}
        />
        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button className={styles.submit} type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default FormLogin;

