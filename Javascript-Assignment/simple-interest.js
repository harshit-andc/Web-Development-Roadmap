function calculateSimpleInterest(principal, rate, time) {
  const simpleInterest = (principal * rate * time) / 100; // Calculate SI
  alert(`The simple interest is: $${simpleInterest}`); // Display result in pop-up
}

// Example usage:
const principal = 1000; // Principal amount
const rate = 5; // Rate of interest
const time = 3; // Time in years
calculateSimpleInterest(principal, rate, time); // Alerts: The simple interest is: $150
