import React, { useState } from 'react';
import "./resume.css";
import pdf from "../../assets/Nathan Sabin.pdf";

export default function Resume() {
    return (
        <div className='resume-format'>
            <a href={pdf}><button className="pdf">Resume PDF</button></a>
            <div className='hard-skills'>
                <h2>Hard Skills</h2>
                <div className="list">
                    <ol className='list-box'>
                        <h4>MERN Stack</h4>
                        <li>Mongodb</li>
                        <li>Express.js</li>
                        <li>React.js</li>
                        <li>Node.js</li>
                    </ol>
                    <ol className='list-box'>
                        <h4>Languages</h4>
                        <li>JavaScript ES6+</li>
                        <li>Python3</li>
                        <li>C# 6.0</li>
                        <li>HTML5</li>
                    </ol>
                    <ol className='list-box'>
                        <h4>Back-End</h4>
                        <li>MYSQL</li>
                        <li>SQLite</li>
                        <li>GraphQL</li>
                        <li>Flask</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

