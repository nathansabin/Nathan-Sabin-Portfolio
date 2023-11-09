import React, { useState } from 'react';
import "./resume.css";
import pdf from "../../assets/Nathan Sabin.pdf";

export default function Resume() {
    return (
        <div className='resume-format'>
            <div className='hard-skills'>
            <table class="table table-hover">
            <thead>
                <tr>
                    <th/>
                    <th scope="col"> <a href={pdf}><button className="pdf btn btn-primary btn-lg">Resume PDF</button></a></th>
                    <th/>
                </tr>
                <tr class="heads">
                    <th scope="col">MERN Stack</th>
                    <th scope="col">Languages</th>
                    <th scope="col">Back-end</th>
                </tr>
            </thead>
            <tbody class="tables">
                <tr class="table-secondary">
                    <td>MongoDB</td>
                    <td>JavaScript ES6+</td>
                    <td>ASP.NET web API</td>
                </tr>
                <tr class="table-secondary">
                    <td>Express.js</td>
                    <td>c# 7.0+</td>
                    <td>mySQL</td>
                </tr>
                <tr class="table-secondary">
                    <td>react.js</td>
                    <td>Python3</td>
                    <td>MSSQL</td>
                </tr>  
                <tr class="table-secondary">
                    <td>node.js</td>
                    <td>HTML5</td>
                    <td>SQLite</td>
                </tr>
            </tbody>
            </table>
            </div>
        </div>
    )
}

