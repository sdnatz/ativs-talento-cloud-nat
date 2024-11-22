let titulo = document.getElementById('titulo')
let link = document.querySelector('a');

titulo.innerText = 'Temas estudados'
link.innerText = 'Site da Proz'

let listaNaoOrdenada = document.querySelector('ul')
let listaOrdenada = document.querySelector('ol')

listaNaoOrdenada.innerHTML = `
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
`
listaOrdenada.innerHTML = `
  <li><a href="https://about.meta.com/">Meta</a></li>
  <li><a href="https://www.aws.com">AWS</a></li>
  <li><a href="https://www.google.com">Google</a></li>
`