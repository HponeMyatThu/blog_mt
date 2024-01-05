import React from 'react';
import InputBox from '../Global/InputBox';
import ButtonComponent from 'src/components/Global/ButtonComponent';
import { Icon } from '@iconify/react';
import TitleComponent from 'src/components/Global/TitleComponent';
import { Col, Container, Row } from 'react-bootstrap';
import 'src/components/SignIn/TextInput.css';

const TextInput = () => {
  const inputType = [
    {
      id: 1,
      type: 'username',
      placeholder: 'Username',
      className: 'w-100 py-3 px-5 my-3 border border-2 rounded-1',
    },
    {
      id: 2,
      type: 'email',
      placeholder: 'Email Address',
      className: 'w-100 py-3 px-5 my-3 border border-2 rounded-1',
    },
    {
      id: 3,
      type: 'password',
      placeholder: 'Password',
      className: 'w-100 py-3 px-5 my-3 border border-2 rounded-1',
    },
  ];

  return (
    <>
      <TitleComponent Text='Sign In' className='h1 mt-5 blod text-center' />
      <div className='d-flex align-items-center justify-content-center'>
        <ButtonComponent
          className='w-100 my-5 square border border-2 p-3 rounded-1'
          type='button'
          btnIcon={<Icon icon='ion:logo-google' width='30px' />}
          btnLabel='Continue with Google'
        />
      </div>

      <div className='d-flex'>
        <div className='styled-hr my-3'></div>
        <TitleComponent Text='or' className='w-25 text-center text-muted' />
        <div className='styled-hr my-3'></div>
      </div>

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
              className='w-100 my-2 square border border-2 p-3 rounded-1 bg-dark text-white'
              type='button'
              btnLabel='Sign Up'
            />
          </Col>
          <Col sm={2} className='d-flex align-items-center justify-content-center'>
            <TitleComponent Text='or' className='text-center text-muted' />
          </Col>
          <Col sm={5}>
            <ButtonComponent
              className='w-100 my-2 square border border-2 p-3 rounded-1'
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
