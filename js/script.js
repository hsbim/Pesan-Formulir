const botToken = "7245398089:AAHnrMWcYWnxTo80sYwsFHBK8DyMiKFEN3o"; // Ganti dengan Token Bot Anda
const chatId = "-1002271709847"; // Ganti dengan ID Grup Telegram Anda

document.getElementById("form-telegram").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Mengambil data formulir
  const username = document.getElementById("Username").value;
  const email = document.getElementById("Email").value;
  const message = document.getElementById("Message").value;

  // Membuat pesan yang akan dikirim
  const text = `Nama: ${username}\nEmail: ${email}\nPesan: ${message}`;
  
  // Membuat URL untuk mengirim pesan ke Telegram
  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;

  // Mengirim permintaan menggunakan Fetch API
  fetch(url)
    .then(response => {
      if (response.ok) {
        alert("Pesan terkirim!");
        document.getElementById("form-telegram").reset(); // Mereset formulir setelah pengiriman
      } else {
        alert("Gagal mengirim pesan.");
      }
    })
    .catch(error => {
      alert("Terjadi kesalahan: " + error.message);
    });
});
