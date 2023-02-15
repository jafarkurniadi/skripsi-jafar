function mlat1_1(){
    document.getElementById("soalNext").hidden = false;
    document.getElementById("soalPrev").hidden = true;
    document.getElementById("soal1").hidden = false;
    document.getElementById("soal2").hidden = true;
    document.getElementById("soal3").hidden = true;
    document.getElementById("soal4").hidden = true;
    document.getElementById("soal5").hidden = true;
    document.getElementById("bsoal1").classList.add('active');
    document.getElementById("bsoal2").classList.remove('active');
    document.getElementById("bsoal3").classList.remove('active');
    document.getElementById("bsoal4").classList.remove('active');
    document.getElementById("bsoal5").classList.remove('active');
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: mlat1_2();");
}

function mlat1_2(){
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("soal1").hidden = true;
    document.getElementById("soal2").hidden = false;
    document.getElementById("soal3").hidden = true;
    document.getElementById("soal4").hidden = true;
    document.getElementById("soal5").hidden = true;
    document.getElementById("bsoal1").classList.remove('active');
    document.getElementById("bsoal2").classList.add('active');
    document.getElementById("bsoal3").classList.remove('active');
    document.getElementById("bsoal4").classList.remove('active');
    document.getElementById("bsoal5").classList.remove('active');
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: mlat1_1();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: mlat1_3();" );
}

function mlat1_3(){
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("soal1").hidden = true;
    document.getElementById("soal2").hidden = true;
    document.getElementById("soal3").hidden = false;
    document.getElementById("soal4").hidden = true;
    document.getElementById("soal5").hidden = true;
    document.getElementById("bsoal1").classList.remove('active');
    document.getElementById("bsoal2").classList.remove('active');
    document.getElementById("bsoal3").classList.add('active');
    document.getElementById("bsoal4").classList.remove('active');
    document.getElementById("bsoal5").classList.remove('active');
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: mlat1_2();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: mlat1_4();" );
}

function mlat1_4(){
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("soal1").hidden = true;
    document.getElementById("soal2").hidden = true;
    document.getElementById("soal3").hidden = true;
    document.getElementById("soal4").hidden = false;
    document.getElementById("soal5").hidden = true;
    document.getElementById("bsoal1").classList.remove('active');
    document.getElementById("bsoal2").classList.remove('active');
    document.getElementById("bsoal3").classList.remove('active');
    document.getElementById("bsoal4").classList.add('active');
    document.getElementById("bsoal5").classList.remove('active');
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: mlat1_3();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: mlat1_5();" );
}

function mlat1_5(){
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = true;
    document.getElementById("soal1").hidden = true;
    document.getElementById("soal2").hidden = true;
    document.getElementById("soal3").hidden = true;
    document.getElementById("soal4").hidden = true;
    document.getElementById("soal5").hidden = false;
    document.getElementById("bsoal1").classList.remove('active');
    document.getElementById("bsoal2").classList.remove('active');
    document.getElementById("bsoal3").classList.remove('active');
    document.getElementById("bsoal4").classList.remove('active');
    document.getElementById("bsoal5").classList.add('active');
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: mlat1_4();");
}

let tuntas = 0;

var jwblat1_1 = '';
function cekjwb1_1(pilih){
    jwblat1_1 = pilih;
}

const lat1_1A = document.getElementById('jlat1_1A');
const lat1_1B = document.getElementById('jlat1_1B');
const lat1_1C = document.getElementById('jlat1_1C');
const lat1_1D = document.getElementById('jlat1_1D');
const lat1_1 = document.getElementById('lat1_1');

function ceklat1_1(jwb){
    lat1_1A.disabled = true;
    lat1_1B.disabled = true;
    lat1_1C.disabled = true;
    lat1_1D.disabled = true;
    if (jwblat1_1 === jwb){
        lat1_1.innerHTML = `<div class="pembahasan mb-3 me-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            
                            </div>`;
    } else {
        lat1_1.innerHTML = `<div class="pembahasan mb-3 me-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
    }

    tuntas += 1;
    if (tuntas === 5) {
        $('#ModalLanjut').modal('show')
    }
}

function repeat1_1(){
    tuntas -= 1;
    lat1_1A.disabled = false;
    lat1_1B.disabled = false;
    lat1_1C.disabled = false;
    lat1_1D.disabled = false;
    lat1_1A.checked = false;
    lat1_1B.checked = false;
    lat1_1C.checked = false;
    lat1_1D.checked = false;
    lat1_1.innerHTML = "";
}

var jwblat1_2 = '';
function cekjwb1_2(pilih){
    jwblat1_2 = pilih;
}

const lat1_2A = document.getElementById('jlat1_2A');
const lat1_2B = document.getElementById('jlat1_2B');
const lat1_2C = document.getElementById('jlat1_2C');
const lat1_2D = document.getElementById('jlat1_2D');
const lat1_2 = document.getElementById('lat1_2');

function ceklat1_2(jwb){
    lat1_2A.disabled = true;
    lat1_2B.disabled = true;
    lat1_2C.disabled = true;
    lat1_2D.disabled = true;
    if (jwblat1_2 === jwb){
        lat1_2.innerHTML = `<div class="pembahasan mb-3 me-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            
                            </div>`;
    } else {
        lat1_2.innerHTML = `<div class="pembahasan mb-3 me-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
    }

    tuntas += 1;
    if (tuntas === 5) {
        $('#ModalLanjut').modal('show')
    }
}

