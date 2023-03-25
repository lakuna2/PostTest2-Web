// Mendapatkan data dari form
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  //   const nama = document.querySelector('#nama').value;
  const nama = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const kota = document.querySelector('#city').value;
  const gender = document.querySelector('input[name="gender"]:checked').id;
  const teks = document.querySelector('#teks').value;
  const exercise = [];
  document.querySelectorAll('input[name="exercise"]:checked').forEach(function(checkbox) {
    exercise.push(checkbox.value);
  });


  // Menyimpan data ke session storage
  const trial = {
    nama: nama,
    email: email,
    kota: kota,
    gender: gender,
    exercise: exercise,
    teks: teks
  };

  const trialArray = JSON.parse(sessionStorage.getItem('trials')) || [];
  trialArray.push(trial);
  sessionStorage.setItem('trials', JSON.stringify(trialArray));

  // Redirect ke halaman lain
  alert('Pendaftaran berhasil!')
  window.location.href = 'redeem.html';
});


