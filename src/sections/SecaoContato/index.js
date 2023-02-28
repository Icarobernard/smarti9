import React, {useState, useEffect, useRef} from 'react';
import Titulo from '~/src/components/Titulo';
import {DivSecao, Content, Input, TextArea, BackgroudTitle, ContainerBackgroudTitle, ContainerTitle, Text, Button, LoadingButton, ContainerCaptcha} from './styles';
import api from '../../services/api';
import ReCAPTCHA from "react-google-recaptcha";

function SecaoContato(){
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [displayOfSendButton, setDisplayOfSandButton] = useState(true);
  const reCaptcha = useRef();
   
  const env = {
    SITE_KEY:'6LfFhcQaAAAAAGkuKAZp4XdNnq4E-_r398vupENG',
  }

  function validateEmail(email) {
    const response = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return response.test(String(email).toLowerCase());
}

  async function onSubmit() {
    if(token){
      if(nome.length == 0){
        alert('O campo "Nome" não pode ser vazio!!');
        return;
      }
      if(email.length == 0){
        alert('O campo "Email" não pode ser vazio!!');
        return;
      }
      if(!validateEmail(email)){
        alert('O email informado não é válido!!');
        return;
      }
      if(telefone.length == 0){
        alert('O campo "Telefone" não pode ser vazio!!');
        return;
      }
      if(mensagem.length == 0){
        alert('O campo "Mensagem" não pode ser vazio!!');
        return;
      }

      const data = {
        nome: nome,
        email: email,
        telefone: telefone,
        mensagem: mensagem
      }
      setDisplayOfSandButton(false);
      setLoading(true);
      try {
        const response = await api.post("mail/contato", data, {
          headers: {
              "Content-Type": "application/json;charset=utf-8",
              "Access-Control-Allow-Origin": "*",
          },
        });
        if(response){
          reCaptcha.current.reset();
          setToken("");
          alert("Seus dados foram enviados ;D Agora é só esperar nosso contato!");
        }
        setLoading(false);
        setNome('');
        setEmail('');
        setTelefone('');
        setMensagem('');
        setDisplayOfSandButton(true);
      } catch (err) {
          setNome('');
          setEmail('');
          setTelefone('');
          setMensagem('');
          alert("Ops, não foi possível enviar seus dados :( Por favor, tente novamente!");
          setDisplayOfSandButton(true);
          setLoading(false);
      }
    }
    else
      alert('O capctha não foi validado!!');
  }

  function validate(e) {
    e.preventDefault()
    if(token)
      onSubmit();
    else
      alert('O capctha não foi validado!!');
  }

  return(
    <DivSecao id='secaoContato'>
      <ContainerBackgroudTitle>
        <BackgroudTitle>VAMOS CONVERSAR</BackgroudTitle>
      </ContainerBackgroudTitle>
      <ContainerTitle>
        <Titulo>Contato</Titulo>
      </ContainerTitle>
      <Text>Você quer que sua organização dê o próximo passo?</Text>
      <Content onSubmit={onSubmit} method='POST' id='form'>
        <Input value={nome} placeholder='NOME' type='text' onChange={(e) => setNome(e.target.value)}/>
        <Input value={email} placeholder='EMAIL' type='email'onChange={(e) => setEmail(e.target.value)}/>
        <Input value={telefone} placeholder='TELEFONE' type='tel'onChange={(e) => setTelefone(e.target.value)}/>
        <TextArea value={mensagem} placeholder='DEIXE-NOS A SUA MENSAGEM' onChange={(e) => setMensagem(e.target.value)}/>
        <ContainerCaptcha theme={{display: displayOfSendButton ? 'block' : 'none'}}>
          <ReCAPTCHA
            ref={reCaptcha}
            sitekey={env.SITE_KEY}
            onChange={token => setToken(token)}
            onExpired={(e) => setToken("")}
          />
        </ContainerCaptcha>
        <Button theme={{display: displayOfSendButton ? 'block' : 'none'}} type='submit' onClick={(e) => validate(e)}>ENVIAR</Button>
        <LoadingButton theme={{display: loading ? 'block' : 'none'}}/>
        <div id="html_element"></div>
      </Content>
    </DivSecao>
  );
}

export default SecaoContato;