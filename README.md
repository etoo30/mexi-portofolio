# meximlians — Personal Portfolio

Website portofolio satu halaman untuk Mexi Milianus. Dibangun dengan HTML5, Tailwind CSS CDN, custom CSS, dan vanilla JavaScript.

## Menjalankan

Buka `index.html` langsung di browser, atau jalankan server statis sederhana dari folder project, misalnya `python3 -m http.server 8000`, lalu buka `http://localhost:8000`.

Tailwind dan font DM Sans/Playfair Display dimuat dari CDN, jadi koneksi internet diperlukan untuk memakai keduanya. Layout tetap memiliki fallback font dan custom CSS.

## Mengganti foto

Ganti file berikut dengan gambar dokumentasi milik Mexi, pertahankan nama file dan rasio yang disarankan:

- `assets/images/profile.jpg` — portrait 4:5.
- `assets/images/achievement-01.jpg`
- `assets/images/achievement-02.jpg`
- `assets/images/achievement-03.jpg`
- `assets/images/iwood-product.jpg` — foto produk utama I WOOD.
- `assets/images/iwood-team.jpg` — foto tim kecil yang ditumpuk di kanan bawah foto produk.

`profile.jpg` menampilkan potret ilustrasi yang tersedia. Foto produk I WOOD menjadi gambar utama pada bagian proyek. Foto tim booth lama tampil sebagai inset kecil di kanan bawah. Tiga foto dokumentasi dipasang di galeri. Jika menggantinya, pertahankan nama file; galeri memakai crop responsif dan lightbox menampilkan file penuh. Sesuaikan alt text dan caption pada `index.html` jika konteks masing-masing dokumentasi telah diketahui.

## Deploy

Hosting tidak diperlukan. Project dapat dibuka langsung melalui `index.html`; jika nanti ingin dipublikasikan, file statis ini dapat diunggah ke layanan hosting pilihan pemilik.
