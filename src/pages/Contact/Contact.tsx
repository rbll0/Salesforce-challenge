// src/pages/Contact/Contact.tsx
import React, { useState } from 'react';
import { Button } from "../../components/Button/Button"
import { Layout } from "../../components/Layout/Layout"
import { BackgroundForm, FormSection, Input, InputBox, ParagraphForm } from "./Contact.style"
import { FlexSection, SectionConfig, ConfigDiv } from "../../components/Sections/Sections.style"

function Contact() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        endereco: '',
        pais: '',
        mensagem: ''
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await fetch('sua_url_da_api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Dados enviados com sucesso!');
            } else {
                console.error('Erro ao enviar os dados.');
            }
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
        }
    };

    return (
        <div style={BackgroundForm}>
            <Layout>
                <FlexSection style={BackgroundForm}>
                    <SectionConfig>
                        <ConfigDiv>
                            <div>
                                <h2>
                                    Se torne um TrailBlazer com a Salesforce
                                </h2>
                            </div>
                            <div>
                                <img src="src/assets/th-discover.webp" alt="TrailBlazer" />
                            </div>
                        </ConfigDiv>
                    </SectionConfig>
                    <FormSection>
                        <ParagraphForm>
                            <p>
                                Preencha o formulário abaixo e um especialista entrará em contato com você o mais rápido possível.
                            </p>
                        </ParagraphForm>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input 
                                type="text" 
                                id="nome" 
                                name="nome" 
                                value={formData.nome} 
                                onChange={handleInputChange} 
                                placeholder="Nome"
                                style={Input} />
                            </div>
                            <div>
                                <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleInputChange} 
                                placeholder="Email corporativo"
                                style={Input} />
                            </div>
                            <div>
                                <input 
                                type="text" 
                                id="endereco" 
                                name="endereco" 
                                value={formData.endereco} 
                                onChange={handleInputChange} 
                                placeholder="Endereço" 
                                style={Input} />
                            </div>
                            <div>
                                <input 
                                type="text" 
                                id="pais" 
                                name="pais" 
                                value={formData.pais} 
                                onChange={handleInputChange} 
                                placeholder="País/Região" 
                                style={Input} />
                            </div>
                            <div>
                                <input 
                                type="text" 
                                id="mensagem" 
                                name="mensagem" 
                                value={formData.mensagem} 
                                onChange={handleInputChange} 
                                placeholder="Perguntas/Comentários" 
                                style={InputBox} />
                            </div>
                            <Button type="submit" onClick={handleSubmit}>Faça o teste grátis</Button>
                        </form>
                    </FormSection>
                </FlexSection>
            </Layout>
        </div>
    )
}

export default Contact;
