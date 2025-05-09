const test = 'it works!'

function openForm() {
  const addBtn = document.querySelector('button')
  const input = document.querySelector('.addInput')

  addBtn.addEventListener('click', () => {
    const hide = input.style.display === 'none' || input.style.display === '';
    input.style.display = hide ? 'block' : 'none';
  })
}

openForm()  
console.log(test)

const addNewList = () => {
  const projects = document.querySelector('.projects')

  const inputTodo = document.querySelector('.addInput').value
}
