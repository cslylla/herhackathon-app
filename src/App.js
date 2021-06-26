import './App.css';
import Logo1 from "./images/Deloitte.png"
import Logo2 from "./images/HerHackathon.png"
import Logo3 from "./images/TheHachathonCompany.png"
import Logo4 from "./images/Loanbuddy.png"
import Investment from "./images/investment.svg"

export default function App() {
  return (
    <div className="App">
        <header className="App-header">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <a class="navbar-brand" href="index.html" title="Go to the Home page"><img src={Logo4} alt="Deloitte logo" className="mainlogo img-fluid" /></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="#">Apply</a>
          <a class="nav-item nav-link" href="#">Contact</a>
        </div>
      </div>
    </nav>
  </header>

  <main>
    <h1>Loan Buddy</h1>
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
    <div><img src={Logo2} alt="HerHAckathon logo" className="logo img-fluid" /></div>
    <div><img src={Logo3} alt="The Hackathon Company logo" className="logo img-fluid" /></div>
    </div>
    </section>
    </div>
  );
}
