alert('Selamat Datang di Website Kami');

let nama = prompt("Masukkan Nama: ")
document.getElementById("nama").innerHTML = nama;

function checkForm(){
	var nama = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;

	if(nama == "" || email == "" || phone == ""){
		alert("Form Tidak Toleh Kosong");
	}
	else{
		alert("Pesan Anda telah Terkirim");
	}
}