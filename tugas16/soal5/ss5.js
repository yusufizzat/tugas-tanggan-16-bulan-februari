let kodeUnixRandom = [23, 89,67,29,192,6,2,129,21,872,891,901,70,61,78,62,32,90,90];

let sss = kodeUnixRandom.map(function(x){return x - 50})
                        .map(function(x){return x + kodeUnixRandom.length})
                        .filter(function(x){return x < 20})
                        .reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sss);
// sudah sesuai perintah di soal tapi output nya gk sama