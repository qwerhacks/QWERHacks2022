import React from "react";

function Mentors(props) {

    return (
        <div>
            <img src={require("../img/mlh-trust-badge-2021-white.png")} alt="mlh badge" class="mlh" width="120px" />
            <h1>MENTORS
            <div class="subtitle">//<a class="edit" href="https://tinyurl.com/qwer-hacks-collab" target="blank"> interested in mentoring?</a></div>
            </h1>
            <div class="mentors">
                <div class="people">
                    <div class="mentor-image">
                        <img src={require("../img/raksha.png")} alt="raksha" width="160px" />
                    </div>
                    <div class="mentor-text">
                        <div><a href="http://raksha.gay" target="blank" class="mentor-name">Raksha Muthukumar (she/her/hers)</a></div>
                        <div class="mentor-info">Raksha is a software engineer at Google by day and community organizer by night. she is passionate about building a tech future for the many, not just the few. Raksha organizes with DSA Tech Action, Manhattan Community Board 4, and through freelance writing.
                        ask Raksha about <b>Java, Typescript/Javascript, technical communication, webdev, data structures, resume feedback, and git(hub)!</b>
                        </div>
                    </div>
                </div>
                <div class="people">
                    <div class="mentor-image">
                        <img src={require("../img/moss.png")} alt="moss" width="160px" />
                    </div>
                    <div class="mentor-text">
                        <div><a href="https://www.linkedin.com/in/annegail-moreland" target="blank" class="mentor-name">Moss Moreland (they/them/theirs)</a></div>
                        <div class="mentor-info">Moss is a software engineer at Travelers Insurance. they
                        recently graduated as a Cognitive Computer Science Major and are passionate
                        about solving complex problems for the greater benefit of humankind.
                        they are perpetually working towards learning new skills, finding the best ways to teach others,
                        and building the future, ethics first. ask Moss about <b> machine learning, NLP, and algorithmic bias!</b>
                        </div>
                    </div>
                </div>
                <div class="people">
                    <div class="mentor-image">
                        <img src={require("../img/lucas.jpg")} alt="lucas" width="160px" />
                    </div>
                    <div class="mentor-text">
                        <div><a href="https://soldaini.net" target="blank" class="mentor-name">Luca Soldaini (he/him/his)</a></div>
                        <div class="mentor-info">Luca is an applied scientist at Amazon Alexa working on question-answering models.
                        his team builds algorithms that answer users' questions by searching on the web. he identifies as queer and pan. 
                        ask Luca about
                         <b> machine learning, NLP, and artificial intelligence!</b> </div>
                    </div>
                </div>
                {/* <div class="people">
                    <div class="mentor-image">
                        <img src={require("../img/christine.png")} alt="christine" width="160px" />
                    </div>
                    <div class="mentor-text">
                        <div><a href="https://www.linkedin.com/in/christine-keech-026b81173/" target="blank" class="mentor-name">Christine Keech (she/her/hers)</a></div>
                        <div class="mentor-info">I am a student living a semi-false life in a conservative area.
                         I do this to protect myself but I want to change this! I have been working to find others in my community to meet and bond with.
                         </div>
                    </div>
                </div> */}
                <div class="people">
                    <div class="mentor-image">
                        <img src={require("../img/lynn.jfif")} alt="lynn" width="160px" />
                    </div>
                    <div class="mentor-text">
                        <div><a href="https://www.linkedin.com/in/lynnmatar/" target="blank" class="mentor-name">Lynn Matar (she/her/hers)</a></div>
                        <div class="mentor-info">Lynn is a Lebanese Bisexual Computer Science student at Illinois Tech that wants to spread awareness about mental health and help the LGBTQ+ community.
                        ask Lynn about
                         <b> Python, Java, debugging, and github!</b></div>
                    </div>
                </div>
                <div class="people">
                    <div class="mentor-image">
                        <img src={require("../img/aru.png")} alt="aru" width="160px" />
                    </div>
                    <div class="mentor-text">
                        <div><a href="https://www.linkedin.com/in/aru-bhola/" target="blank" class="mentor-name">Aru Bhola (she/her/hers)</a></div>
                        <div class="mentor-info">Aru is a second year computer engineering student who just wants to build robots. ask Aru about
                         <b> C/C++ and Hardware Design Language!</b></div>
                    </div>
                </div>
                <div class="people">
                    <div class="mentor-image">
                        <img src={require("../img/yogendra.jfif")} alt="yogendra" width="160px" />
                    </div>
                    <div class="mentor-text">
                        <div><a href="https://studentambassadors.microsoft.com/en-US/profile/4146" target="blank" class="mentor-name">Yogendrasingh Pawar (he/him/his)</a></div>
                        <div class="mentor-info"> Yogendrasingh is a student in Mumbai, India at NMIMS University. 
                        he has mentored at several hackathons
                        and loves seeing people grow and learn in such a short span of time.
                        ask Yogendrasingh about
                         <b> web development, AI/ML, and debugging!</b></div>
                    </div>
                </div>
                <div class="people">
                    <div class="mentor-image">
                        <img src={require("../img/martin.jfif")} alt="martin" width="160px" />
                    </div>
                    <div class="mentor-text">
                        <div><a href="https://www.linkedin.com/in/martin-stoyanov-745b4272/" target="blank" class="mentor-name">Martin Stoyanov (he/him/his)</a></div>
                        <div class="mentor-info"> Martin is the co-founder of Emailio, an iOS developer, Thiel Fellowship recipient, and the youngest founder to graduate from Y Combinator.
                         ask Martin about <b> React, iOS development, and turning your project into a startup!</b></div>
                    </div>
                </div>
                <div class="people">
                    <div class="mentor-image">
                        <img src={require("../img/matt.png")} alt="facebook logo" width="160px"/>
                    </div>
                    <div class="mentor-text">
                        <div><a href="https://matthewwang.me" target="blank" class="mentor-name">Matt Wang (he/him/his)</a></div>
                        <div class="mentor-info">Matt is a third-year CS + Math-Econ student at UCLA who's passionate about using computers to make the world a fairer place. 
                        He spends most of his time at ACM Teach LA, trying to make computer science education more accessible!
                        ask Matt about <b> HTML/CSS/JS, MV frameworks (React, Angular, etc), general frontend/backend design, and deploying an application + server admin</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Mentors;