// Ambil data dari Session Storage
const trialData = JSON.parse(sessionStorage.getItem('trials'));

// Tampilkan data pada halaman profil.html
const trialDataDiv = document.querySelector('#trial-data');
if (trialData) {
  let html = '';
  trialData.forEach(function(trial, index) {
    html += `
      <div class="trial">
        <p><strong>Nama :</strong> ${trial.nama}</p>
        <p><strong>Email:</strong> ${trial.email}</p>
        <p><strong>Kota:</strong> ${trial.kota}</p>
        <p><strong>Gender:</strong> ${trial.gender}</p>
        <p><strong>Exercise:</strong> ${trial.exercise.join(', ')}</p>
        <p><strong>Alasan:</strong> ${trial.teks}</p>
      </div>
    `;
  });
  trialDataDiv.innerHTML = html;
} else {
  trialDataDiv.innerHTML = '<p>Tidak ada data trial.</p>';
}

function logout() {
    // hapus informasi login dari session storage atau cookie
    sessionStorage.removeItem('user');
    alert('Berhasil Logout')
    // arahkan pengguna kembali ke halaman login
    window.location.href = 'login.html';
  }
  

