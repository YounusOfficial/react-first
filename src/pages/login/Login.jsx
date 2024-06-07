import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  background-color: #f0f2f5;
`;

const Form = styled.form`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  margin:0;
  padding: 0.75rem;
  background-color: var(--primary);
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 1rem;
`;

const SuccessMessage = styled.p`
  color: green;
  margin-bottom: 1rem;
`;



const Login = () => {

  const initialValues = {
    email: "",
    password: ""
  }

  const [formData, setFormData] = useState(initialValues)
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();



  useEffect(() => {
    axios.get("http://localhost:8000/users")
      .then(res => setUsers(res.data))
  }, [])



  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(
      {
        ...formData,
        [name]: value
      }
    )
  }

  function checkUserExist() {
    const userRecord = users.find(user => user.email == formData.email && user.password == formData.password);

    if (!userRecord) setErrors("Incorrect Username or Password");
    else setSuccess("Welcome User");
    return userRecord;
  }

  function clearStatus() {
    setErrors();
    setSuccess();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    clearStatus();
    const userRecord = checkUserExist();
    if (userRecord) navigate("/dashboard");
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>

        {errors && <ErrorMessage>{errors}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}

        <Input onChange={handleChange} name="email" value={formData.email} type="email" placeholder="Email" required />
        <Input onChange={handleChange} name="password" value={formData.password} type="password" placeholder="Password" required />
        <Button type="submit">Login</Button>
        <p className='black' style={{ marginTop: "10px" }}>
          Don't have an account? <Link className='black' to="/register">Register</Link>
        </p>
      </Form>
    </Container>
  );
};

export default Login;
