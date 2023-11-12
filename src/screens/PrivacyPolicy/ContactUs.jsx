import React, { useState } from 'react';
import './contactUs.css'
import Navbar from '../Home/Navbar';
import { Footer } from '../../components/Footer';
import axios from 'axios';
import LogInHeader from '../Search/LogInHeader';
import { BASE_AUTH_URL } from '../../api/config';

const ContactUs = () => {
    const accessAuth = JSON.parse(localStorage.getItem('accessAuth'));
    const [responseMessage, setResponseMessage] = useState("")
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sentMail(formData)

    setFormData({
        name: '',
        email: '',
        description: '',
      })
  };

  const sentMail = async (values) => {
    try{
      const response = await axios.post(BASE_AUTH_URL+'/api/v1/users/contact-us',values);
      if (response.status === 200) {
        setResponseMessage(response.data.msg)
      }
    }
    catch(error) {
      console.log(error);
        setResponseMessage("Something went wrong")
    };
  };
  const renderHeader = accessAuth?.accessToken ? (
    <LogInHeader />
  ) : (
    <Navbar />
  );

  return (

    <div>

        {renderHeader}


    <div className="address-section">
          <h2>Our Address</h2>
          <p>
            One Orange Digital
            <br />
            South City 2, Sector 49,
            <br />
            Gurgaon, Haryana, India
            <br />
            122018
            <br />
            M. 9773533007
          </p>
        </div>

    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <div style={{color: 'blue'}}>{responseMessage} </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      
    </div>
    <Footer/>

    </div>
  );
};

export default ContactUs;
