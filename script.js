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
});

