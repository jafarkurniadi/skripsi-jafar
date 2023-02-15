function cekjwb(){
    let cekk= 0;
    document.getElementById("ba").value = document.getElementById("ba").value.toLowerCase();
    document.getElementById("bb").value = document.getElementById("bb").value.toLowerCase();
    document.getElementById("bc").value = document.getElementById("bc").value.toLowerCase();
    document.getElementById("bd").value = document.getElementById("bd").value.toLowerCase();
    var aaa= document.getElementById("ba").value;
    var aab= document.getElementById("bb").value;
    var aac= document.getElementById("bc").value;
    var aad= document.getElementById("bd").value;
  
    if (aaa == "kacamata") {
      document.getElementById("ba").style="border: 2px solid green";
      cekk += 1;
    } else {
      document.getElementById("ba").style="border: 2px solid red";
    }

    if (aab == "periskop") {
        document.getElementById("bb").style="border: 2px solid green";
        cekk += 1;
      } else {
        document.getElementById("bb").style="border: 2px solid red";
      }
    
      if (aac == "kamera") {
        document.getElementById("bc").style="border: 2px solid green";
        cekk += 1;
      } else {
        document.getElementById("bc").style="border: 2px solid red";
      }

      if (aad == "lup") {
        document.getElementById("bd").style="border: 2px solid green";
        cekk += 1;
      } else {
        document.getElementById("bd").style="border: 2px solid red";
      }

  }
  
  function reset(){
    // document.getElementsByClassName('ini')[0].value = "";
    document.getElementById("ba").value = "";
    document.getElementById("bb").value = "";
    document.getElementById("bc").value = "";
    document.getElementById("bd").value = "";
    document.getElementById("ba").style="border: 0,5 solid";
    document.getElementById("bb").style="border: 0,5 solid";
    document.getElementById("bc").style="border: 0,5 solid";
    document.getElementById("bd").style="border: 0,5 solid";
  }
  
  $('.ini').bind('keyup blur',function(){ 
      var node = $(this);
      node.val(node.val().replace(/[^a-zA-Z\s]/g,'') ); }
  );