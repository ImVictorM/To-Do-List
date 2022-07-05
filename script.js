function onClickChangeBgColor(element) {
  element.addEventListener('click', (event) => {
    const selected = document.getElementsByClassName('selectedItem')[0];
    if(selected) {
      selected.classList.remove('selectedItem');
    } 
    event.target.classList.add('selectedItem');
  });
}

function doubleClickEvent(element) {
  element.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}

const addButton = document.getElementById('criar-tarefa');
addButton.addEventListener('click', () => {
  const inputText = document.getElementById('texto-tarefa').value;
  document.getElementById('texto-tarefa').value = ''; // reset
  const listItem = document.createElement('li');
  listItem.innerText = inputText;
  onClickChangeBgColor(listItem);
  doubleClickEvent(listItem);
  const list = document.getElementById('lista-tarefas');
  list.appendChild(listItem);
});


