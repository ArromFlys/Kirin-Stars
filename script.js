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
  const nama = document.getElementById('nama').value;
  const jasa = document.getElementById('jasa').value;
  const notes = document.getElementById('notes').value;

  const nomorTujuan = '6289998023803'; // Ganti dengan nomor WhatsApp kamu (format internasional, tanpa +)

  const pesan = `Halo admin Kirin Stars!%0ASaya ingin memesan:%0A- Nama: ${nama}%0A- Jasa: ${jasa}%0A- Catatan: ${notes}`;

  const urlWA = `https://wa.me/${nomorTujuan}?text=${pesan}`;

  window.open(urlWA, '_blank'); // buka di tab baru
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