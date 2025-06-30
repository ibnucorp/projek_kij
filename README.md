# 🔐 AES Password Encryptor/Decryptor

Aplikasi web sederhana untuk mengenkripsi dan mendekripsi password menggunakan algoritma AES-256 (Advanced Encryption Standard) secara client-side. Dibangun dengan JavaScript dan library CryptoJS.

## 📌 Tentang AES
AES (Advanced Encryption Standard) adalah standar enkripsi yang diakui secara global dan digunakan oleh pemerintah & perusahaan keamanan.
Fitur utama:
- Enkripsi/dekripsi menggunakan kunci yang sama
- Menggunakan blok cipher 256-bit (tingkat keamanan tinggi)
- Proses cepat dan efisien di perangkat klien

## 🚀 Cara Menggunakan
1. **Enkripsi Password**:
   - Masukkan master key (kunci rahasia)
   - Masukkan password yang ingin dienkripsi
   - Klik "Encrypt"
   - Salin hasil enkripsi (ciphertext)

2. **Dekripsi Password**:
   - Masukkan master key yang sama
   - Tempel ciphertext yang dienkripsi
   - Klik "Decrypt"
   - Password asli akan ditampilkan

⚠️ **Penting**:
- Simpan master key dengan aman! Tanpa kunci ini, data tidak bisa didekripsi
- Aplikasi ini berjalan 100% di browser - data tidak dikirim ke server manapun
- Refresh halaman akan menghapus semua data dari memori

## 🛠️ Teknologi
- HTML5, Tailwind CSS
- JavaScript ES6
- [CryptoJS](https://github.com/brix/crypto-js) (Library enkripsi)


---
