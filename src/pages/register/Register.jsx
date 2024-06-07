import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './register.css'
import axios from 'axios';

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
  margin: 0;
  width: 100%;
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

const Register = () => {

  const initialValues = {
    name: "",
    email: "",
    password: ""
  }

  const [formData, setFormData] = useState(
    initialValues
  )

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  //handlechange
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData(
      {
        ...formData,
        [name]: value
      }
    )
  }

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required. ";
    if (formData.name < 3) newErrors.name += "Name should be minimum 3 characters."

    if (!formData.email) newErrors.email = "Email is required";

    if (!formData.password) newErrors.password = "Password is required. ";
    if (formData.password < 5) newErrors.password += "Password should be atleast 5 characters";

    setErrors(newErrors)

    if (Object.keys(errors).length == 0) {
      //save data
      axios.post("http://localhost:8000/users", formData)
        .then(res => console.log(res));

      setSuccess("Registeration completed")
      setFormData(initialValues);
    }
  }


  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Register</Title>

        {success && <SuccessMessage>{success}</SuccessMessage>}


        {/* Name */}
        <Input onChange={handleOnChange} name='name' value={formData.name} type="text" placeholder="Name" />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}

        {/* Email */}
        <Input onChange={handleOnChange} name='email' value={formData.email} type="email" placeholder="Email" />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}


        {/* Password */}
        <Input onChange={handleOnChange} name="password" value={formData.password} type="password" placeholder="Password" />
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}


        {/* Submit Button */}
        <Button type="submit">Register</Button>

        <p style={{ marginTop: "10px" }}>
          Already have an account? <Link className='black' to="/login">Login here</Link>
        </p>
      </Form>
    </Container>
  );
};

export default Register;
