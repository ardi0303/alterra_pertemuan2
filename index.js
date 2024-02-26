// var name = 'Ardi Saputra';
// var age = 20;
// var univ = 'Universitas Dian Nuswantoro';
// var major = 'Teknik Informatika';

// console.log('%cNama saya ' + name + ', umur saya ' + age + ' tahun, saya kuliah di ' + univ + ' jurusan ' + major + '.', 'color: red; font-size: larger');

var age = 50;

switch (age) {
    case 50:
        console.log('Umur saya 50 tahun');
        break;

    default:
        console.log('Umur saya tidak 50 tahun');
        break;
}

const hitungLuasLingkaran = (r) => {
    const phi = 3.14;
    return phi * r * r;
}

function hitungNilai(nilai, cb){
    if(nilai <= 65){
        cb('tidak lolos');
    } else {
        cb('lolos');
    }
}

hitungNilai(60, (res) => {
    console.log(res);
});