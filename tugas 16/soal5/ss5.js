let kodeUnixRandom = [12,78,42,40,36,2,8,96,66,20,91,85,41,69,38,77,97,60,15,57];

let sum = kodeUnixRandom.reduce((accumulator, currentValue) => accumulator + currentValue);

let output = sum / kodeUnixRandom.length;

console.log(output);
// sudah sesuai perintah di soal tapi output nya gk sama