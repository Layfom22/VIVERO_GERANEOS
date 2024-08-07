import fetchData from './fetchData.js';

async function loadTableData() {
  const tableBody = document.querySelector('#data-table tbody');
  const data = await fetchData();

  data.forEach(row => {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${row.cantidad}</td>
      <td>${row.destino}</td>
      <td>${row.altura}</td>
      <td>${row.ancho}</td>
      <td>${row.largo}</td>
    `;
    tableBody.appendChild(tableRow);
  });
}

