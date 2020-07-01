import React,{useCallback,useRef} from 'react'
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { IoMdRocket,IoMdSearch } from "react-icons/io";

import logo from '../../assets/mgtl-logo.svg';

import {Container,Input} from './styles'

function Initial(){
  const formRef = useRef(null);
  const handleSubmit = useCallback(async(data)=>{
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {/*
      const errors = getValidationErrors(error);
      formRef.current?.setErrors(errors);*/
    }
  }, [])

  return(
    <Container>
      <img src={logo} alt="logo"/>
      <Form ref={formRef} onSubmit={handleSubmit}> 
        <Input>
          <IoMdSearch size={20} />
          <input type="text" placeholder="1.000 mgtl's"/>
        </Input>
        <button type={"submit"}>
          <IoMdRocket size={30}/>
        </button>
      </Form>
    </Container>
  );
}

export default Initial;