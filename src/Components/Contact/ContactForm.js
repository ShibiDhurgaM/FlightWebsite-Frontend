import React, { useState } from 'react';
import "./Contact.css";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoDuotone } from "react-icons/pi";
import { IoLogoYoutube } from "react-icons/io5";


const ContactForm = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [emailid, setEmailid] = useState('');
  const [query, setQuery] = useState('');
  const [allValue, setAllValue] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    const newValue = { fname, lname, phoneno, emailid, query };
    setAllValue([...allValue, newValue]);

    setFname("");
    setLname("");
    setPhoneno("");
    setEmailid("");
    setQuery("");
  }

  return (
    <>
      <section className='contact mtop'>
        <div className='container flex'>
          <div className='main-content'>
            <h1>Drop us a<span> line</span></h1>
            <h2>Fill out our form below, we will get back to you soon</h2>
            <form onSubmit={formSubmit}>
              <div className='grid1'>
                <div className='input'>
                  <span>First Name
                    <label>*</label>
                  </span>
                  <input type='text' name='fname' value={fname} onChange={(e) => setFname(e.target.value)} />
                </div>
                <div className='input'>
                  <span>Last Name
                    <label>*</label>
                  </span>
                  <input type='text' name='lname' value={lname} onChange={(e) => setLname(e.target.value)} />
                </div>
              </div>
              <div className='grid1'>
                <div className='input'>
                  <span>Mobile No
                    <label>*</label>
                  </span>
                  <input type='text' name='phoneno' value={phoneno} onChange={(e) => setPhoneno(e.target.value)} />
                </div>
                <div className='input'>
                  <span>Email-Id
                    <label>*</label>
                  </span>
                  <input type='text' name='emailid' value={emailid} onChange={(e) => setEmailid(e.target.value)} />
                </div>
              </div>
              <div className='grid1'>
                <div className='input'>
                  <span>Write your query here!
                    <label>*</label>
                  </span>
                  <textarea name='query' value={query} cols="30" rows="10" onChange={(e) => setQuery(e.target.value)}></textarea>
                </div>
              </div>
              <button className='primary-btn1'>Submit!</button>
            </form>
          </div>
          <div className='side-content'>
            <img src='/images/contact-3.jpg' alt='Contact' />
            <div className='icon'>
              <h2>Follow Us On</h2>
              <div className='flex_space'>
                <i><BiLogoFacebookCircle /></i>
                <i><FaTwitter /></i>
                <i><PiInstagramLogoDuotone /></i>
                <i><IoLogoYoutube /></i>
                {/* <i><FaSquareThreads /></i> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='show-data'>
        {allValue.map((currentValue, index) => (
          <div className='sing-box' key={index}>
            <h1>Submitted Successfully</h1>
            <p>{`First Name: ${currentValue.fname}`}</p>
            <p>{`Last Name: ${currentValue.lname}`}</p>
            <p>{`Mobile No: ${currentValue.phoneno}`}</p>
            <p>{`Email: ${currentValue.emailid}`}</p>
            <p>{`Query: ${currentValue.query}`}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default ContactForm;
