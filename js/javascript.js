function validasi() {
	var nik = document.forms["login"]["nik"].value;
    var nama = document.forms["login"]["nama"].value;
    if ((nik == "1234567890") && (nama == "budi")) {
		return true;
    } else {
		alert("Username atau password yang anda masukkan salah")
        return false;
    }
}

function validasi2() {
	var nama = document.forms["daftar"]["nama"].value;
    var alamat = document.forms["daftar"]["alamat"].value;
	var nik = document.forms["daftar"]["nama"].value;
    var telepon = document.forms["daftar"]["alamat"].value;
	var tempat_lahir = document.forms["daftar"]["nama"].value;
    var tanggal_lahir = document.forms["daftar"]["alamat"].value;
	var kelamin = document.forms["daftar"]["kelamin"].value;
}