function abrirTab(evt, tabeName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabeName).style.display = "block";
    evt.currentTarget.className += " active";
}

var rIndex, table = document.getElementById("table");

// Verifica se algum dos campos obrigatorios estao vazios;
function checkEmptyInput() {
    var isEmpty = false,
        fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value;

    if (fname === "") {
        alert("First Name Connot Be Empty");
        isEmpty = true;
    }
    else if (lname === "") {
        alert("Last Name Connot Be Empty");
        isEmpty = true;
    }
    return isEmpty;
}

// add Row
function addHtmlTableRow() {
    // get the table by id
    // create a new row and cells
    // get value from input text
    // set the values into row cell's
    if (!checkEmptyInput()) {
        var newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            fname = document.getElementById("fname").value,
            lname = document.getElementById("lname").value;

        cell1.innerHTML = fname;
        cell2.innerHTML = lname;
        // call the function to set the event to the new row
        selectedRowToInput();
        limparCampos();
    }
}

function limparCampos() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
}

// display selected row data into input text
function selectedRowToInput() {

    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            // get the seected row index
            rIndex = this.rowIndex;
            document.getElementById("fname").value = this.cells[0].innerHTML;
            document.getElementById("lname").value = this.cells[1].innerHTML;
        };
    }
}
selectedRowToInput();


function editHtmlTbleSelectedRow() {
    var fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value;

    if (!checkEmptyInput()) {
        table.rows[rIndex].cells[0].innerHTML = fname;
        table.rows[rIndex].cells[1].innerHTML = lname;
    }
}

function removeSelectedRow() {
    if (rIndex > 0) {
        table.deleteRow(rIndex);
        // clear input text
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
    }

}
