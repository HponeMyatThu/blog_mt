import React from 'react';
import InputBox from '../Global/InputBox';
import ButtonComponent from '../Global/ButtonComponent';
import { Icon } from '@iconify/react';
import TitleComponent from '../Global/TitleComponent';
import { Col, Container, Row } from 'react-bootstrap';
import './TextInput.css';

const TextInput = () => {
  const inputType = [
    {
      id: 1,
      type: 'username',
      placeholder: 'Username',
      className: 'w-100 py-3 px-5 my-3 border border-2 p-2 rounded-1',
    },
    {
      id: 2,
      type: 'password',
      placeholder: 'Password',
      className: 'w-100 py-3 px-5 my-3 border border-2 p-2 rounded-1',
    },
  ];
  return (
    <>
      <TitleComponent Text='Sign In' className='h1 mt-5 blod   mx-auto' />
      <div className='d-flex align-items-center justify-content-center'>
        <ButtonComponent
          className='w-100 my-5 square border border-2 p-3 rounded-1'
          type='button'
          btnIcon={<Icon icon='ion:logo-google' width='30px' />}
          btnLabel='Continue with Google'
        />
      </div>

      <Container>
        <Row>
          <Col sm={5} className='my-3'>
            <div className='styled-hr'></div>
          </Col>
          <Col sm={2}>
            <TitleComponent Text='or' className='text-center text-muted' />
          </Col>
          <Col sm={5} className='my-3'>
            <div className='styled-hr'></div>
          </Col>
        </Row>
      </Container>

      {inputType.map(item => (
        <InputBox
          key={item.id}
          type={item.type}
          className={item.className}
          placeholder={item.placeholder}
        />
      ))}

      <Container>
        <Row>
          <Col sm={5}>
            <ButtonComponent
              className='w-100 my-5 square border border-2 p-3 rounded-1 bg-dark text-white'
              type='button'
              btnLabel='Sign Up'
            />
          </Col>
          <Col className='mt-3' sm={2}>
            <TitleComponent Text='or' className='text-center text-muted mt-5' />
          </Col>
          <Col sm={5}>
            <ButtonComponent
              className='w-100 my-5 square border border-2 p-3 rounded-1'
              type='button'
              btnLabel='Sign In'
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TextInput;
