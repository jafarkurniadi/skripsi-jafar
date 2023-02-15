const video = document.querySelector('video');


video.onended = function() {
    document.getElementById("latihanhide").hidden = false;
};
function hal1(){
    document.getElementById("hal1").hidden = false;
    document.getElementById("hal2").hidden = true;
    document.getElementById("hal3").hidden = true;
    document.getElementById("hal4").hidden = true;
    document.getElementById("btnhal1").classList.add('bg-light');
    document.getElementById("btnhal1").classList.remove('text-white');
    document.getElementById("btnhal2").classList.remove('bg-light');
    document.getElementById("btnhal2").classList.add('text-white');
    document.getElementById("btnhal3").classList.remove('bg-light'); 
    document.getElementById("btnhal3").classList.add('text-white');
    document.getElementById("btnhal4").classList.remove('bg-light'); 
    document.getElementById("btnhal4").classList.add('text-white');
}
    
function hal2(){
    document.getElementById("hal1").hidden = true;
    document.getElementById("hal2").hidden = false;
    document.getElementById("hal3").hidden = true; 
    document.getElementById("hal4").hidden = true; 
    document.getElementById("btnhal1").classList.remove('bg-light');
    document.getElementById("btnhal1").classList.add('text-white');
    document.getElementById("btnhal2").classList.add('bg-light');
    document.getElementById("btnhal2").classList.remove('text-white');
    document.getElementById("btnhal3").classList.remove('bg-light'); 
    document.getElementById("btnhal3").classList.add('text-white');
    document.getElementById("btnhal4").classList.remove('bg-light'); 
    document.getElementById("btnhal4").classList.add('text-white');
}
    
function hal3(){
    document.getElementById("hal1").hidden = true;
    document.getElementById("hal2").hidden = true;
    document.getElementById("hal3").hidden = false; 
    document.getElementById("hal4").hidden = true; 
    document.getElementById("btnhal1").classList.remove('bg-light');
    document.getElementById("btnhal1").classList.add('text-white');
    document.getElementById("btnhal2").classList.remove('bg-light');
    document.getElementById("btnhal2").classList.add('text-white');
    document.getElementById("btnhal3").classList.add('bg-light'); 
    document.getElementById("btnhal3").classList.remove('text-white');
    document.getElementById("btnhal4").classList.remove('bg-light');
    document.getElementById("btnhal4").classList.add('text-white');
}

function hal4(){
    document.getElementById("hal1").hidden = true;
    document.getElementById("hal2").hidden = true;
    document.getElementById("hal3").hidden = true; 
    document.getElementById("hal4").hidden = false; 
    document.getElementById("btnhal1").classList.remove('bg-light');
    document.getElementById("btnhal1").classList.add('text-white');
    document.getElementById("btnhal2").classList.remove('bg-light');
    document.getElementById("btnhal2").classList.add('text-white');
    document.getElementById("btnhal3").classList.remove('bg-light');
    document.getElementById("btnhal3").classList.add('text-white');
    document.getElementById("btnhal4").classList.add('bg-light'); 
    document.getElementById("btnhal4").classList.remove('text-white');
}

function satu(){
    document.getElementById("btnnext").classList.remove('disabled'); 
    document.getElementById("btnprev").hidden = true;
    document.getElementById("btnnext").hidden = false;
    document.getElementById("satu").hidden = false;
    document.getElementById("btnsatu").classList.add('active');
    document.getElementById("dua").hidden = true;
    document.getElementById("btndua").classList.remove('active');
    document.getElementById("tiga").hidden = true;
    document.getElementById("btntiga").classList.remove('active');
    document.getElementById("next").setAttribute( "onClick", "javascript: dua();" );
}

function dua(){
    document.getElementById("btnprev").classList.remove('disabled'); 
    document.getElementById("btnnext").classList.remove('disabled'); 
    document.getElementById("btnprev").hidden = false;
    document.getElementById("btnnext").hidden = false;
    document.getElementById("satu").hidden = true;
    document.getElementById("btnsatu").classList.remove('active');
    document.getElementById("dua").hidden = false;
    document.getElementById("btndua").classList.add('active');
    document.getElementById("tiga").hidden = true;
    document.getElementById("btntiga").classList.remove('active');
    document.getElementById("next").setAttribute( "onClick", "javascript: tiga();" );
    document.getElementById("prev").setAttribute( "onClick", "javascript: satu();" );
    document.getElementById("mnext").hidden = true
}

