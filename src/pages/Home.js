import React from 'react';
import '../Home.css';

import Logo1 from "../images/Deloitte.png"
import Logo2 from "../images/HerHackathon.png"
import Logo3 from "../images/TheHachathonCompany.png"
import Investment from "../images/investment.svg"

export default function Home(){
    return(
    <div className="Home">
    <main>
      <h1>LoanBuddy</h1>
      <h2>Excellence in serving people</h2>
    </main>

    <section>
      <img src={Investment} alt="Investment graph drawing" className="mainpicture img-fluid" />
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  
    </p>
    </section>

    <section>
      <div className="logos">
      <div><img src={Logo1} alt="Deloitte logo" className="logo img-fluid" /></div>
      <div><img src={Logo2} alt="HerHackathon logo" className="logo img-fluid" /></div>
      <div><img src={Logo3} alt="The Hackathon Company logo" className="logo img-fluid" /></div>
      </div>
      </section>
      </div>
    );
}