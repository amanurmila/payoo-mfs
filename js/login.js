document.getElementById("login-btn").addEventListener("click", (event) => {
    event.preventDefault();

    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;

    if(phoneNumber === "5" && pinNumber === "1234"){
        console.log("logged in");
        window.location.href = '../html/index.html';
    }
    else{
        alert("Wrong phone number or Pin Number");
    }
})