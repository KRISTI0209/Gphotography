function emailSend() {
  const userName = document.getElementById("name").value;
  const userEmail = document.getElementById("email").value;
  const userMessage = document.getElementById("Message").value;
  let params = {
    name: userName,
    email: userEmail,
    message: userMessage,
  };

  if (userName == "" || userEmail == "" || userMessage == "") {
    Swal.fire({
      title: "Invalid input",
      text: "Did you forgot to provide some info?",
      icon: "error",
      confirmButtonText: "Close",
    });
  } else {
    emailjs.send("service_6maur7m", "template_b1ugsif", params).then(
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Email Sent",
        text: "I will contact you on your provided email!",
        showConfirmButton: false,
        timer: 2500,
      })
    );
    const reset = document.getElementById("form").reset();
  }
}
