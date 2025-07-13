document.addEventListener("DOMContentLoaded", function () {
  // Sidebar Toggle
  const toggleBtn = document.getElementById("toggleBtn");
  const sidebar = document.getElementById("sidebar");

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("show");
    });
  }

  // UPI Dynamic Redirect
  const nameInput = document.getElementById("name");
  const amountInput = document.getElementById("amount");
  const upiBtn = document.getElementById("upiBtn");

  if (upiBtn && nameInput && amountInput) {
    upiBtn.addEventListener("click", function (e) {
      e.preventDefault();

      const name = nameInput.value.trim() || "Supporter";
      const amount = parseFloat(amountInput.value);

      if (!amount || amount <= 0) {
        alert("कृपया ₹1 या उससे अधिक राशि दर्ज करें।");
        return;
      }

      const upiURL = `upi://pay?pa=8434277980@kotak811&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;
      window.location.href = upiURL;
    });
  }
});

  
