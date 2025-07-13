const nameInput = document.getElementById("name");
const amountInput = document.getElementById("amount");
const upiLink = document.getElementById("upiLink");

amountInput.addEventListener("input", () => {
  const name = nameInput.value.trim() || "Sumit Roy";
  const amount = amountInput.value;

  if (amount > 0) {
    const upiURL = `upi://pay?pa=skroy131102@ybl&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;
    upiLink.href = upiURL;
    upiLink.style.display = "inline-block";
  } else {
    upiLink.style.display = "none";
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleBtn");
  const sidebar = document.getElementById("sidebar");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
  });
document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("name");
  const amountInput = document.getElementById("amount");
  const upiBtn = document.getElementById("upiBtn");

  upiBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Stop default anchor click

    const name = nameInput.value.trim() || "Supporter";
    const amount = parseFloat(amountInput.value);

    if (!amount || amount <= 0) {
      alert("कृपया एक सही राशि दर्ज करें (₹1 या उससे अधिक)");
      return;
    }

    const upiURL = `upi://pay?pa=8434277980@kotak811&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;

    // Redirect to UPI payment link
    window.location.href = upiURL;
  });

  // Optional: Show/hide button dynamically
  amountInput.addEventListener("input", () => {
    const amount = parseFloat(amountInput.value);
    if (amount > 0) {
      upiBtn.style.display = "inline-block";
    } else {
      upiBtn.style.display = "none";
    }
  });
});

