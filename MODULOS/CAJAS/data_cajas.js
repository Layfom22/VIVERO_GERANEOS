import fetchData from '../../BackEnd/fetchData.js';

async function loadTableData() {
  const tableBody = document.querySelector('#data-table tbody');
  const data = await fetchData();

  data.forEach(row => {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td contenteditable="true">${row.cantidad}</td>
      <td contenteditable="true">${row.destino}</td>
      <td contenteditable="true">${row.altura}</td>
      <td contenteditable="true">${row.ancho}</td>
      <td contenteditable="true">${row.largo}</td>
    `;
    tableBody.appendChild(tableRow);
  });
}

