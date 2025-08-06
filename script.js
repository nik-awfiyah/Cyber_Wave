// script.js

// ========== LOGIN LOGIC ==========
if (window.location.pathname.includes('login.html')) {
  const loginForm = document.getElementById('loginForm');
  const message = document.getElementById('message');

  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded admin credentials
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('isAdminLoggedIn', 'true');
      window.location.href = 'dashboard.html';
    } else {
      message.textContent = 'Username atau password salah.';
    }
  });
}

// ========== DASHBOARD LOGIC ==========
if (window.location.pathname.includes('dashboard.html')) {
  // Check login
  if (localStorage.getItem('isAdminLoggedIn') !== 'true') {
    alert('Sila login dahulu.');
    window.location.href = 'login.html';
  }

  // Logout
  const logoutBtn = document.getElementById('logoutBtn');
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('isAdminLoggedIn');
    window.location.href = 'login.html';
  });

  // Dummy booking data (boleh sambung dari backend nanti)
  const bookings = [
    { student: 'Ali', subject: 'Math', date: '2025-08-10', status: 'Pending' },
    { student: 'Aisyah', subject: 'Science', date: '2025-08-12', status: 'Confirmed' },
  ];

  const bookingList = document.getElementById('bookingList');

  bookings.forEach(booking => {
    const li = document.createElement('li');
    li.textContent = `${booking.student} - ${booking.subject} (${booking.date}) - ${booking.status}`;
    bookingList.appendChild(li);
  });
}
