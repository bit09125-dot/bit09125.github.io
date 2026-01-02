function payNow() {
    let phone = prompt("Enter your phone number (2547XXXXXXXX)");
    if (!phone) return;

    fetch("https://your-backend-url/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: phone })
    })
    .then(res => res.json())
    .then(data => alert("STK Push sent. Check your phone!"))
    .catch(err => alert("Payment failed"));
}
