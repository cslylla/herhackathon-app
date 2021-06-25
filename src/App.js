import './App.css';
import Logo1 from "./images/Deloitte.png"
import Logo2 from "./images/HerHackathon.png"
import Logo3 from "./images/TheHachathonCompany.png"

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🥑 Avo-cardios 🥑</h1>
        <h2>How to match AI &amp; Inclusion</h2>
        <button type="button" className="btn btn-primary">Hello</button>
      </header>
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
