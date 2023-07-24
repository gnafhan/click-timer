const express = require('express');
const fs = require('fs');
const app = express();
const port = 4500;
const crypto = require('crypto')
const path = require('path');;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

function randomLetter() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  
  // Fungsi untuk menghasilkan string huruf acak dengan panjang tertentu
  function generateRandomString(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += randomLetter();
    }
    return result;
  }
  const randomString = generateRandomString(10);
console.log(randomString);
  
// console.log(`/${id()}`)
// Menyajikan foto kepada pengguna
app.get(`/`, (req, res) => {

    res.render('hello')








    //   // Mendapatkan path foto yang ada di server (misalnya foto.jpg)
//   const photoPath = './6.jpg';

//   // Membaca foto dari server
//   fs.readFile(photoPath, (err, data) => {
//     if (err) {
//       console.error('Gagal membaca foto:', err);
//       return res.status(500).send('Foto telah dibuka');
//     }

//     // Menyajikan foto kepada pengguna
//     res.writeHead(200, { 'Content-Type': 'image/jpeg' });
//     res.end(data);

//     // Menghapus foto setelah disajikan kepada pengguna
//     fs.unlink(photoPath, (err) => {
//       if (err) {
//         console.error('Gagal menghapus foto:', err);
//       } else {
//         console.log('Foto berhasil dihapus dari server.');
//       }
//     });
//   });
});

app.listen(port, () => {
  console.log(`Aplikasi berjalan pada http://localhost:${port}`);
});
