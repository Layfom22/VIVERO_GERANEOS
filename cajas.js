document.addEventListener('DOMContentLoaded', (event) => {
    const dateField = document.getElementById('date');
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    dateField.value = formattedDate;

    const addRowButton = document.getElementById('addRow');
    const addBultoButton = document.getElementById('addBulto');

    addRowButton.addEventListener('click', () => {
        const tableBody = document.querySelector('table tbody');
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
           <td contenteditable="true" oninput="validateNumberInput(this)"></td>
            <td contenteditable="true"></td>
           <td contenteditable="true" oninput="validateNumberInput(this)"></td>
            <td contenteditable="true" oninput="validateNumberInput(this)"></td>
           <td contenteditable="true" oninput="validateNumberInput(this)"></td>
            <td contenteditable="true">${formattedDate}</td>
            <td><img src="assets.img/icons8-eliminar-16 (1).png"  alt="Eliminar" onclick="deleteRow(this)"></td>
        `;
        tableBody.appendChild(newRow);

        
        document.querySelector('.date-reg-header').classList.remove('hidden');
    });

    addBultoButton.addEventListener('click', () => {
        const tableBody = document.querySelector('table tbody');
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td contenteditable="true" oninput="validateNumberInput(this)"></td>
            <td contenteditable="true"></td>
            <td contenteditable="false">BULTO</td>
            <td contenteditable="false">BULTO</td>
            <td contenteditable="false">BULTO</td>
            <td contenteditable="true">${formattedDate}</td>
            <td><img src="assets.img/icons8-eliminar-16 (1).png"  alt="Eliminar" onclick="deleteRow(this)"></td>
        `;
        tableBody.appendChild(newRow);

        
        document.querySelector('.date-reg-header').classList.remove('hidden');
    });

    document.addEventListener('focusout', (e) => {
        const cell = e.target;
        if (cell.cellIndex >= 2 && cell.cellIndex <= 4 && cell.isContentEditable) {
            if (!cell.textContent.trim().endsWith(" cm") && cell.textContent.trim() !== "BULTO") {
                cell.textContent = cell.textContent.trim() + " cm";
            }
        }
    });

    const aplicacionBtn = document.getElementById('aplicacionBtn');
    aplicacionBtn.addEventListener('click', () => {
        alert('BOTÓN APLICACIÓN PRESIONADO');
    });

    const matchBtn = document.getElementById('matchBtn');
    matchBtn.addEventListener('click', () => {
        alert('BOTÓN MATCH PRESIONADO');
    });
});

function validateNumberInput(cell) {
    cell.textContent = cell.textContent.replace(/[^0-9]/g, '');
}


function deleteRow(element) {
    const row = element.parentNode.parentNode;
    row.parentNode.removeChild(row);

    
    const tableBody = document.querySelector('table tbody');
    if (!tableBody.hasChildNodes()) {
        document.querySelector('.date-reg-header').classList.add('hidden');
    }
}