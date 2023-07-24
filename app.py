from flask import Flask
from flask import send_file
import os

app = Flask(__name__)

# Nama file foto yang akan digunakan
nama_file_foto = "6.jpg"

# Jalur lengkap ke file foto
jalur_foto = os.path.join("static", nama_file_foto)

# Fungsi untuk menghapus foto setelah diakses
def hapus_foto():
    os.remove(jalur_foto)

# Halaman utama untuk menampilkan foto
@app.route('/')
def tampilkan_foto():
    # Hapus foto saat diakses
    hapus_foto()
    return send_file(jalur_foto, mimetype='image/jpeg')

if __name__ == '__main__':
    app.run()