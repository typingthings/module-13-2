async function signupFormHandler(event) {
    event.preventDefault();
  
    


    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
  

        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (username && email && password) {
        const response = await fetch('/api/users', {
          method: 'post',
          body: JSON.stringify({
            username,
            email,
            password
      if (response.ok) {
        console.log('success');
      } else {
        alert(response.statusText);
      }
    }
  }

      }
    }
  }
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);