import React from 'react';
import '../Apply.css';

export default function Apply(){
    return(
    <div className="Apply">
    <div className="container">
        <h1>Application form</h1>
        <h2>Stage 1: Pre-evaluation</h2>
        <p>Complete the form below to see if you are eligible for loan.</p>
    <form>
    <div className="row">
    <div className="col-lg-2"></div>
    <div className="col-lg-4">Your monthly income in EUR</div>
    <div className="col-lg-4">
        <input type="text" placeholder="Enter a number" autoFocus={true} autoComplete={false}/>
    </div>
    </div>
    <div className="row">
    <div className="col-lg-2"></div>
    <div className="col-lg-4">Required amount of loan in EUR</div>
    <div className="col-lg-4"><input type="text" placeholder="Enter a number" autoComplete={false}/></div>
    </div>
    <div className="row">
    <div className="col-lg-2"></div>
    <div className="col-lg-4">Your monthly expenses in EUR</div>
    <div className="col-lg-4"><input type="text" placeholder="Enter a number" autoComplete={false}/></div>
    </div>
    <div className="row">
    <div className="col-lg-2"></div>
    <div className="col-lg-4">Your age</div>
    <div className="col-lg-4"><input type="text" placeholder="Enter a number" autoComplete={false}/></div>
    </div>
    <div className="row">
    <div className="col-lg-10 text-center mt-3"><input type="submit" Value="Check Stage 1" className="button" /></div>
    </div>
    </form>    
    </div>    
    </div>    
    
    );
}
