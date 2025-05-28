let xmlDoc = null;

// Cargar el XML al iniciar
window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "books.xml", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      xmlDoc = xhr.responseXML;
    }
  };
  xhr.send();
};

function mostrarTitulo1() {
  if (!xmlDoc) return;
  const titulo = xmlDoc.getElementsByTagName("book")[0]
                ?.getElementsByTagName("title")[0]?.textContent || "No disponible";
  mostrarResultado(`<strong>📘 Título del primer libro:</strong> ${titulo}`);
}

function mostrarTodosTitulos() {
  if (!xmlDoc) return;
  const books = xmlDoc.getElementsByTagName("book");
  let titulos = "";
  for (let i = 0; i < books.length; i++) {
    titulos += `📖 ${books[i].getElementsByTagName("title")[0]?.textContent || "Sin título"}<br>`;
  }
  mostrarResultado(`<strong>Todos los títulos:</strong><br>${titulos}`);
}

function mostrarNumAtributosLibro4() {
  if (!xmlDoc) return;
  const book4 = xmlDoc.getElementsByTagName("book")[3];
  const numAttrs = book4?.attributes?.length || 0;
  mostrarResultado(`<strong>Atributos del cuarto libro:</strong> ${numAttrs}`);
}

function mostrarValoresAtributosLibro4() {
  if (!xmlDoc) return;
  const book4 = xmlDoc.getElementsByTagName("book")[3];
  if (!book4) return;
  let valores = "";
  for (let i = 0; i < book4.attributes.length; i++) {
    valores += `🔹 ${book4.attributes[i].name}: ${book4.attributes[i].value}<br>`;
  }
  mostrarResultado(`<strong>Valores de los atributos:</strong><br>${valores}`);
}

function mostrarNumAutoresLibro3() {
  if (!xmlDoc) return;
  const autores = xmlDoc.getElementsByTagName("book")[2]
                 ?.getElementsByTagName("author") || [];
  mostrarResultado(`<strong>Número de autores del libro 3:</strong> ${autores.length}`);
}

function mostrarAutoresLibro3() {
  if (!xmlDoc) return;
  const autores = xmlDoc.getElementsByTagName("book")[2]
                 ?.getElementsByTagName("author") || [];
  let lista = "";
  for (let i = 0; i < autores.length; i++) {
    lista += `👤 ${autores[i].textContent}<br>`;
  }
  mostrarResultado(`<strong>Autores del libro 3:</strong><br>${lista}`);
}

function mostrarTabla() {
  if (!xmlDoc) return;
  const books = xmlDoc.getElementsByTagName("book");
  let tabla = `<table border="1" cellpadding="5" cellspacing="0">
                 <tr style="background-color:#ddd;">
                   <th>Título</th><th>Autor principal</th><th>Precio</th><th>Año</th>
                 </tr>`;
  for (let i = 0; i < books.length; i++) {
    const title = books[i].getElementsByTagName("title")[0]?.textContent || "N/A";
    const author = books[i].getElementsByTagName("author")[0]?.textContent || "N/A";
    const price = books[i].getElementsByTagName("price")[0]?.textContent || "N/A";
    const year = books[i].getElementsByTagName("year")[0]?.textContent || "N/A";
    tabla += `<tr>
                <td>${title}</td><td>${author}</td><td>${price}</td><td>${year}</td>
              </tr>`;
  }
  tabla += `</table>`;
  mostrarResultado(`<strong>📚 Tabla de libros:</strong><br>${tabla}`);
}

function mostrarResultado(html) {
  document.getElementById("output").innerHTML = html;
}
