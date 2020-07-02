import React,{useCallback,useEffect,useRef, useContext} from 'react'
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { IoMdRocket,IoMdSearch } from "react-icons/io";
import {useHistory} from 'react-router-dom'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import logo from '../../assets/mgtl-logo.svg';
import {StarshipsContext} from '../../context/StarshipsContext' 
import getValidationErrors from '../../utils/getValidationErrors'
import Input from '../../components/Input'

import {Container} from './styles'

const defaultMaskOptions = {
  prefix: '',
  suffix: ' mgtl\'s',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: '.',
  integerLimit: 99, // limit length of integer numbers
  allowNegative: false,
  allowLeadingZeroes: false,
};

function Initial(){
  const formRef = useRef(null);
  
  const history = useHistory();
  const {getStarships, getSpaceshipsStopsInOrder} = useContext(StarshipsContext);
  
  const Mask = createNumberMask(defaultMaskOptions)

  useEffect( () =>{
    getStarships();
  },[getStarships])

  const handleSubmit = useCallback(async(data)=>{
    formRef.current.setErrors({});
    try {
      const schema = Yup.object().shape({
        distance: Yup.string()
          .required('Distancia a ser percorrida obrigatória'),
      });

     await schema.validate(data, {
        abortEarly: false,
      });

      getSpaceshipsStopsInOrder(data.distance);
      history.push('/dashboard')
    } catch (error) {
      const errors = getValidationErrors(error);
      formRef.current.setErrors(errors);
    }
  }, [history,getSpaceshipsStopsInOrder])


  return (
    <Container>
      <img src={logo} alt="logo" />
      <h2>Input the distance to receive a list of the best starships to fly</h2>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          mask={Mask}
          name="distance"
          icon={IoMdSearch}
          type="number"
          placeholder="1.000.000 mgtl's"
        />
        <button type="submit">
          <IoMdRocket size={30} />
        </button>
      </Form>
    </Container>
  );
}

export default Initial;