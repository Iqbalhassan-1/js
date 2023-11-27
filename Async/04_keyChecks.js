const insertkey = document.getElementById("insert");
window.addEventListener("keydown", (e) => {
  console.log(e);
  insertkey.innerHTML = `
  <div class="">
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>`;
});
