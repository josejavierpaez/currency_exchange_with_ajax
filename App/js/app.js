let dollar = document.querySelector("#dollar");
let euro = document.querySelector("#euro");

dollar.addEventListener("click", function() {
  getData("dolar");
});
euro.addEventListener("click", function() {
  getData("euro");
});

function getData(value) {
  let url = `https://mindicador.cl/api/${value}`;

  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", url, true);
  xhttp.send();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText);
      let content = document.querySelector("#content");
      content.innerHTML = "";

      let counter = 0;
      for (item of data.serie) {
        counter++;
        content.innerHTML += `
        <tr>
            <td>${item.fecha.substring(0, 10)}</td>
            <td>${item.valor}</td>
          </tr>
        `;

        if (counter >= 7) break;
      }
    }
  };
}
