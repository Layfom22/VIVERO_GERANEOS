import fetchData from "../../BackEnd/fetchData.js";

document.addEventListener("DOMContentLoaded", async () => {
  const tableBody = document.querySelector("#tabla-cajas tbody");
  const data = await fetchData();

  data.forEach((row) => {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
        <td contenteditable="true">${row.cantidad}</td>
        <td contenteditable="true">${row.destino}</td>
        <td contenteditable="true">${row.altura}</td>
        <td contenteditable="true">${row.ancho}</td>
        <td contenteditable="true">${row.largo}</td>
        <td><img src="/assets.img/icons8-eliminar-16 (1).png" class="delete-icon" alt="Eliminar" onclick="deleteRow(this)"></td>
      `;
    tableBody.appendChild(tableRow);
  });
});
