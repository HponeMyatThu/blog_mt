import React, { useState } from 'react';
import InputBox from '../Global/InputBox';
import ButtonComponent from 'src/components/Global/ButtonComponent';
import { Icon } from '@iconify/react';
import TitleComponent from 'src/components/Global/TitleComponent';
import { Col, Container, Row } from 'react-bootstrap';
import 'src/components/SignIn/TextInput.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useQuery } from 'react-query';
import { user_register } from 'src/api/index';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import SignUpSchema from 'src/schema/signup.schema';

const TextInput = () => {
  const navigate = useNavigate();
  const inputType = [
    {
      id: 1,
      type: 'username',
      value: 'username',
      placeholder: 'Username',
      className: 'w-100 py-3 px-5 my-3 border border-2 rounded-1',
    },
    {
      id: 2,
      type: 'email',
      value: 'email',
      placeholder: 'Email Address',
      className: 'w-100 py-3 px-5 my-3 border border-2 rounded-1',
    },
    {
      id: 3,
      type: 'password',
      value: 'password',
      placeholder: 'Password',
      className: 'w-100 py-3 px-5 my-3 border border-2 rounded-1',
    },
    {
      id: 4,
      type: 'password',
      value: 'confirmPassword',
      placeholder: 'confirmPassword',
      className: 'w-100 py-3 px-5 my-3 border border-2 rounded-1',
    },
  ];

  const handleNavigation = e => {
    e.preventDefault();
    navigate('/sign-in');
  };

  return (
    <>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={SignUpSchema}
        onSubmit={async values => {
          try {
            const {
              data: response,
              error,
              status,
            } = await user_register({
              username: values.username,
              email: values.email,
              password: values.password,
            });
            status === 'success' &&
              toast.success(`${status}fully registered , ${response}`);
          } catch (error) {
            toast.error(JSON.stringify(error.response.data.message));
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <TitleComponent
              Text='Sign In'
              className='h1 mt-5 blod text-center'
            />

            {inputType.map(input => (
              <div key={input.id}>
                <Field
                  placeholder={input.placeholder}
                  type={input.type}
                  className={input.className}
                  name={input.value}
                />
                <ErrorMessage
                  className='text-danger'
                  component='div'
                  name={input.type}
                />
              </div>
            ))}

            <Container>
              <Row>
                <Col sm={5}>
                  <ButtonComponent
                    className='w-100 my-2 square border border-2 p-3 rounded-1 bg-dark text-white'
                    type='submit'
                    btnLabel='Sign Up'
                  />
                </Col>
                <Col
                  sm={2}
                  className='d-flex align-items-center justify-content-center'
                >
                  <TitleComponent
                    Text='or'
                    className='text-center text-muted'
                  />
                </Col>
                <Col sm={5}>
                  <button
                    className='w-100 my-2 square border border-2 p-3 rounded-1'
                    type='button'
                    btnLabel='Sign In'
                    onClick={e => handleNavigation(e)}
                  >
                    Sign In
                  </button>
                </Col>
              </Row>
            </Container>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default TextInput;
