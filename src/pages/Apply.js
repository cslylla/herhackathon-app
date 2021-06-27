import React, {useState} from 'react';
import '../Apply.css';
import passedpicture from "../images/passedpicture.png"
import failedpicture from "../images/failedpicture.png"

export default function Apply(){
    let [income, setIncome] = useState("");
    let [loan, setLoan] = useState("");
    let [expenses, setExpenses] = useState("");
    let [age, setAge] = useState("");
    let [submitted, setSubmitted] = useState(false);

    function handleSubmit(event){
        event.preventDefault();
        setSubmitted(true);
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

    let form = (
        <form onSubmit={handleSubmit}>
        <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8"><p>Complete the form below to see if you are eligible for loan.</p></div>
        </div>
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
    )

    if (submitted){
        if(loan < (3*income)){
            return(
                <div className="Apply">
                <div className="container">
                <h1>Application form</h1>
                <h2>Stage 1: Pre-evaluation</h2>
                <div className="message text-center mt-3">
                <h3>Thank you for your application.</h3>
                <img src={passedpicture} alt="Check symbol" className="img-fluid symbol" />
                <p>Your Income is {income} EUR. Your Loan is {loan} EUR. Your Expenses are {expenses} EUR. Your age is {age} years.</p>
                <p className="passingMessage">You have passed Stage one of the evaluation process.</p>
                <p>Continue to Stage 2 evaluation</p>
                <button className="button">Stage 2</button>
                </div>
                </div>    
                </div>
            )
        } else {
            return(
                <div className="Apply">
                <div className="container">
                <h1>Application form</h1>
                <h2>Stage 1: Pre-evaluation</h2>
                <p>Complete the form below to see if you are eligible for loan.</p>
                <div className="message text-center mt-3">
                <h3>Thank you for your application.</h3>
                <img src={failedpicture} alt="Fail symbol" className="img-fluid symbol" />
                <p>Your Income is {income} EUR. Your Loan is {loan} EUR. Your Expenses are {expenses} EUR. Your age is {age} years.</p>
                <p className="failingMessage">You have failed Stage one of the evaluation process.</p>
                <p>For further information or support, please contact us</p>
                <button className="button">Contact Us</button>
                </div>
                </div>    
                </div>
            )
        }
    
    } else {
     return(
        <div className="Apply">
        <div className="container">
        <h1>Application form</h1>
        <h2>Stage 1: Pre-evaluation</h2>
        {form}
        </div>    
        </div>    
    )   
    }
    }
    

