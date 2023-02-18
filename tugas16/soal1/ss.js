let benda = {
    nama : "pensil",
    warna : "merah",
    kegunaan : "menulis",
    deskripsi : function(){
        console.log(`saya punya ${this.nama}, berwarna ${this.warna}, yang biasa ku gunakan untuk ${this.kegunaan}`);
    }
}
let pensil = benda.deskripsi()
console.log(pensil);