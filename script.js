// Wait for the DOM to load before adding event listeners
document.addEventListener('DOMContentLoaded', function() {

    // Select the form element
    const form = document.getElementById('loveForm');

      // Add an event listener for form submission
      form.addEventListener('submit', function(event) {
          event.preventDefault(); 
  
          // Get the input values
          const name1 = document.getElementById('name1').value; // User's name
          const name2 = document.getElementById('name2').value; // Partner's name
  
          // Call the function to calculate love compatibility and pass the names as arguments
          calculateLoveCompatibility(name1, name2);
      });

      function calculateLoveCompatibility(name1, name2) {
        const compatibility = Math.floor(Math.random() * 100) + 1; 
    
        // Display the result 
        if (compatibility === 100) {
            alert(`The compatibility between ${name1} and ${name2} is 100%! You are a perfect match!`);
        } else if (compatibility > 80) {  
            alert(`The compatibility between ${name1} and ${name2} is ${compatibility}%. You are very compatible!`);
        } else if (compatibility > 50) {    
            alert(`The compatibility between ${name1} and ${name2} is ${compatibility}%. You are somewhat compatible!`);
        } else if (compatibility > 30) {    
            alert(`The compatibility between ${name1} and ${name2} is ${compatibility}%. RUN away! Do not walk!!!!`);
        }
        // alert(`The compatibility between ${name1} and ${name2} is ${compatibility}%!`);
    }
});
