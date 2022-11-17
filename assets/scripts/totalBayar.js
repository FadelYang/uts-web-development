
function hitung() {
    let a = document.getElementById('popcorn');
    let b = document.getElementById('bread');
    let c = document.getElementById('softdrink');
    let d = document.getElementById('tea');
    let jumlahTiket = parseInt(document.getElementById('input-jumlah-tiket')).number

    let total = 0;

    if (a.checked == true) {
        total = total + 10000
    }

    if (b.checked == true) {
        total = total + 10000
    }

    if (c.checked == true) {
        total = total + 5000
    }

    if (d.checked == true) {
        total = total + 5000
    }

    total = total + (jumlahTiket * 35000)

    document.getElementById(total-bayar).innerHTML = total
}