import React,{useCallback,useEffect,useRef, useContext} from 'react'
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { IoMdRocket,IoMdSearch } from "react-icons/io";

import logo from '../../assets/mgtl-logo.svg';
import {StarshipsContext} from '../../context/StarshipsContext' 
import getValidationErrors from '../../utils/getValidationErrors'
import Input from '../../components/Input'

import {Container} from './styles'


function Initial(){
  const formRef = useRef(null);
  
  
  const {getStarships, starship} = useContext(StarshipsContext);
  
  useEffect( () =>{
    getStarships();
  },[getStarships])

  const handleSubmit = useCallback(async(data)=>{
    try {
    formRef.current.setErrors({});
      const schema = Yup.object().shape({
        distance: Yup.string()
          .required('Distancia a ser percorrida obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(starship);
    } catch (error) {
      const errors = getValidationErrors(error);
      formRef.current.setErrors(errors);
    }
  }, [starship])


  return (
    <Container>
      <img src={logo} alt="logo" />
      <h2>Input the distance to receive a list of the best starships to fly</h2>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="distance"
          icon={IoMdSearch}
          placeholder="1.000 mgtl's"
        />
        <button type={'submit'}>
          <IoMdRocket size={30} />
        </button>
      </Form>
    </Container>
  );
}

export default Initial;