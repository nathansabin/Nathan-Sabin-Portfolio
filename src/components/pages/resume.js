import React, { useState } from 'react';

export default function Resume() {
    return (
        <div class='box-set'>
            <div class='box-about'>
                <div class='resume'>
                <div>
                    <h2>Nathan Sabin</h2>
                    <p>
                        Phone: (253) 364-9064 | Email: sabinn001@outlook.com  | Bonney Lake, WA 
                    </p>
                    <p>Driven Back-End Web Developer with a successful track record in management and a certificate in full-stack web development from UC Berkeley. While working full-time as a team lead, I managed to keep up with my classes, coursework, and personal coding projects.</p> 
                </div>
                <div>
                    <h3>TECHNICAL SKILLS</h3>
                    <h4>Hard skills</h4>
                    <ol>
                        <li>Node.js</li>
                        <li>JavaScript</li>
                        <li>ES6+</li>
                        <li>python3</li>
                        <li>SQLite</li>
                        <li>MySQL</li>
                        <li>MONGO</li>
                        <li>C</li>
                        <li>CSS3</li>
                        <li>HTML5</li>
                    </ol>
                    <h4>Soft skills</h4>
                    <ol>
                        <li>Express</li>
                        <li>Flask</li>
                        <li>Sequelize</li>
                        <li>Mongoose</li>
                        <li>OOP</li>
                        <li>jQuery</li>
                        <li>GitHub</li>
                        <li>Bootstrap</li>
                    </ol>
                </div>
                <div>
                    <h3>PROJECTS</h3> 
                    <h4><a class='no-dec' href='https://github.com/allister-seras/MyPokedex'>MyPokedex</a></h4>
                    <p>
                        This website allows users to create accounts, save pokemon teams, search pokemon and view stats.
                        I developed the API/ ORM along with connecting it into the pages on the front end. 
                        JS, Express, MySQL, Sequelize, Axios, Handlebars.
                    </p>

                    <h4><a href='https://github.com/nathansabin/social-network-ODM'>Social Media(Twitter backend clone)</a></h4>
                    <p>
                        This is a backend for social media app much like twitter. It allows you to create a user, friend other users, post thoughts and comment on other people's thoughts. 
                        I was the sole author. 
                        JS, Express, Mongo, Mongoose.
                    </p>
                </div>
                <div>
                    <h3>EXPERIENCE</h3>
                    <h4>Coast Aluminum 							        	              2020-present</h4>
                    <h5>Forklift driver/ CTL operator 	  							      Kent, WA</h5> 	
                    <p>Spent 1.5 years as lower management, and the rest as a forklift driver.</p>

                    <h4>Key Accomplishments</h4> 
                    Would often cut up to 40,000 lbs of metal a day for yacht, toolbox and construction companies. 
                    I would often coordinate weekend work with my boss to ensure that we were able to keep up with work, while having a small staff
                    Moved to CTL operator/ team lead after one year. 

                    <h3>EDUCATION</h3> 
                    <p>Certificate in Full Stack Web Development
                    University of berkeley california:
                    A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node.js, MySQL, MongoDB, Express, Handelbars.js, and ReactJS.</p> 	                     		                                                              

                    <h3>Bonney Lake High School</h3>
                    <p>High school: Public highschool where I took my first computer science course.</p> 	
                </div>
            </div>
        </div>
        </div>
    )
}

