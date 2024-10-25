// Spin the wheel function
function spinWheel() {
    const name = document.getElementById('name').value;
    if (!name) {
        alert('Please enter your name!');
        return;
    }
    
    const activityNumber = Math.floor(Math.random() * 12) + 1; // Random number between 1 and 10
    document.getElementById('result').textContent = `Hello, ${name}. Your activity number is ${activityNumber}.`;
    
    document.getElementById('download-pdf').style.display = 'block'; // Show download button
    
    sendEmail(name, activityNumber);
}

// Generate and download PDF using jsPDF
function downloadPDF() {
    const name = document.getElementById('name').value;
    const activityNumber = document.getElementById('result').textContent;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.text(`Student Name: ${name}`, 10, 10);
    doc.text(`Your Activity Number: ${activityNumber}`, 10, 20);
    
    doc.save('activity.pdf'); // Download the PDF
}

// Send email using EmailJS
function sendEmail(name, activityNumber) {
    emailjs.init('P0ann7PdgzzWdg8QL'); // Replace with your EmailJS user ID

    const templateParams = {
        name: name,
        activity_number: activityNumber,
        email_to: 'jgatdula@hccci.edu.ph'
    };

    emailjs.send('service_tsg1cyc', 'template_01azxk4', templateParams)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
}
