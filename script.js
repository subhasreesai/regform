const registrationForm = document.getElementById('registration-form');

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name= document.getElementById('name').value .trim();
    const phone = document.getElementById('phone').value .trim();
    const email = document.getElementById('email').value .trim();
    const password = document.getElementById('password').value .trim();
    const confirmPassword = document.getElementById('confirm-password').value .trim();

    let error = false;
    if (name === '') {
        document.getElementById('name-error').innerText = 'please enter your username';
        error = true;
      } else {
        document.getElementById('name-error').innerText = '';
      }
    if (email === '') {
        document.getElementById('email-error').innerText = 'please enter your Email';
        error = true;
      } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        document.getElementById('email-error').innerText = 'Invalid email format';
        error = true;
      } else {
        document.getElementById('email-error').innerText = '';
      }
    

        if (password === '') {
            document.getElementById('password-error').innerText = 'please enter your password';
            error = true;
          } else if (password.length < 8) {
            document.getElementById('password-error').innerText = 'Password must be at least 8 characters long';
            error = true;
          } else {
            document.getElementById('password-error').innerText = '';
          }
          if (confirmPassword === '') {
            document.getElementById('confirm-password-error').innerText = 'please enter your confirmpassword';
            error = true;
          } else if (password !== confirmPassword) {
            document.getElementById('confirm-password-error').innerText = 'Passwords do not match';
            error = true;
          } else {
            document.getElementById('confirm-password-error').innerText = '';
          }
          if (phone === '') {
            document.getElementById('phone-error').innerText = 'please enter your phone number';
            error = true;
          } else if (!/^\d{10}$/.test(phone)) {
            document.getElementById('phone-error').innerText = 'Invalid phone number format';
            error = true;
        } else {
            document.getElementById('phone-error').innerText = '';
          }
          if (!error) {
            console.log('Form is valid');
            window.location.href = 'home.html';
          }
        });
        
        