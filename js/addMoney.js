document.getElementById("add-money-btn").addEventListener("click", (event) => {
    event.preventDefault();

    const addMoneyInput = document.getElementById("input-add-money").value;
    const addMoneyNew = parseFloat(addMoneyInput);
    const pinNumber = document.getElementById("input-pin-number").value;

    if(pinNumber === "1234"){
        const balance = document.getElementById('account-balance').innerText;
        const balanceValid = parseFloat(balance);
        
        const total = balanceValid + addMoneyNew;
        
        document.getElementById("account-balance").innerText = total;
    }
    else{
        alert("Failed to Add Money, Please Try Again");
    }
})