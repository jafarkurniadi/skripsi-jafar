function cekjwb(){
    let cekk= 0;
    document.getElementById("aa").value = document.getElementById("aa").value.toLowerCase();
    document.getElementById("ab").value = document.getElementById("ab").value.toLowerCase();
    document.getElementById("ac").value = document.getElementById("ac").value.toLowerCase();
    document.getElementById("ad").value = document.getElementById("ad").value.toLowerCase();
    document.getElementById("ae").value = document.getElementById("ae").value.toLowerCase();
    document.getElementById("af").value = document.getElementById("af").value.toLowerCase();
    document.getElementById("ag").value = document.getElementById("ag").value.toLowerCase();
    document.getElementById("ah").value = document.getElementById("ah").value.toLowerCase();
    var aaa= document.getElementById("aa").value;
    var aab= document.getElementById("ab").value;
    var aac= document.getElementById("ac").value;
    var aad= document.getElementById("ad").value;
    var aae= document.getElementById("ae").value;
    var aaf= document.getElementById("af").value;
    var aag= document.getElementById("ag").value;
    var aah= document.getElementById("ah").value;
  
    if (aaa == "otot mata") {
      document.getElementById("aa").style="border: 2px solid green";
      cekk += 1;
    } else {
      document.getElementById("aa").style="border: 2px solid red";
    }

    if (aab == "iris") {
        document.getElementById("ab").style="border: 2px solid green";
        cekk += 1;
      } else {
        document.getElementById("ab").style="border: 2px solid red";
      }
    
      if (aac == "pupil") {
        document.getElementById("ac").style="border: 2px solid green";
        cekk += 1;
      } else {
        document.getElementById("ac").style="border: 2px solid red";
      }

      if (aad == "sklera") {
        document.getElementById("ad").style="border: 2px solid green";
        cekk += 1;
      } else {
        document.getElementById("ad").style="border: 2px solid red";
      }
      if (aae == "lensa mata") {
        document.getElementById("ae").style="border: 2px solid green";
        cekk += 1;
      } else {
        document.getElementById("ae").style="border: 2px solid red";
      }
      if (aaf == "koroid") {
        document.getElementById("af").style="border: 2px solid green";
        cekk += 1;
      } else {
        document.getElementById("af").style="border: 2px solid red";
      }
      if (aag == "retina") {
        document.getElementById("ag").style="border: 2px solid green";
        cekk += 1;
      } else {
        document.getElementById("ag").style="border: 2px solid red";
      }
      if (aah == "saraf mata") {
        document.getElementById("ah").style="border: 2px solid green";
        cekk += 1;
      } else {
        document.getElementById("ah").style="border: 2px solid red";
      }

    if (cekk == 8) {        
        document.getElementById('ringkas').style.display = 'block';   
        document.getElementsByClassName('deret')[0].style.display='block';         
    } else{        
        document.getElementById('ringkas').style.display = 'none';
        document.getElementsByClassName('deret')[0].style.display='none';        
    }

  }
  
  function reset(){
    // document.getElementsByClassName('ini')[0].value = "";
    document.getElementById("aa").value = "";
    document.getElementById("ab").value = "";
    document.getElementById("ac").value = "";
    document.getElementById("ad").value = "";
    document.getElementById("ae").value = "";
    document.getElementById("af").value = "";
    document.getElementById("ag").value = "";
    document.getElementById("ah").value = "";
    document.getElementById("aa").style="border: 0,5 solid";
    document.getElementById("ab").style="border: 0,5 solid";
    document.getElementById("ac").style="border: 0,5 solid";
    document.getElementById("ad").style="border: 0,5 solid";
    document.getElementById("ae").style="border: 0,5 solid";
    document.getElementById("af").style="border: 0,5 solid";
    document.getElementById("ag").style="border: 0,5 solid";
    document.getElementById("ah").style="border: 0,5 solid";
  }
  
  $('.ini').bind('keyup blur',function(){ 
      var node = $(this);
      node.val(node.val().replace(/[^a-zA-Z\s]/g,'') ); }
  );