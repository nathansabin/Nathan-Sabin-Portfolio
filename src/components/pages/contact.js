import React, { useState } from 'react';

export default function Contact() {
    const sendEmail = (event) => {
        event.preventDefault();


    }

    const checkName = () => {

    }

    const checkEmail = () => {

    }


    return (
        <div>
            <div className='email-format bottom-page'>
                <form>
                    <input id='name' className='email-info' type='text' placeholder='Name'></input>
                    <input id='email' className='email-info' type='email' placeholder='Email'></input>
                    <textarea id='text' className='email-message' rows='4' placeholder='email body'></textarea>
                    <input id='submit'className='email-button' type='submit' placeholder='submit'></input>
                </form>
            </div>                                                  
        </div>
    )
}
