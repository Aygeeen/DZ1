//MODAL
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')
const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}
modalTrigger.onclick = () => openModal()
const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}
closeModalButton.onclick = () => closeModal()
modal.onclick = (event) => {
    if (event.target === modal)
        closeModal()
}
const ScrollAndOpenModal = () => {
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.scrollHeight;
    if (window.scrollY + windowHeight >= fullHeight) {
        openModal();
        window.removeEventListener('scroll', ScrollAndOpenModal);
    }
};

window.addEventListener('scroll', ScrollAndOpenModal);

// const openModalAfterDelay = () => {
//     setTimeout(() => {
//         openModal()
//     }, 10000)
// }
// window.addEventListener('load', openModalAfterDelay)