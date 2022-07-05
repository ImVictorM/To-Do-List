function onClickChangeBgColor(element) {
  element.addEventListener('click', (event) => {
    const selected = document.getElementsByClassName('selectedItem')[0];
    if (selected) {
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
function createItem(text) {
  const listItem = document.createElement('li');
  listItem.innerText = text;
  onClickChangeBgColor(listItem);
  doubleClickEvent(listItem);
  const list = document.getElementById('lista-tarefas');
  list.appendChild(listItem);
}
function createCompletedItem(text) {
  const listItem = document.createElement('li');
  listItem.innerText = text;
  listItem.classList.add('completed');
  onClickChangeBgColor(listItem);
  doubleClickEvent(listItem);
  const list = document.getElementById('lista-tarefas');
  list.appendChild(listItem);
}

const addButton = document.getElementById('criar-tarefa');
addButton.addEventListener('click', () => {
  const inputText = document.getElementById('texto-tarefa').value;
  document.getElementById('texto-tarefa').value = ''
  createItem(inputText);
});

const clearButton = document.getElementById('apaga-tudo');
clearButton.addEventListener('click', () => {
  let allListItems = document.getElementsByTagName('li');
  for (let index = allListItems.length - 1; index >= 0; index -= 1) {
    allListItems[index].remove();
  }
});

const clearFinishedButton = document.getElementById('remover-finalizados');
clearFinishedButton.addEventListener('click', () => {
  let completedTasks = document.getElementsByClassName('completed');
  for (let index = completedTasks.length - 1; index >= 0; index -= 1) {
    completedTasks[index].remove();
  }
});

function isCompleted(element) {
  if (element.classList.contains('completed')) {
    return true;
  }
  return false;
}

const saveButton = document.getElementById('salvar-tarefas');
saveButton.addEventListener('click', () => {
  let allListItems = document.getElementsByTagName('li');
  let listItemsValues = [];
  for (let item of allListItems) {
    listItemsValues.push({
      value: item.innerText,
      isCompleted: isCompleted(item),
    });
  }
  localStorage.setItem('items', JSON.stringify(listItemsValues))
});

const moveUpButton = document.getElementById('mover-cima');
moveUpButton.addEventListener('click', () => {
  let selectedItem = document.getElementsByClassName('selectedItem')[0];
  if (selectedItem && selectedItem.previousSibling !== null) {
    document.getElementById('lista-tarefas').insertBefore(selectedItem, selectedItem.previousSibling);
  }
});


const moveDownButton = document.getElementById('mover-baixo');
moveDownButton.addEventListener('click', () => {
  let selectedItem = document.getElementsByClassName('selectedItem')[0];
  if(selectedItem && selectedItem.nextSibling !== null) {
    let list = document.getElementById('lista-tarefas');
      list.insertBefore(selectedItem.nextSibling, selectedItem);
  }
});

window.onload = () => {
  if (localStorage.getItem('items') !== null) {
    let itemsValues = JSON.parse(localStorage.getItem('items'));
    for(let item of itemsValues) {
      if (item.isCompleted) {
        createCompletedItem(item.value);
      } else {
        createItem(item.value)
      }
    }
  }
}
