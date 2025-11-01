let counter = 0;

function greet() {
  let nama = document.getElementById("nama").value;
  const umur = 20;
  if (nama === "") {
    alert("Masukkan nama terlebih dahulu!");
    console.log("Nama tidak boleh kosong");
  } else {
    alert("Halo, " + nama + "! Selamat datang!");
    console.log(`Halo, ${nama}! Selamat datang! Anda berumur ${umur} tahun`);
  }
}

function changeBackground() {
  let colors = ["#FFE5E5", "#E5F3FF", "#E5FFE5", "#FFF9E5"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

function increment() {
  counter++;
  updateCounter();
}

function decrement() {
  counter--;
  updateCounter();
}

function reset() {
  counter = 0;
  updateCounter();
}

function updateCounter() {
  document.getElementById("count").textContent = counter;
}
