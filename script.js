const addButton = document.getElementById('criar-tarefa');
addButton.addEventListener('click', () => {
  const inputText = document.getElementById('texto-tarefa').value;
  document.getElementById('texto-tarefa').value = ''; // reset
  const listItem = document.createElement('li');
  listItem.innerText = inputText;
  const list = document.getElementById('lista-tarefas');
  list.appendChild(listItem);
});