function tiga(){
    document.getElementById("btnprev").classList.remove('disabled'); 
    document.getElementById("btnnext").hidden = true;
    document.getElementById("satu").hidden = true;
    document.getElementById("btnsatu").classList.remove('active');
    document.getElementById("dua").hidden = true;
    document.getElementById("btndua").classList.remove('active');
    document.getElementById("tiga").hidden = false;
    document.getElementById("btntiga").classList.add('active');
    document.getElementById("prev").setAttribute("onClick", "javascript: dua();");
    document.getElementById("mnext").hidden = false;
}

let bt1 = document.getElementById('bt1');
let st1 = document.getElementById('st1');

let bt2 = document.getElementById('bt2');
let st2 = document.getElementById('st2');

let bt3 = document.getElementById('bt3');
let st3 = document.getElementById('st3');

let bt4 = document.getElementById('bt4');
let st4 = document.getElementById('st4');


let btt1 = document.getElementById('btt1');
let stt1 = document.getElementById('stt1');

let btt2 = document.getElementById('btt2');
let stt2 = document.getElementById('stt2');

let btt3 = document.getElementById('btt3');
let stt3 = document.getElementById('stt3');

let btt4 = document.getElementById('btt4');
let stt4 = document.getElementById('stt4');

let btt5 = document.getElementById('btt5');
let stt5 = document.getElementById('stt5');

let btt6 = document.getElementById('btt6');
let stt6 = document.getElementById('stt6');

let btt7 = document.getElementById('btt7');
let stt7 = document.getElementById('stt7');

const benar = '<span style="color : green;">Benar</span>'
const salah = '<span style="color : red;">Salah</span>'

const cekt1 = document.querySelector('.cekt1');
const cekt2 = document.querySelector('.cekt2');
const cekt3 = document.querySelector('.cekt3');
const cekt4 = document.querySelector('.cekt4');

const cektt1 = document.querySelector('.cektt1');
const cektt2 = document.querySelector('.cektt2');
const cektt3 = document.querySelector('.cektt3');
const cektt4 = document.querySelector('.cektt4');
const cektt5 = document.querySelector('.cektt5');
const cektt6 = document.querySelector('.cektt6');
const cektt7 = document.querySelector('.cektt7');

function cekBt1() {
    st1.checked = false;
    bt1.disabled = true;
    st1.disabled = true;
    cekt1.innerHTML = benar;
}
function cekSt1() {
    bt1.checked = false;
    bt1.disabled = true;
    st1.disabled = true;
    cekt1.innerHTML = salah;
}

function cekBt2() {
    st2.checked = false;
    bt2.disabled = true;
    st2.disabled = true;
    cekt2.innerHTML = benar;
}
function cekSt2() {
    bt2.checked = false;
    bt2.disabled = true;
    st2.disabled = true;
    cekt2.innerHTML = salah;
}

function cekBt3() {
    st3.checked = false;
    bt3.disabled = true;
    st3.disabled = true;
    cekt3.innerHTML = benar;
}
function cekSt3() {
    bt3.checked = false;
    bt3.disabled = true;
    st3.disabled = true;
    cekt3.innerHTML = salah;
}

function cekBt4() {
    st4.checked = false;
    bt4.disabled = true;
    st4.disabled = true;
    cekt4.innerHTML = benar;
}
function cekSt4() {
    bt4.checked = false;
    bt4.disabled = true;
    st4.disabled = true;
    cekt4.innerHTML = salah;
}


function cekBtt1() {
    stt1.checked = false;
    btt1.disabled = true;
    stt1.disabled = true;
    cektt1.innerHTML = benar;
}
function cekStt1() {
    btt1.checked = false;
    btt1.disabled = true;
    stt1.disabled = true;
    cektt1.innerHTML = salah;
}

function cekBtt2() {
    stt2.checked = false;
    btt2.disabled = true;
    stt2.disabled = true;
    cektt2.innerHTML = salah;
}
function cekStt2() {
    btt2.checked = false;
    btt2.disabled = true;
    stt2.disabled = true;
    cektt2.innerHTML = benar;
}

function cekBtt3() {
    stt3.checked = false;
    btt3.disabled = true;
    stt3.disabled = true;
    cektt3.innerHTML = salah;
}
function cekStt3() {
    btt3.checked = false;
    btt3.disabled = true;
    stt3.disabled = true;
    cektt3.innerHTML = benar;
}

