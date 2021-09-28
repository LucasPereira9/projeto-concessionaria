const modalback = document.querySelector('.modal-back')
const cards = document.querySelectorAll('.card')
for (let card of cards) {
    card.addEventListener('click', function() {
        const videoid = card.getAttribute('id')
        modalback.classList.add('ativo')
        modalback.querySelector('iframe').src =`https://www.youtube.com/embed/${videoid}`
    })
}
document.querySelector('.close-modal').addEventListener("click" , function() { modalback.classList.remove('ativo')
modalback.querySelector('iframe').src=""
})