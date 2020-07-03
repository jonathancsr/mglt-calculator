import React, { useCallback, useEffect, useRef, useContext } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { IoMdRocket, IoMdSearch } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/mgtl-logo.svg';
import { StarshipsContext } from '../../context/StarshipsContext';
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';

import { Container, Header } from './styles';

function Initial() {
  const formRef = useRef(null);

  const history = useHistory();
  const { getStarships, getSpaceshipsStopsInOrder } = useContext(
    StarshipsContext,
  );

  useEffect(() => {
    getStarships();
  }, [getStarships]);

  const handleSubmit = useCallback(
    async data => {
      formRef.current.setErrors({});
      try {
        const schema = Yup.object().shape({
          distance: Yup.string().required('Distance to be traveled mandatory'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        getSpaceshipsStopsInOrder(data.distance);
        history.push('/dashboard');
      } catch (error) {
        const errors = getValidationErrors(error);
        formRef.current.setErrors(errors);
      }
    },
    [history, getSpaceshipsStopsInOrder],
  );

  return (
    <Container>
      <Header>
        <img src={logo} alt="logo" />
        <p>If you need to travel, we'll tell you what starship to pick</p>
      </Header>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <p>What's the distance you need to travel?</p>
        <Input
          name="distance"
          icon={IoMdSearch}
          type="number"
          placeholder="e.g: 1.000.000 mgtl's"
        />
        <button type="submit">
          <IoMdRocket size={30} />
        </button>
      </Form>
    </Container>
  );
}

export default Initial;
