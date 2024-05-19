import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Layout } from '../../components';
import {
  LoginActionContentElement,
  LoginBearImage,
  LoginWrapperElement,
} from './Login.style';
import LoginBear from '../../assets/Login-Image.webp';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Função para atualizar os campos do formulário
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const loginData = {
      email_log: formData.email, // Ajuste para corresponder ao backend
      senha_log: formData.password, // Ajuste para corresponder ao backend
    };

    try {
      const response = await fetch('http://localhost:8000/login/autenticar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        // Se a resposta for bem-sucedida (status 200)
        const data = await response.json();
        console.log('Login bem-sucedido!', data);
        // Redirecionar ou realizar outras ações necessárias após o login
      } else {
        // Se ocorrer algum erro de autenticação (status 401 ou outro)
        console.error('Erro ao fazer login.');
      }
    } catch (error) {
      // Se ocorrer um erro durante a requisição
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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="medium"
            >
              Entrar
            </Button>
          </form>
        </LoginActionContentElement>
        <LoginBearImage src={LoginBear} alt="Login Bear" />
      </LoginWrapperElement>
    </Layout>
  );
}
