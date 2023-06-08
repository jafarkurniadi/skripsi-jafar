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
  
  let idnya = [];
  
  let kuisnya = document.getElementById('kuis');
  
  
  let tmp = document.querySelector('.disini');
  tmp.innerHTML = "";
  kelasnya = document.getElementById('kelas');
  // sekolah = document.getElementById('sekolah');
  let kelasfix = '';
  let sekolahfix = '';
  
  let cek11 = 0;
  // datahasil = kuisnya.value;
  
  let dataSiswas = [];
  
  function mencari() {
      dataSiswas.splice(0, dataSiswas.length);
    
      datahasil = kuisnya.value;
      var task = firebase.database().ref(datahasil);
    
      tmp.innerHTML = "";
      if (kelasnya.value == "1") {
        kelasfix = "IV A";
    } else if (kelasnya.value == "2") {
        kelasfix = "IV B";
    }
    
      if (kelasfix != "") {
        const addDataToList = () => {
          return new Promise((resolve, reject) => {
            task.orderByChild("nama").on("child_added", function (data) {
              var taskvalue = data.val();
    
              if (kelasfix == taskvalue.kelas) {
                let dataSiswa = {
                  nama: taskvalue.nama,
                  nisn: taskvalue.nisn === undefined ? 0 : taskvalue.nisn,
                  kelas: taskvalue.kelas,
                  sekolah: taskvalue.sekolah,
                  nilai: taskvalue.nilai,
                  hari: taskvalue.hari,
                  waktu: taskvalue.waktu,
                  tombolHapus: `<button type="button" class="btn btn-outline-danger" onclick ="hapus(${taskvalue.id})">Hapus</button>`,
                };
    
                dataSiswas.push(dataSiswa);
              }
    
              if (cek11 == 0) {
                let ssps = document.querySelector(".center");
                ssps.innerHTML += "";
                ssps.innerHTML += `<button type="button" class="btn btn-danger deleted"><i class="fas fa-user-minus"></i>&nbsp;&nbsp;Hapus Semua Data</button>`;
                cek11 += 1;
    
                let klikkkk = document.querySelector(".deleted");
                klikkkk.addEventListener("click", function () {
                  hapussemua(idnya);
                });
              }
    
              resolve();
            });
          });
        };
    
        addDataToList().then(() => {
          $("#example").dataTable().fnClearTable();
          if (dataSiswas.length != 0) {
            $("#example").dataTable().fnAddData(dataSiswas);
          }
        });
      } else {
        alert("Tentukan filter pencarian!");
      }
    }
  
  window.onload = function () {
      kelasnya = document.getElementById('kelas');
      // sekolah = document.getElementById('sekolah');
      kuis = document.getElementById('kuis');
      kelasnya.value = value = "0";
      // sekolah.value = value = "0";
      // kuis.value = value = "kuis1/";
  }
  
  
  
  function hapus(id) {
      var yakin = confirm("Apakah kamu yakin menghapus data ?");
      if (yakin) {
          deletetask(id);
      } else {
  
      }
  }
  
  function deletetask(id) {
      var task = firebase.database().ref(datahasil + id);
      task.remove();
      tmp.innerHTML = "";
      mencari();
  }
  
  
  function hapussemua(id) {
      var yakin = confirm("Apakah kamu yakin menghapus semua data ?");
      if (yakin) {
          deletesemua(id);
      } else {
  
      }
  }
  
  function deletesemua(id) {
      for (let i = 0; i < id.length; i++) {
          var task = firebase.database().ref(datahasil + id);
          task.remove();
      }
      tmp.innerHTML = "";
      mencari();
  }
  
  
  // download data
  function downloadfile(){
  document.querySelector('.download');
  // download.addEventListener('click', function () {
      var data_type = 'data:application/vnd.ms-excel';
      var table_div = document.getElementById('example');
      var table_html = table_div.outerHTML.replace(/ /g, '%20');
  
      var a = document.createElement('a');
      a.href = data_type + ', ' + table_html;
      a.download = 'exported_table_' + Math.floor((Math.random() * 9999999) + 1000000) + '.xls';
      a.click();
  }
  