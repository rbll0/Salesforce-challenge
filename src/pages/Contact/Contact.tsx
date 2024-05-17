import React, { useState } from 'react';
import { Button } from "../../components/Button/Button"
import { Layout } from "../../components/Layout/Layout"
import { BackgroundForm, FormSection, Input, InputBox, ParagraphForm } from "./Contact.style"
import { FlexSection, SectionConfig, ConfigDiv } from "../../components/Sections/Sections.style"




function Contact() {

    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        pais: '',
        mensagem: ''
    });

    // Função para lidar com a mudança nos inputs do formulário
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            // Envia os dados do formulário para a API
            const response = await fetch('sua_url_da_api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Dados enviados com sucesso
                console.log('Dados enviados com sucesso!');
            } else {
                // Se ocorrer um erro ao enviar os dados
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
                            <img src="src/assets/th-discover.webp"></img>
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
                                style={Input}>
                                </input>
                            </div>
                            <div>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email corporativo"  style={Input}></input>
                            </div>
                            <div>
                                <input type="endereco" id="enderecp" name="endereco" value={formData.endereco} onChange={handleInputChange} placeholder="Endereço" style={Input}></input>
                            </div>
                            <div>
                                <input type="text" id="pais" name="pais" value={formData.pais} onChange={handleInputChange} placeholder="País/Região" style={Input}></input>
                            </div>
                            <div>
                                <input type="text" id="mensagem" name="mensagem" value={formData.mensagem} onChange={handleInputChange} placeholder="Perguntas/Comentários" style={InputBox}></input>
                            </div>
                            <Button onClick={handleSubmit} type="submit">Faça o teste grátis</Button>
                        </form>
                    </FormSection>
                </FlexSection>
            </Layout>
        </div>
    )
}

export default Contact;
