document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
  
    // Dummy user for demo (can extend with localStorage)
    if (username === "admin" && password === "admin123") {
      document.getElementById('loginMessage').textContent = "Login successful!";
      document.getElementById('loginMessage').style.color = "green";
    } else {
      document.getElementById('loginMessage').textContent = "Invalid credentials.";
      document.getElementById('loginMessage').style.color = "red";
    }
  });
  