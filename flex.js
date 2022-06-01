let data = [];
let row = 0,
  rowCount = 0,
  id = 1,
  gender;
var close = document.getElementById("close-btn");
let form1,
  tabledata =
    "<tr class='headings'><th>id</th><th>Name</th><th>Email</th><th>DOB</th><th>Gender</th><th>Password</th><th class='action' >Actions</th></tr>";
let row1;
var btn;
rowCol();

(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      var forms = document.getElementsByClassName("needs-validation");
      var validation = Array.prototype.filter.call(forms, function (form) {
        if (document.getElementById("email").value != "") {
          document.getElementById("email").style.border = "1px solid lightgray";
        }
        document.getElementById("invalid-email").style.display = "none";
        form.classList.remove("was-validated");
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
              form.classList.add("was-validated");
            } else {
              event.preventDefault();
              getData();
              form.classList.remove("was-validated");
            }
            form1 = form;
          },
          false
        );
      });
    },
    false
  );
})();

function formClear() {}
close.addEventListener("click", () => {
  document.getElementById("form-1").reset();
  form1.classList.remove("was-validated");
});
function checkEmail() {
  for (i = 0; i < data.length; i++) {
    if (email == data[i][1]) {
      return false;
    } else {
      return true;
    }
  }
}
function getData() {
  document.getElementById("email").style.border = "1px solid lightgray";
  document.getElementById("invalid-email").style.display = "none";
  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  date = document.getElementById("date").value;
  gender = document.getElementById("gender1").value;
  if (data.length > 0) {
    if (!checkEmail()) {
      document.getElementById("email").style.border = "1px solid red";
      document.getElementById("email").classList.add("error");
      document.getElementById("invalid-email").style.display = "block";
      alert("Email already Exist!");
    } else {
      data.push([name, email, date, gender, password]);
      Insert();
      console.log("1");
    }
  } else {
    data.push([name, email, date, gender, password]);
    Insert();
    console.log("0");
  }
}

function button(row) {
  var btn = document.createElement("input");
  btn.type = "button";
  btn.className = "delete";
  btn.value = "Delete";
  var btn1 = document.createElement("input");
  btn1.type = "button";
  btn1.className = "edit";
  btn1.value = "Edit";
  var cell = row.insertCell(-1);
  cell.appendChild(btn1);
  cell.appendChild(btn);
}
function rowCol() {
  var table = document.getElementById("table-1");
  table.innerHTML = tabledata;
  for (i = 0; i < data.length; i++) {
    row = table.insertRow(i + 1);

    var cell = row.insertCell(-1);
    cell.innerHTML = i + 1;
    for (j = 0; j < 5; j++) {
      cell = row.insertCell(-1);
      cell.innerHTML = data[i][j];
    }
    button(row);
  }
  btn = document.querySelectorAll(".delete");
}
function delbtn() {
  for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
      if (confirm("Are you sure ! You want to delete.")) {
        data.splice(i - 1, 1);
        rowCol();
        delbtn();
      }
    });
  }
}
function Insert() {
  event.preventDefault();
  rowCol();
  delbtn();
  document.getElementById("form-1").reset();
  close.click();
  alert("Data Submitted successfully! Thanks");
}
