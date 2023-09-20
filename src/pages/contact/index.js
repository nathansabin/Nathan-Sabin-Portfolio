import React, { useState, useEffect } from 'react';
import "./contact.css";

export default function Contact() {
    const [name, setName] = useState(false);
    const [email, setEmail] = useState(false);
    const [feild, setFeild] = useState(true);
    const [buttonText, setButtonText] = useState('submit');
    const [mailString, setMailString] = useState("");

    const checkName = () => {
        const newName = document.getElementById('name').value;
        const namePattern = /^[a-z]/i;
        setName(namePattern.test(newName));

        const newFeild = checkFeild();
        setFeild(newFeild);
        buttonName();
    }

    const checkEmail = () => {
        const newEmail = document.getElementById('email').value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setEmail(emailPattern.test(newEmail));
        
        const newFeild = checkFeild();
        setFeild(newFeild);
        buttonName();
    }

    const checkFeild = () => {
        return !(name && email);
    }
    
    const buttonName = () => {
        if (!name) {
            setButtonText('invalid name');
        } else if (!email) {
            setButtonText('invalid email');
        } else {
            setButtonText('submit');
        }
    }

    const mail = (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const details = document.getElementById('text').value;
        
        const mailtoLink = `mailto:sabinnat001@outlook.com?subject='${encodeURIComponent(name)}&body=${encodeURIComponent(details)}`;
        const tempLink = document.createElement('a');
        tempLink.href = mailtoLink;
        tempLink.click();
    }

    return (
        <div className='bottom-page'>
            <div className='email-format bottom-page'>
                <form >
                    <input name='name' id='name' className='email-info' type='text' placeholder='Name' onChange={checkName}></input>
                    <input name='email' id='email' className='email-info' type='email' placeholder='Email'onChange={checkEmail}></input>
                    <textarea name='text' id='text' className='email-message' rows='4' placeholder='email body'></textarea>
                    <a onClick={mail} href='google.com'><input disabled={feild} id='submit'className='email-button' type='submit' value={buttonText}></input></a>
                </form>
            </div>                                                  
        </div>
    )
}
