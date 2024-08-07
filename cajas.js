document.addEventListener('DOMContentLoaded', (event) => {
    const dateField = document.getElementById('date');
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    dateField.value = formattedDate;

    const addRowButton = document.getElementById('addRow');
    const addBultoButton = document.getElementById('addBulto');
    const deleteIcon = document.getElementById('deleteRow');

    addRowButton.addEventListener('click', () => {
        const tableBody = document.querySelector('table tbody');
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true">${formattedDate}</td> 
        `;
        tableBody.appendChild(newRow);

        
        document.querySelector('.date-reg-header').classList.remove('hidden');
    });

    addBultoButton.addEventListener('click', () => {
        const tableBody = document.querySelector('table tbody');
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="false">BULTO</td>
            <td contenteditable="false">BULTO</td>
            <td contenteditable="false">BULTO</td>
            <td contenteditable="true">${formattedDate}
        `;
        tableBody.appendChild(newRow);

        
        document.querySelector('.date-reg-header').classList.remove('hidden');
     

       
    });

    deleteIcon.addEventListener('click', () => {
        const tableBody = document.querySelector('table tbody');
        if (tableBody.lastChild) {
            tableBody.removeChild(tableBody.lastChild);
        }

        
        if (!tableBody.hasChildNodes()) {
            document.querySelector('.date-reg-header').classList.add('hidden');
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