function readName(nama){
    return `Hi my name is ${nama}\n`;

}

const mahasiswa = {
    nama : 'Leon',
    umur : 20,
    cetakMhs(){
        return `\nHi, My name is ${this.nama} and I am ${this.umur}`
    },
};

const PI = 3.14;

class Orang{
    constructor(){
        console.log('Object was made');
    }
}

module.exports.readName = readName;
module.exports.PI = PI;
module.exports.mahasiswa = mahasiswa;
module.exports.Orang = Orang;