function cekBtt4() {
    stt4.checked = false;
    btt4.disabled = true;
    stt4.disabled = true;
    cektt4.innerHTML = benar;
}
function cekStt4() {
    btt4.checked = false;
    btt4.disabled = true;
    stt4.disabled = true;
    cektt4.innerHTML = salah;
}

function cekBtt5() {
    stt5.checked = false;
    btt5.disabled = true;
    stt5.disabled = true;
    cektt5.innerHTML = benar;
}
function cekStt5() {
    btt5.checked = false;
    btt5.disabled = true;
    stt5.disabled = true;
    cektt5.innerHTML = salah;
}

function cekBtt6() {
    stt6.checked = false;
    btt6.disabled = true;
    stt6.disabled = true;
    cektt6.innerHTML = benar;
}
function cekStt6() {
    btt6.checked = false;
    btt6.disabled = true;
    stt6.disabled = true;
    cektt6.innerHTML = salah;
}

function cekBtt7() {
    stt7.checked = false;
    btt7.disabled = true;
    stt7.disabled = true;
    cektt7.innerHTML = benar;
}
function cekStt7() {
    btt7.checked = false;
    btt7.disabled = true;
    stt7.disabled = true;
    cektt7.innerHTML = salah;
}

function repeatt1(){
    bt1.disabled = false;
    st1.disabled = false;
    bt2.disabled = false;
    st2.disabled = false;
    bt3.disabled = false;
    st3.disabled = false;
    bt4.disabled = false;
    st4.disabled = false;
    bt1.checked = false;
    st1.checked = false;
    bt2.checked = false;
    st2.checked = false;
    bt3.checked = false;
    st3.checked = false;
    bt4.checked = false;
    st4.checked = false;
    cekt1.innerHTML = " ";
    cekt2.innerHTML = " ";
    cekt3.innerHTML = " ";
    cekt4.innerHTML = " ";
}

function repeatt4(){
    btt1.disabled = false;
    stt1.disabled = false;
    btt2.disabled = false;
    stt2.disabled = false;
    btt3.disabled = false;
    stt3.disabled = false;
    btt4.disabled = false;
    stt4.disabled = false;
    btt5.disabled = false;
    stt5.disabled = false;
    btt6.disabled = false;
    stt6.disabled = false;
    btt7.disabled = false;
    stt7.disabled = false;
    btt1.checked = false;
    stt1.checked = false;
    btt2.checked = false;
    stt2.checked = false;
    btt3.checked = false;
    stt3.checked = false;
    btt4.checked = false;
    stt4.checked = false;
    btt5.checked = false;
    stt5.checked = false;
    btt6.checked = false;
    stt6.checked = false;
    btt7.checked = false;
    stt7.checked = false;
    cektt1.innerHTML = " ";
    cektt2.innerHTML = " ";
    cektt3.innerHTML = " ";
    cektt4.innerHTML = " ";
    cektt5.innerHTML = " ";
    cektt6.innerHTML = " ";
    cektt7.innerHTML = " ";
}

function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');

let bb1 = document.getElementById('bb1');
let bb2 = document.getElementById('bb2');
let bb3 = document.getElementById('bb3');


function cek1(){
    if ((b1.innerText == 'memantul')&&(b2.innerText == 'terlihat')&&(b3.innerText == 'dipantulkan')) {
        const jawabcek1 = document.getElementById('jawabcek1');
        jawabcek1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Ketika laser dinyalakan dan diarahkan menuju penggaris, cahaya laser akan terlihat <span class="benar">memantul</span> begitu juga saat kita keluar ruangan dengan membawa cermin yang diarahkan ke tembok, maka cahaya matahari akan <span class="benar">terlihat</span> di tembok. Dari kegiatan tersebut maka dapat disimpulkan bahwa cahaya memiliki sifat dapat <span class="benar">dipantulkan</span>.
                            </div>`;  
    } else {
        const jawabcek1 = document.getElementById('jawabcek1');
        jawabcek1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan ulangi dan coba jawab lagi
                            </div>`; 
    }
    const kterlihat = document.getElementById('kterlihat');
    const kmemantul = document.getElementById('kmemantul');
    const kdipantulkan = document.getElementById('kdipantulkan');
    const kmembias = document.getElementById('kmembias');
    const kdibiaskan = document.getElementById('kdibiaskan');
    const kcerminan = document.getElementById('kcerminan');
    kterlihat.draggable = false;
    kmemantul.draggable = false;
    kdipantulkan.draggable = false;
    kmembias.draggable = false;
    kcerminan.draggable = false;
    kdibiaskan.draggable = false;
}

