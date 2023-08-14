import React, { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState(false);
    const [email, setEmail] = useState(false);
    const [feild, setFeild] = useState(true);
    const [buttonText, setButtonText] = useState('submit');

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

    return (
        <div className='bottom-page'>
            <div className='email-format bottom-page'>
                <form  action="https://formsubmit.co/98996af15ee44ab3e1a763ac90f5a0be" method="POST">
                    <input name='name' id='name' className='email-info' type='text' placeholder='Name' onBlur={checkName}></input>
                    <input name='email' id='email' className='email-info' type='email' placeholder='Email'onBlur={checkEmail}></input>
                    <textarea name='text' id='text' className='email-message' rows='4' placeholder='email body'></textarea>
                    <input disabled={feild} id='submit'className='email-button' type='submit' placeholder='submit' value={buttonText}></input>
                </form>
            </div>                                                  
        </div>
    )
}
