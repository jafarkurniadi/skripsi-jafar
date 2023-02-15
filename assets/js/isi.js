  let petunjuknya = document.querySelectorAll('.petunjuk');
  let isinya = document.querySelectorAll('.isinya');
  for (let i = 0; i < petunjuknya.length; i++) {
        petunjuknya[i].addEventListener('click', function () {
        if (isinya[i].className.indexOf('hilang') == -1) {
              isinya[i].className += ' hilang';
        } else {
              isinya[i].className = isinya[i].className.replace('hilang', '');
        }
        })
  }
  
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var l;
  
  for (l = 0; l < dropdown.length; l++) {
    dropdown[l].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    } else {
    dropdownContent.style.display = "block";
    }
    });
  }