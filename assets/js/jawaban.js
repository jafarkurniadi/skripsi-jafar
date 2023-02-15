var firebaseConfig = {
    apiKey: "AIzaSyAtU_Bse9AcHRp1fL1BPMDIrQ6h0qblh8s",
    authDomain: "cahaya-9044d.firebaseapp.com",
    projectId: "cahaya-9044d",
    storageBucket: "cahaya-9044d.appspot.com",
    messagingSenderId: "959915663912",
    appId: "1:959915663912:web:e2312e34cc6b8e64768b1d",
    measurementId: "G-X0FN8KS36H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

let kmplanId = [];


let kuisnya = document.getElementById('kuis');


let tmp = document.querySelector('.disini');
tmp.innerHTML = "";
kelasnya = document.getElementById('kelas');
sekolah = document.getElementById('sekolah');
let kelasfix = '';
let sekolahfix = '';

let cek11 = 0;
kuisfix = kuisnya.value;


function readlah() {
    kuisfix = kuisnya.value;
    console.log(kuisfix);
    var task = firebase.database().ref(kuisfix);

    tmp.innerHTML = "";
    if (kelasnya.value == "1") {
        kelasfix = "IV A";
    } else if (kelasnya.value == "2") {
        kelasfix = "IV B";
    }
    
    // if (sekolah.value == "1") {
    //   sekolahfix = "UPTD SD Negeri 4 Gunung makmur";
    // }


    let jwbfixx = [];

    let jwb1 = ["d", "c", "b", "a", "d", "c", "b", "a", "d", "c"];
    if (kuisfix == "kuis1/") {
        let hhh = `<tr><td class="table-info  tulis" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < jwb1.length; i++) {
            hhh += `<td class="table-info"> ${jwb1[i]}</td>`;
        }
        hhh += `</tr>`;
        tmp.innerHTML += hhh;
        jwbfixx = jwb1;
    }

    let jwb2 = ["a", "b", "c", "d", "a", "b", "c", "d", "a", "b"];
    if (kuisfix == "kuis2/") {
        let hhh = `<tr><td class="table-info  tulis" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < jwb2.length; i++) {
            hhh += `<td class="table-info"> ${jwb2[i]}</td>`;
        }
        hhh += `</tr>`;
        tmp.innerHTML += hhh;
        jwbfixx = jwb2;
    }

    let jwb3 = ["c", "d", "a", "c", "d", "d", "c", "d", "c", "a"];
    if (kuisfix == "kuis3/") {
        let hhh = `<tr><td class="table-info  tulis" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < jwb3.length; i++) {
            hhh += `<td class="table-info"> ${jwb3[i]}</td>`;
        }
        hhh += `</tr>`;
        tmp.innerHTML += hhh;
        jwbfixx = jwb3;
    }

    let evaluasi = ["d", "c", "b", "a", "d", "d", "c", "a", "b", "c", "d", "a", "a", "b", "c", "d", "c", "d", "d", "c"];
    if (kuisfix == "evaluasi/") {
        let hhh = `<tr><td class="table-info  tulis" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < evaluasi.length; i++) {
            hhh += `<td class="table-info"> ${evaluasi[i]}</td>`;
        }
        hhh += `</tr>`;
        tmp.innerHTML += hhh;
        jwbfixx = evaluasi;
    }

    if (kelasfix != '') {
        task.orderByChild("nama").on("child_added", function (data) {
            // task.on("child_added", function (data) {
            var taskvalue = data.val();

            if (kelasfix == taskvalue.kelas) {
                let mm = '';
                mm = `<tr><td >${taskvalue.nama}</td><td >${taskvalue.nilai}</td>`;
                // console.log(taskvalue.jawabsiswa[0]);


                for (let i = 0; i < jwbfixx.length; i++) {
                    if (taskvalue.jawabsiswa[i] == jwbfixx[i]) {
                        mm += `<td class="benar">${taskvalue.jawabsiswa[i]}</td>`;
                    } else {
                        mm += `<td class="salah">${taskvalue.jawabsiswa[i]}</td>`;
                    }
                }
                mm += `</tr>`;
                tmp.innerHTML += mm;
            }

        });

    } else {
        alert('Tentukan filter pencarian');
    }

}

window.onload = function () {
    kelasnya = document.getElementById('kelas');
    sekolah = document.getElementById('sekolah');
    kuis = document.getElementById('kuis');
    kelasnya.value = value = "0";
    sekolah.value = value = "0";
    // kuis.value = value = "kuis1/";
}

// download data

let download = document.querySelector('.download');
download.addEventListener('click', function () {
    var data_type = 'data:application/vnd.ms-excel';
    var table_div = document.getElementById('table_wrapper');
    var table_html = table_div.outerHTML.replace(/ /g, '%20');

    var a = document.createElement('a');
    a.href = data_type + ', ' + table_html;
    a.download = 'exported_table_' + Math.floor((Math.random() * 9999999) + 1000000) + '.xls';
    a.click();
})