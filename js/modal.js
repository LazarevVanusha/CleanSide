const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalGeneralButtons = document.querySelectorAll('[data-close-button-general]')
const closeModalBathRoomButtons = document.querySelectorAll('[data-close-button-bathroom]')
const closeModalKitchenButtons = document.querySelectorAll('[data-close-button-kitchen]')
const changeFootage = document.querySelectorAll('.btnChoiseFootageStyle')


changeFootage.forEach(button => {
    button.addEventListener('click', () => {
        changeFootage.forEach(btn => {
            btn.classList.remove('active')
        })
        button.classList.add('active')
    })
})

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})



// overlay.addEventListener('click', () => {
//     const modals = document.querySelectorAll('.works__general__modal.active')
//     modals.forEach(modal => {
//         closeModal(modal)
//     })
// })


closeModalGeneralButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.works__general__modal')
        closeModal(modal)
    })
})

closeModalBathRoomButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.works__bathroom__modal')
        closeModal(modal)
    })
})

closeModalKitchenButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.works__kitchen__modal')
        closeModal(modal)
    })
})


function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

