document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const dateInput = document.getElementById('date');
    const message = document.getElementById('message');

    message.style.color = 'red';
    message.textContent = '';

    const nameValue = nameInput.value.trim();

    if (nameValue === "") {
        message.textContent = "Name cannot be empty.";
        nameInput.focus();
        return;
    }

    for (let i = 0; i < nameValue.length; i++) {
        if (!isNaN(nameValue[i]) && nameValue[i] !== " ") {
            message.textContent = "Name must contain letters only (no numbers).";
            nameInput.focus();
            return;
        }
    }

    const phoneValue = phoneInput.value.trim();

    for (let i = 0; i < phoneValue.length; i++) {
        if (isNaN(phoneValue[i])) {
            message.textContent = "Phone number must contain digits only.";
            phoneInput.focus();
            return;
        }
    }

    if (phoneValue.length < 8 || phoneValue.length > 15) {
        message.textContent = "Phone number must be between 8 and 15 digits.";
        phoneInput.focus();
        return;
    }

    const emailValue = emailInput.value.trim();

    if (!emailValue.includes("@") || !emailValue.includes(".")) {
        message.textContent = "Email must contain '@' and a dot.";
        emailInput.focus();
        return;
    }

    const selectedDate = new Date(dateInput.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!dateInput.value || selectedDate < today) {
        message.textContent = "Please select a valid date (today or a future date).";
        dateInput.focus();
        return;
    }

    message.style.color = 'green';
    message.textContent = "Reservation confirmed successfully!";

    this.reset();
});