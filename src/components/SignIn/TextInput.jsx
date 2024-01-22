import React from 'react';
import InputBox from '../Global/InputBox';
import ButtonComponent from 'src/components/Global/ButtonComponent';
import { Icon } from '@iconify/react';
import TitleComponent from 'src/components/Global/TitleComponent';
import { Col, Container, Row } from 'react-bootstrap';
import './TextInput.css';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { user_login } from 'src/api/index';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from 'src/features/Slice/userSlice';
import SignInSchema from 'src/schema/signin.schema';
import toast from 'react-hot-toast';

const TextInput = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputType = [
    {
      id: 1,
      type: 'username',
      placeholder: 'Username',
      className: 'w-100 py-3 px-5 my-3 border border-2 rounded-1',
    },
    {
      id: 2,
      type: 'password',
      placeholder: 'Password',
      className: 'w-100 py-3 px-5 my-3 border border-2 rounded-1',
    },
  ];

  const handleNavigation = e => {
    e.preventDefault();
    navigate('/sign-up');
  };
  return (
    <>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={SignInSchema}
        onSubmit={async values => {
          try {
            const { data: response, status } = await user_login(values);
            if (status === 'success') {
              toast.success(`${status}fully logged in`);
              console.log(response && response.user);
              const decodedToken = response && response[1].user.role;
              dispatch(signIn(response));
              if (decodedToken === 'ADMIN') {
                return navigate('/admin/dashboard');
              }
              return navigate('/blog-list');
              // dispatch(signIn(response));
            }
          } catch (error) {
            toast.error(JSON.stringify(error.response.data.message));
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <TitleComponent
              Text='Sign In'
              className='h1 mt-5 bold text-center'
            />

            <div className='d-flex align-items-center justify-content-center'>
              <ButtonComponent
                className='w-100 my-5 square border border-2 p-3 rounded-1 '
                type='button'
                btnIcon={<Icon icon='ion:logo-google' width='30px' />}
                btnLabel='Continue with Google'
              />
            </div>

            <div className='d-flex'>
              <div className='styled-hr my-3'></div>
              <TitleComponent
                Text='or'
                className='w-25 text-center text-muted'
              />
              <div className='styled-hr my-3'></div>
            </div>

            {inputType.map(input => (
              <div key={input.id}>
                <Field
                  placeholder={input.placeholder}
                  type={input.type}
                  className={input.className}
                  name={input.type}
                />
                <ErrorMessage
                  className='text-danger'
                  name={input.type}
                  component='div'
                />
              </div>
            ))}

            <Container>
              <Row>
                <Col sm={5}>
                  <button
                    className='w-100 my-2 square border border-2 p-3 rounded-1 bg-dark text-white'
                    type='button'
                    btnLabel='Sign Up'
                    onClick={e => handleNavigation(e)}
                  >
                    Sign Up
                  </button>
                </Col>
                <Col
                  sm={2}
                  className='d-flex  align-items-center justify-content-center'
                >
                  <TitleComponent
                    Text='or'
                    className='text-center text-muted'
                  />
                </Col>
                <Col sm={5}>
                  <ButtonComponent
                    className='w-100 my-2 square border border-2 p-3 rounded-1'
                    type='submit'
                    btnLabel='Sign In'
                  />
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
