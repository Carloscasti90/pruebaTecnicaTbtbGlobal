const busquedaUsuarios = document.getElementById("busquedaUsuarios");
const tablaUsuarios = document.getElementById("tablaUsuarios");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((user) => {
      const row = document.createElement("tr");
      row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.address.city}</td>
          `;
      tablaUsuarios.appendChild(row);
    });
  });

busquedaUsuarios.addEventListener("input", () => {
  const filter = busquedaUsuarios.value.toLowerCase();
  const rows = tablaUsuarios.getElementsByTagName("tr");
  for (const row of rows) {
    const name = row.cells[0].textContent.toLowerCase();
    const email = row.cells[1].textContent.toLowerCase();
    const city = row.cells[2].textContent.toLowerCase();
    if (
      name.includes(filter) ||
      email.includes(filter) ||
      city.includes(filter)
    ) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
});
