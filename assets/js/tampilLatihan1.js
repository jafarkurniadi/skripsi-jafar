// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         var data = JSON.parse(xhttp.responseText);
// data.forEach(function(element){
//     document.getElementById("soal1").innerHTML += element.idSoal + " " + element.butirSoal;
//     data.opsiJawaban.forEach(function(index){

//     document.getElementById("opsi").innerHTML += index.opsi ;})
    
// })
//     }
// }
// xhttp.open("GET", "../datasoal/latihan1.json", true);
// xhttp.send();

fetch("../datasoal/latihan1.json")
.then(response=>{
    return response.json();
})
.then(data=>{
    for (let index in data){
        const soal = document.createElement("div");
        soal.innerText = data[index].idSoal + " " + data[index].butirSoal;
        document.getElementById("soal").appendChild(soal); 
        for (let i in data.opsiJawaban) {
            
            
            const opsi = document.createElement("div");
            opsi.innerText = opsiJawaban[i].poin + " " + opsiJawaban[i].opsi
            document.getElementById("opsi").appendChild(opsi);
        }
    }
})