import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Layout } from "../../components";
import { TextField } from "@mui/material";
import {
  LoginActionContentElement,
  LoginBearImage,
  LoginWrapperElement,
} from "./Login.style";
import LoginBear from "../../assets/Login-Image.webp";

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Função para lidar com a mudança nos inputs do formulário
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Envia os dados do formulário para a API de login
      const response = await fetch('sua_url_da_api_de_login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Login bem-sucedido
        console.log('Login bem-sucedido!');
        // Redirecionar ou realizar outras ações necessárias após o login
      } else {
        // Se ocorrer um erro ao enviar os dados
        console.error('Erro ao fazer login.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <Layout>
      <LoginWrapperElement>
        <LoginActionContentElement>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              id="email"
              label="E-mail Corporativo"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              id="password"
              label="Senha"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              fullWidth
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary" size='medium'>Entrar</Button>
          </form>
        </LoginActionContentElement>
        <LoginBearImage src={LoginBear} alt="Login Bear" />
      </LoginWrapperElement>
    </Layout>
  );
}