function repeatt2(){
    const kterlihat = document.getElementById('kterlihat');
    const kmemantul = document.getElementById('kmemantul');
    const kdipantulkan = document.getElementById('kdipantulkan');
    const kmembias = document.getElementById('kmembias');
    const kdibiaskan = document.getElementById('kdibiaskan');
    const kcerminan = document.getElementById('kcerminan');
    kterlihat.draggable = true;
    kmemantul.draggable = true;
    kdipantulkan.draggable = true;
    kmembias.draggable = true;
    kcerminan.draggable = true;
    kdibiaskan.draggable = true;
    const jawabcek1 = document.getElementById('jawabcek1');
    jawabcek1.innerHTML = "";
    b1.innerText = '';
    b2.innerText = '';
    b3.innerText = '';
    const pilihan1 = document.getElementById('pilihan1');
    pilihan1.innerHTML = `<span id="kterlihat" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">terlihat</span>
    <span id="kdibiaskan" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">dibiaskan</span>
    <span id="kmemantul" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">memantul</span>
    <span id="kcerminan" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">cerminan</span>
    <span id="kmembias" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">membias</span>
    <span id="kdipantulkan" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">dipantulkan</span>`
}



function cekk1(){
    if ((bb1.innerText == 'bengkok')&&(bb2.innerText == 'lurus')&&(bb3.innerText == 'dibiaskan')) {
        const jawabcekk1 = document.getElementById('jawabcekk1');
        jawabcekk1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan3">
                            <u>Pembahasan :</u>
                            </div>
                            Ketika pensil dimasukkan ke dalam gelas bening yang berisi air, maka pensil tersebut akan terlihat <span class="benar">bengkok</span>. Sebaliknya ketika pensil dimasukkan ke dalam gelas bening yang kosong maka akan terlihat <span class="benar">lurus</span>. Dari kegiatan tersebut maka dapat disimpulkan bahwa cahaya memiliki sifat dapat <span class="benar">dibiaskan</span>.
                            </div>`;  
    } else {
        const jawabcekk1 = document.getElementById('jawabcekk1');
        jawabcekk1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan3">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan ulangi dan coba jawab lagi
                            </div>`; 
    }
    const kkterlihat = document.getElementById('kkterlihat');
    const kkdibiaskan = document.getElementById('kkdibiaskan');
    const kkmemantul = document.getElementById('kkdipantulkan');
    const kbengkok = document.getElementById('kbengkok');
    const klurus = document.getElementById('klurus');
    const kkdipantulkan = document.getElementById('kkdipantulkan');
    kkterlihat.draggable = false;
    kkmemantul.draggable = false;
    kkdipantulkan.draggable = false;
    kbengkok.draggable = false;
    klurus.draggable = false;
    kkdibiaskan.draggable = false;
}

function repeatt22(){
    const kkterlihat = document.getElementById('kkterlihat');
    const kkmemantul = document.getElementById('kkmemantul');
    const kkdipantulkan = document.getElementById('kkdipantulkan');
    const kbengkok = document.getElementById('kbengkok');
    const kkdibiaskan = document.getElementById('kkdibiaskan');
    const klurus = document.getElementById('klurus');
    kkterlihat.draggable = true;
    kkmemantul.draggable = true;
    kkdipantulkan.draggable = true;
    kbengkok.draggable = true;
    klurus.draggable = true;
    kkdibiaskan.draggable = true;
    const jawabcekk1 = document.getElementById('jawabcekk1');
    jawabcekk1.innerHTML = "";
    bb1.innerText = '';
    bb2.innerText = '';
    bb3.innerText = '';
    const pilihan2 = document.getElementById('pilihan2');
    pilihan2.innerHTML = `<span id="kkterlihat" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">terlihat</span>
    <span id="kkdibiaskan" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">dibiaskan</span>
    <span id="kkmemantul" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">memantul</span>
    <span id="klurus" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">lurus</span>
    <span id="kbengkok" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">bengkok</span>
    <span id="kkdipantulkan" class="badge bg-primary m-1 bahan" draggable="true" ondragstart="drag(event)">dipantulkan</span>`
}

