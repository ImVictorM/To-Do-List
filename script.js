function onClickChangeBgColor(element) {
  element.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'grey';
  });
}


const addButton = document.getElementById('criar-tarefa');
addButton.addEventListener('click', () => {
  const inputText = document.getElementById('texto-tarefa').value;
  document.getElementById('texto-tarefa').value = ''; // reset
  const listItem = document.createElement('li');
  listItem.innerText = inputText;
  onClickChangeBgColor(listItem);
  const list = document.getElementById('lista-tarefas');
  list.appendChild(listItem);
});


