

window.addEventListener('DOMContentLoaded', function() {
   
    const form = document.getElementById("calc-form");
    if (form) {
      setupIntialValues();
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        update();
      });
    }

  });

  function getCurrentUIValues() {
    return {
      amount: +(document.getElementById("loan-amount").value),
      years: +(document.getElementById("loan-years").value),
      rate: +(document.getElementById("loan-rate").value),
    }
  }
  const loanAmount = document.getElementById("loan-amount");
  const year = document.getElementById("loan-years");
  const rate = document.getElementById("loan-rate");
  console.log(loanAmount);
  console.log(year);
  console.log(rate);
  // Get the inputs from the DOM.
  // Put some default values in the inputs
  // Call a function to calculate the current monthly payment
  function setupIntialValues() {
    loanAmount.value = '0';
    year.value = '0';
    rate.value = '0';
    const intialValues = {amount:loanAmount,years:year,rate:rate};
    calculateMonthlyPayment(intialValues);
  }
  
  // Get the current values from the UI
  // Update the monthly payment
  function update() {
    const prevUpdate = document.querySelector('p');
    if(prevUpdate !== null){
    prevUpdate.remove();
    }
    updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
  }
  
  // Given an object of values (a value has amount, years and rate ),
  // calculate the monthly payment.  The output should be a string
  // that always has 2 decimal places.
  function calculateMonthlyPayment(values) {
    let monthlyCal = ((values.amount * values.rate))/1-(1 + values.rate)**(-values.years);
    console.log((values.amount * values.rate));
    console.log(1 + values.rate);
    console.log(-values.years);
    console.log((1 + values.rate)**(-values.years));
    console.log(1-((1 + values.rate)**(-values.years)));

    console.log((Math.floor(monthlyCal * 100)) / 100);
    let monthly = (Math.floor(monthlyCal * 100)) / 100;
    return JSON.stringify(monthly);
  }
  
  // Given a string representing the monthly payment value,
  // update the UI to show the value.
  function updateMonthly(monthly) {
    const string = document.createElement("p");
    document.querySelector('h3').appendChild(string);
    return string.innerText = `this is your monthly payment $${monthly}.`
  }
