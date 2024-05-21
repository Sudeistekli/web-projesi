const carousel = new bootstrap.Carousel('#myCarousel')
//slider 
document.getElementById("img1").addEventListener("click", function() {
    window.open("kaleici.html", "_self");
});

document.getElementById("img2").addEventListener("click", function() {
    window.open("legends.html", "_self");
});

document.getElementById("img3").addEventListener("click", function() {
    window.open("konyaalti.html", "_self");
});

document.getElementById("img4").addEventListener("click", function() {
    window.open("piyaz.html", "_self");
});

//slider bitiş

//APİ 
var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.collectapi.com/imdb/imdbSearchByName?query=inception");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("authorization", "apikey your_token");

xhr.send(data);

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      const responseData = JSON.parse(this.responseText);
      // Şimdi, responseData değişkeninde API'den gelen veriler bulunmaktadır.
    }
  });

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      const responseData = JSON.parse(this.responseText);
      const books = responseData.results; // Örneğin, API'den gelen verilerin içindeki kitap bilgilerini bir diziye kaydediyoruz.
      // Şimdi, books dizisini kullanarak kitap bilgilerini göstermek için gerekli kodları yazabilirsiniz.
    }
  });

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      const responseData = JSON.parse(this.responseText);
      const books = responseData.results;
      const bookListElement = document.getElementById("book-list"); // Kitap bilgilerini göstermek için bir HTML elementi seçiyoruz.
      books.forEach((book) => {
        const bookElement = document.createElement("div");
        bookElement.textContent = book.title; // Kitap başlığını gösteriyoruz.
        bookListElement.appendChild(bookElement); // Kitap bilgilerini HTML elementine ekliyoruz.
      });
    }
  });

  //APİ bitiş

//İletişim 
  function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }
  
  document.querySelector(".contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
  
    clearForm();
  });

  function saveToFile() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = `Adınız: ${name}\nE-posta: ${email}\nMesajınız: ${message}`;

    const blob = new Blob([data], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'contact.txt';

    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(url);
}
//iletişim bitiş
