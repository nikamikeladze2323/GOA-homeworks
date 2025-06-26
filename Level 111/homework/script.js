const input = document.getElementById('todoInput');
const submitBtn = document.getElementById('submitTodo');
const pendingList = document.getElementById('todoList');
const completedList = document.getElementById('completedList');

window.addEventListener('DOMContentLoaded', () => {
  const saved = JSON.parse(localStorage.getItem('todos')) || [];
  saved.forEach(({ text, completed }) => addTodo(text, completed));
});

submitBtn.addEventListener('click', handleAdd);
input.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    handleAdd();
  }
});

function handleAdd() {
  const text = input.value.trim();
  if (!text) return;
  addTodo(text);
  saveTodos();
  input.value = '';
}

function addTodo(text, completed = false) {
  const div = document.createElement('div');
  div.className = 'todo-item';
  if (completed) div.classList.add('completed');

  div.innerHTML = `
    <input type="checkbox" ${completed ? 'checked' : ''}>
    <div class="todo-body">
      <span class="todo-text" contenteditable="false">${text}</span>
    </div>
    <div class="actions">
      <button class="edit-btn">✎</button>
      <button class="delete-btn">✖</button>
    </div>
  `;

  (completed ? completedList : pendingList).appendChild(div);
}

document.body.addEventListener('click', e => {
  const item = e.target.closest('.todo-item');
  if (!item) return;

  if (e.target.matches('input[type="checkbox"]')) {
    item.classList.toggle('completed');
    (item.querySelector('input').checked ? completedList : pendingList).appendChild(item);
    saveTodos();
  }

  if (e.target.classList.contains('edit-btn')) {
    const textEl = item.querySelector('.todo-text');
    const isEditing = textEl.isContentEditable;
    textEl.contentEditable = !isEditing;
    e.target.textContent = isEditing ? '✎' : '✔';
    if (isEditing) saveTodos();
    if (!isEditing) textEl.focus();
  }

  if (e.target.classList.contains('delete-btn')) {
    item.remove();
    saveTodos();
  }
});

document.addEventListener('keydown', e => {
  const editing = document.activeElement.classList.contains('todo-text');
  if (editing && e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    document.activeElement.blur();
    saveTodos();
  }
});

function saveTodos() {
  const todos = [];

  document.querySelectorAll('#todoList .todo-item').forEach(item => {
    todos.push({ text: item.querySelector('.todo-text').textContent.trim(), completed: false });
  });

  document.querySelectorAll('#completedList .todo-item').forEach(item => {
    todos.push({ text: item.querySelector('.todo-text').textContent.trim(), completed: true });
  });

  localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo(text, completed = false) {
  const div = document.createElement('div');
  div.className = 'todo-item';
  if (completed) div.classList.add('completed');

  div.innerHTML = `
    <div class="todo-body">
      <input type="checkbox" ${completed ? 'checked' : ''}>
      <span class="todo-text" contenteditable="false">${text}</span>
    </div>
    <div class="actions">
      ${!completed ? `<button class="edit-btn">✎</button>` : ''}
      <button class="delete-btn">✖</button>
    </div>
  `;

  (completed ? completedList : pendingList).appendChild(div);
}

document.getElementById('clearAllBtn').addEventListener('click', () => {
  localStorage.removeItem('todos');
  pendingList.innerHTML = '';
  completedList.innerHTML = '';
});

