import React, { useState } from 'react';

export default function Resume() {
    return (
        <div className='resume-set'>
            <div className='resume-about'>
                <div className='resume'>
                <div>
                    <p>
                        Phone: (253) 364-9064 | Email: sabinn001@outlook.com | Bonney Lake, WA
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
                    <h4><a href='https://github.com/allister-seras/MyPokedex'>MyPokedex</a></h4>
                    <p>
                        This website allows users to create accounts, save Pokemon teams, search for Pokemon, and view stats. I developed the API and ORM, along with connecting them to the pages on the front end. JS, Express, MySQL, Sequelize, Axios, and Handlebars.
                    </p>

                    <h4><a href='https://github.com/nathansabin/social-network-ODM'>Social media (Twitter backend clone)</a></h4>
                    <p>
                    This is a backend for social media apps, much like Twitter. It allows you to create a user, friend other users, post thoughts, and comment on other people's thoughts. I was the sole author. JS, Express, Mongo, and Mongoose.
                    </p>
                </div>
                <div>
                    <h3>EXPERIENCE</h3>
                    <h4>Coast Aluminum 2020-present</h4>
                    <h5>Forklift driver/CTL operator, Kent, WA</h5> 	
                    <p>I spent 1.5 years in lower management and the rest as a forklift driver.</p>

                    <h4>Key Accomplishments</h4> 
                    <p>Would often cut up to 40,000 lbs. of metal a day for yacht, toolbox, and construction companies. I would often coordinate weekend work with my boss to ensure that we were able to keep up with work while having a small staff. I moved to CTL operator/team lead after one year.</p>

                    <h3>EDUCATION</h3> 
                    <p>Certificate in Full Stack Web Development, University of Berkeley, California: A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node.js, MySQL, MongoDB, Express, Handelbars.js, and ReactJS.</p> 	                     		                                                              

                    <h3>Bonney Lake High School</h3>
                    <p>High school: Public high school, where I took my first computer science course.</p> 	
                </div>
            </div>
        </div>
        </div>
    )
}

