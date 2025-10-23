// Set today's date as default for end date when page loads
window.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('endDate').value = today;
});

function calculateAge() {
    const startDateInput = document.getElementById('startDate').value;
    const endDateInput = document.getElementById('endDate').value;
    const resultDiv = document.getElementById('result');
    
    // Validate inputs
    if (!startDateInput) {
        resultDiv.innerHTML = '<p style="color: red;">Please enter the start date</p>';
        return;
    }
    
    if (!endDateInput) {
        resultDiv.innerHTML = '<p style="color: red;">Please enter the end date</p>';
        return;
    }
    
    const startDate = new Date(startDateInput);
    const endDate = new Date(endDateInput);
    
    // Check if start date is after end date
    if (startDate > endDate) {
        resultDiv.innerHTML = '<p style="color: red;">Start date cannot be after end date</p>';
        return;
    }
    
    // Calculate years
    let years = endDate.getFullYear() - startDate.getFullYear();
    
    // Calculate months
    let months = endDate.getMonth() - startDate.getMonth();
    
    // Calculate days
    let days = endDate.getDate() - startDate.getDate();
    
    // Adjust if days are negative
    if (days < 0) {
        months--;
        const lastMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
        days += lastMonth.getDate();
    }
    
    // Adjust if months are negative
    if (months < 0) {
        years--;
        months += 12;
    }
    
    // Display result
    resultDiv.innerHTML = `
        <h2>Age Difference:</h2>
        <p><strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days</p>
    `;
}
