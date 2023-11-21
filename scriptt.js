// Contoh daftar akun yang disimpan di sisi klien (tidak aman, hanya untuk tujuan demonstrasi)
const userAccounts = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    // Tambahkan akun lain jika diperlukan
];

function attemptLogin() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // Memeriksa apakah kredensial cocok dengan akun yang ada
    const user = userAccounts.find(akun => akun.username === usernameInput && akun.password === passwordInput);

    if (user) {
        alert('Login berhasil!');
        window.location.href = 'akun.html';
        // Redirect atau lakukan tindakan lain setelah login berhasil
    } else {
        alert('Login gagal. Periksa kembali username dan password.');
    }
}

function showAccountInfo() {
    // Menyembunyikan formulir login
    document.querySelector('.login').style.display = 'none';

    // Menampilkan halaman informasi akun
    document.querySelector('.account-info').style.display = 'block';
    document.getElementById('usernamePlaceholder').textContent = currentUser.username;
}

function logout() {
    // Mereset informasi pengguna yang login
    currentUser = null;

    // Menampilkan kembali formulir login
    document.querySelector('.login').style.display = 'block';

    // Menyembunyikan halaman informasi akun
    document.querySelector('.account-info').style.display = 'none';
}