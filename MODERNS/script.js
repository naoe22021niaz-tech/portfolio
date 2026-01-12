// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// EmailJS Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.sendForm(
    "service_amniazrahman",    // ✅ Your Service ID
    "template_d7o0map",        // ✅ Your Template ID
    this
  ).then(
    function(){
      alert("Message sent successfully!");
      document.getElementById("contactForm").reset();
    },
    function(error){
      alert("Failed to send message!");
      console.error("EmailJS error:", error);
    }
  );
});
