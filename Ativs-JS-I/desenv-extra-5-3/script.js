let titulo = document.createElement("h1");

titulo.id = "titulo";
titulo.innerText = "Doceria";

let body = document.querySelector("body");

body.appendChild(titulo);

let produto = document.createElement("div");

produto.innerHTML = `
  <div>
    <h2>Cheesecake</h2>
    <img src="https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/8fafc3935c766bf8c9f1331a325e48a9.webp?itok=qsQFIVyp" alt="cheesecake">
    <p>Torta doce de cream cheese e calda de frutas vermelhas.</p>
    <p id="preco-cheesecake">R$ 12</p>

    <h2>Bolo de brigadeiro</h2>
    <img src="https://moinhoglobo.com.br/wp-content/uploads/2019/03/08-bolo-chocolate-640x427.png" alt="bolo-brigadeiro">
    <p>Bolo com massa de chocolate e cobertura de brigadeiro com granulado.</p>
    <p id="preco-bolo-brigadeiro">R$ 8</p>
  </div>
`;

body.appendChild(produto)