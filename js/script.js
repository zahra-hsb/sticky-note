const noteInput = document.querySelector('#note')
const container = document.querySelector('.container')
const row = document.querySelector('.row')
const circle = document.querySelectorAll('.bi')
const eraser = document.querySelector('.btn-danger')
const addNoteBtn = document.querySelector('.btn-info')


/* create notes function */
let makeElements = () => {
    let inputBg = noteInput.style.backgroundColor
            
    let card = document.createElement('div')
    card.setAttribute('class', 'card py-2 px-3 w-25 d-flex align-items-center')
    card.setAttribute('role', 'button')

    let note = document.createElement('p')
    // note.setAttribute('class', 'text-muted')
    
    note.innerHTML = noteInput.value
    row.appendChild(card)
    card.append(note)
    container.append(row)
    
    card.style.backgroundColor = inputBg
    

    noteInput.value = ''
    card.addEventListener('click', (e) => {
        e.target.parentElement.remove()
        // console.log(e.target)
    })
}

/* creates new note with enter key */
let createNoteEnterKey = (e) => {
    if(e.key === 'Enter'){
        if(noteInput.value){
            makeElements()
        }
    }
}


/* creates new note with button */
let createNoteButton = () => {
    if(noteInput.value){
        makeElements()
    }
}


/* change color of notes function */
circle.forEach((c) => {
    c.addEventListener('click', (e) => {
        let color = e.target.getAttribute('fill')
        // console.log(card)
        noteInput.style.background = color;
        noteInput.focus()
    }
    )
})

/* erase note function */
let eraseNote = () => {
    noteInput.value = ''
    noteInput.style.background = 'white'
}

addNoteBtn.addEventListener('click', createNoteButton)
eraser.addEventListener('click', eraseNote)
noteInput.addEventListener('keydown', createNoteEnterKey)