function repeat1_2(){
    tuntas -= 1;
    lat1_2A.disabled = false;
    lat1_2B.disabled = false;
    lat1_2C.disabled = false;
    lat1_2D.disabled = false;
    lat1_2A.checked = false;
    lat1_2B.checked = false;
    lat1_2C.checked = false;
    lat1_2D.checked = false;
    lat1_2.innerHTML = "";
}

var jwblat1_3 = '';
function cekjwb1_3(pilih){
    jwblat1_3 = pilih;
}

const lat1_3A = document.getElementById('jlat1_3A');
const lat1_3B = document.getElementById('jlat1_3B');
const lat1_3C = document.getElementById('jlat1_3C');
const lat1_3D = document.getElementById('jlat1_3D');
const lat1_3 = document.getElementById('lat1_3');

function ceklat1_3(jwb){
    lat1_3A.disabled = true;
    lat1_3B.disabled = true;
    lat1_3C.disabled = true;
    lat1_3D.disabled = true;
    if (jwblat1_3 === jwb){
        lat1_3.innerHTML = `<div class="pembahasan mb-3 me-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            
                            </div>`;
    } else {
        lat1_3.innerHTML = `<div class="pembahasan mb-3 me-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
    }

    tuntas += 1;
    if (tuntas === 5) {
        $('#ModalLanjut').modal('show')
    }
}

function repeat1_3(){
    tuntas -= 1;
    lat1_3A.disabled = false;
    lat1_3B.disabled = false;
    lat1_3C.disabled = false;
    lat1_3D.disabled = false;
    lat1_3A.checked = false;
    lat1_3B.checked = false;
    lat1_3C.checked = false;
    lat1_3D.checked = false;
    lat1_3.innerHTML = "";
}

var jwblat1_4 = '';
function cekjwb1_4(pilih){
    jwblat1_4 = pilih;
}

const lat1_4A = document.getElementById('jlat1_4A');
const lat1_4B = document.getElementById('jlat1_4B');
const lat1_4C = document.getElementById('jlat1_4C');
const lat1_4D = document.getElementById('jlat1_4D');
const lat1_4 = document.getElementById('lat1_4');

function ceklat1_4(jwb){
    lat1_4A.disabled = true;
    lat1_4B.disabled = true;
    lat1_4C.disabled = true;
    lat1_4D.disabled = true;
    if (jwblat1_4 === jwb){
        lat1_4.innerHTML = `<div class="pembahasan mb-3 me-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            
                            </div>`;
    } else {
        lat1_4.innerHTML = `<div class="pembahasan mb-3 me-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
    }

    tuntas += 1;
    if (tuntas === 5) {
        $('#ModalLanjut').modal('show')
    }
}

function repeat1_4(){
    tuntas -= 1;
    lat1_4A.disabled = false;
    lat1_4B.disabled = false;
    lat1_4C.disabled = false;
    lat1_4D.disabled = false;
    lat1_4A.checked = false;
    lat1_4B.checked = false;
    lat1_4C.checked = false;
    lat1_4D.checked = false;
    lat1_4.innerHTML = "";
}

var jwblat1_5 = '';
function cekjwb1_5(pilih){
    jwblat1_5 = pilih;
}

const lat1_5A = document.getElementById('jlat1_5A');
const lat1_5B = document.getElementById('jlat1_5B');
const lat1_5C = document.getElementById('jlat1_5C');
const lat1_5D = document.getElementById('jlat1_5D');
const lat1_5 = document.getElementById('lat1_5');

function ceklat1_5(jwb){
    lat1_5A.disabled = true;
    lat1_5B.disabled = true;
    lat1_5C.disabled = true;
    lat1_5D.disabled = true;
    if (jwblat1_5 === jwb){
        lat1_5.innerHTML = `<div class="pembahasan mb-3 me-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            
                            </div>`;
    } else {
        lat1_5.innerHTML = `<div class="pembahasan mb-3 me-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
    }

    tuntas += 1;
    if (tuntas === 5) {
        $('#ModalLanjut').modal('show')
    }
}

function repeat1_5(){
    tuntas -= 1;
    lat1_5A.disabled = false;
    lat1_5B.disabled = false;
    lat1_5C.disabled = false;
    lat1_5D.disabled = false;
    lat1_5A.checked = false;
    lat1_5B.checked = false;
    lat1_5C.checked = false;
    lat1_5D.checked = false;
    lat1_5.innerHTML = "";
}