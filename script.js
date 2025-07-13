 function calculateTicketPrice() {
      const age = parseInt(document.getElementById("age").value);
      const basePrice = 150;
      let finalPrice;

      if (isNaN(age) || age <= 0) {
        document.getElementById("priceResult").textContent = "Please enter a valid age.";
        return;
      }

      if (age < 12) {
        finalPrice = basePrice * 0.5;
      } else if (age > 60) {
        finalPrice = basePrice * 0.7;
      } else {
        finalPrice = basePrice;
      }

      document.getElementById("priceResult").textContent = `Your ticket price is ₹${finalPrice.toFixed(2)}`;
    }