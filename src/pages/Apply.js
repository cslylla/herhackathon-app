import React, {useState} from 'react';
import '../Apply.css';

export default function Apply(){
    let [income, setIncome] = useState("");
    let [loan, setLoan] = useState("");
    let [expenses, setExpenses] = useState("");
    let [age, setAge] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        alert(`Thank you for submitting: ${income}, ${loan}, ${expenses}, ${age}`);
    }

    function getIncome(event){
        setIncome(event.target.value);
    }

    function getLoan(event){
        setLoan(event.target.value);
    }

    function getExpenses(event){
        setExpenses(event.target.value);
    }

    function getAge(event){
        setAge(event.target.value);
    }

    return(
    <div className="Apply">
    <div className="container">
        <h1>Application form</h1>
        <h2>Stage 1: Pre-evaluation</h2>
        <p>Complete the form below to see if you are eligible for loan.</p>
    <form onSubmit={handleSubmit}>
    <div className="row">
    <div className="col-lg-2"></div>
    <div className="col-lg-5">Your monthly income in EUR</div>
    <div className="col-lg-3">
        <input type="text" placeholder="Enter a number" autoFocus={true} autoComplete="false" onChange={getIncome}/>
    </div>
    </div>
    <div className="row">
    <div className="col-lg-2"></div>
    <div className="col-lg-5">Required amount of loan in EUR</div>
    <div className="col-lg-3"><input type="text" placeholder="Enter a number" autoComplete="false" onChange={getLoan}/></div>
    </div>
    <div className="row">
    <div className="col-lg-2"></div>
    <div className="col-lg-5">Your monthly expenses in EUR</div>
    <div className="col-lg-3"><input type="text" placeholder="Enter a number" autoComplete="false" onChange={getExpenses}/></div>
    </div>
    <div className="row">
    <div className="col-lg-2"></div>
    <div className="col-lg-5">Your age</div>
    <div className="col-lg-3"><input type="text" placeholder="Enter a number" autoComplete="false" onChange={getAge}/></div>
    </div>
    <div className="row">
    <div className="col-lg-2"></div>
    <div className="col-lg-8 text-center mt-3"><input type="submit" value="Check Stage 1" className="button" /></div>
    </div>
    </form>    
    </div>    
    </div>    
    
    );
}
