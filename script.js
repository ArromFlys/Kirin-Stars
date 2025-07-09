  const navLinks = document.querySelectorAll('#navbar .nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      // Hapus class 'active' dari semua link
      navLinks.forEach(nav => nav.classList.remove('active'));
      // Tambahkan class 'active' hanya ke link yang diklik
      this.classList.add('active');
    })
  });

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

function kirimWA() {
  const nama = document.getElementById('nama');
  const jasa = document.getElementById('jasa');
  const notes = document.getElementById('notes');

  const namaError = document.getElementById('namaError');
  const jasaError = document.getElementById('jasaError');
  const notesError = document.getElementById('notesError');

  let valid = true;

  // Validasi Nama
  if (nama.value.trim() === "") {
    namaError.textContent = "Nama wajib diisi.";
    valid = false;
  } else {
    namaError.textContent = "";
  }

  // Validasi Jasa
  if (jasa.value === "") {
    jasaError.textContent = "Pilih salah satu jasa.";
    valid = false;
  } else {
    jasaError.textContent = "";
  }

  if (!valid) return;

  // Jika valid, kirim ke WhatsApp
  const pesan = `Halo Kirin Stars! Saya ingin memesan:\n\nNama: ${nama.value.trim()}\nJasa: ${jasa.value}\nCatatan: ${notes.value.trim()}`;
  const noWA = "6285337470689";
  const url = `https://wa.me/${noWA}?text=${encodeURIComponent(pesan)}`;
  window.open(url, '_blank');
}

  // Fungsi scroll ke form dan pilih otomatis
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const jasa = card.getAttribute('data-jasa');
      const select = document.getElementById('jasa');

      // Scroll ke form pemesanan
      document.getElementById('order').scrollIntoView({ behavior: 'smooth' });

      // Pilih jasa otomatis
      select.value = jasa;
    });
  });

  // Menangkap event "keydown" pada form
  const form = document.querySelector('.order-form form');
  form.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      const activeElement = document.activeElement;
      const isTextArea = activeElement.tagName.toLowerCase() === 'textarea';

      // Jika yang ditekan Enter bukan di dalam <textarea>, submit form
      if (!isTextArea) {
        e.preventDefault(); // Mencegah submit ganda
        form.querySelector('button[type="submit"]').click();
      }
    }
  });