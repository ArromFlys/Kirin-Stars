const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a'); // semua link di nav

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Menutup nav saat salah satu menu diklik
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

// ======= Kirim WhatsApp =======
function kirimWA() {
  const nama = document.getElementById('nama');
  const jasa = document.getElementById('jasa');
  const tambahan = document.getElementById('tambahan'); // optional
  const notes = document.getElementById('notes');

  const namaError = document.getElementById('namaError');
  const jasaError = document.getElementById('jasaError');

  let valid = true;

  // Validasi Nama
  if (nama && nama.value.trim() === "") {
    namaError.textContent = "Nama wajib diisi.";
    valid = false;
  } else {
    namaError.textContent = "";
  }

  // Validasi Jasa
  if (jasa && jasa.value === "") {
    jasaError.textContent = "Pilih salah satu jasa.";
    valid = false;
  } else {
    jasaError.textContent = "";
  }

  if (!valid) return;

  const jasaText = jasa.options[jasa.selectedIndex].text;
  const tambahanText = (tambahan && tambahan.value !== "")
    ? `🎁 Jasa tambahan: ${tambahan.options[tambahan.selectedIndex].text}\n`
    : "";

  const pesan = `Halo, saya ingin memesan jasa edit dari *Kirin Stars*.\n\n` +
    `🧑 Nama: ${nama.value}\n` +
    `🎞️ Jasa utama: ${jasaText}\n` +
    `${tambahanText}` +
    `📝 Catatan tambahan: ${notes.value || "-"}\n\n` +
    `Terima kasih.`;

  const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
  const noWA = "628998023803";

  const url = isMobile
    ? `https://wa.me/${noWA}?text=${encodeURIComponent(pesan)}`
    : `https://web.whatsapp.com/send?phone=${noWA}&text=${encodeURIComponent(pesan)}`;

  window.open(url, '_blank');
}

// ======= Pilih Jasa Otomatis dari Card =======
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const jasa = card.getAttribute('data-jasa');
    const select = document.getElementById('jasa');

    if (select) {
      select.value = jasa;
    }

    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ======= Cegah Enter Submit Ganda =======
const form = document.querySelector('.order-form form');
if (form) {
  // Cegah reload saat submit
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    kirimWA();
  });

  // Cegah enter submit ganda
  form.addEventListener('keydown', function (e) {
    const activeElement = document.activeElement;
    const isTextArea = activeElement.tagName.toLowerCase() === 'textarea';

    if (e.key === 'Enter' && !isTextArea) {
      e.preventDefault();
      form.querySelector('button[type="submit"]').click();
    }
  });
}
  // Counter karakter nama dan notes
  const namaInput = document.getElementById('nama');
  const namaCounter = document.getElementById('namaCounter');
  const notesInput = document.getElementById('notes');
  const notesCounter = document.getElementById('notesCounter');

  namaInput.addEventListener('input', () => {
    namaCounter.textContent = `${namaInput.value.length}/50`;
  });

  notesInput.addEventListener('input', () => {
    notesCounter.textContent = `${notesInput.value.length}/250`;
  });
