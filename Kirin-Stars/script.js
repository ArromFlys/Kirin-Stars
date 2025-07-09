//<!-- Leaflet JS -->
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha512-bVIqHkPcYFF5HfI7fQDF7n3uEODzAQIC0/ILC1ZQ7RE9dNDJY4nfrRtxZsXh3CdrJ6z1X4jaCDK+6TnXUL0xUg==" crossorigin=""></script>

    // Inisialisasi map
    var map = L.map('map').setView([-6.200000, 106.816666], 13); // Jakarta

    // Gunakan tile dari OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Tambahkan marker (penanda lokasi)
    L.marker([-6.200000, 106.816666]).addTo(map)
        .bindPopup('Hotel Aurora - Jakarta')
        .openPopup();

// Smooth scroll effect
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});