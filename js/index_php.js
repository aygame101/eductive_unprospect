function showConfirmation() {
    var confirmationDiv = document.getElementById("confirmation");
    confirmationDiv.style.display = "block";
}

function deleteTable() {
    var formData = new FormData();
    formData.append('table', 'eductive');

    fetch('../admin/clear_table.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(message => {
        alert(message);
        hideConfirmation();
    })
    .catch(error => {
        console.error(error);
    });
}


function hideConfirmation() {
    var confirmationDiv = document.getElementById("confirmation");
    confirmationDiv.style.display = "none";
}