
  const squares = document.querySelectorAll('.square');

  squares.forEach( (square) => {
    square.addEventListener('click', () => {
      if (square.innerHTML === '') {
        let playerMove = prompt('X or O')
        square.innerHTML = `${playerMove}`
      }  else {
        alert('Already picked. Please choose another block')
        }   
    })
  })

  function clearnul () {
    squares.forEach((square) => {
    if (square.innerHTML = 'null') {
      square.innerHTML = ''
    }
  })
}

  const buttonElement = document.querySelector('.button-js')
  buttonElement.addEventListener('click', () => {
     squares.forEach( (square) => {
      square.innerHTML = ''
     })
  })
