document.getElementById("cash-out-btn").addEventListener("click", (event) => {
    event.preventDefault();
    
    const cashOut = document.getElementById("input-cash-out").value;
    const cashOutNew = parseFloat(cashOut);

    const pinNumber = document.getElementById("cash-out-pin").value;

    const balance = document.getElementById("account-balance").innerText;
    const balanceValid = parseFloat(balance);

    if(pinNumber === "1234"){
        const total = balanceValid - cashOutNew;

        document.getElementById("account-balance").innerText = total;
    }
    else{
        alert("Failed to cash out. Please try again later");
    }
})