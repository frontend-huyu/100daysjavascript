// // Reference
// // input/trigger
// const btn = document.querySelector('.btn');
// const close = document.querySelector('.close');
// // output/present
// const modal = document.querySelector('.modal');
// const modalContent = document.querySelector('.modal-content')

// btn.addEventListener('click', openModal);
// close.addEventListener('click', closeModal);
// modal.addEventListener('click', closeModal);

// // open modal
// function openModal(e) {
//   // if button inside the form, when we click button, it will refresh the page(or redirect to another page)
//   // cancel the button default action
//   e.preventDefault();
//   modal.style.display = 'block';
// }

// // close modal
// function closeModal() {
//   // set the slide-up animation before we hidden modal
//   modalContent.classList.add('slide-up');

//   setTimeout(() => {
//     // we have to trigger the close button, so we don't need to prevent default
//     modal.style.display = 'none';
//     modalContent.classList.remove('slide-up');
//   }, 500);
// }

const btn = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'block';
});

modal.addEventListener('click', (e) => {
  const target = e.target.classList;
  console.log(target);
  if (target.contains('modal') || target.contains('close')) {
    modalContent.classList.add('slide-up');

    setTimeout(() => {
      modal.style.display = 'none';
      modalContent.classList.remove('slide-up');
    }, 500);
  }
})

// classList methods
// add() => Create
// replace(), toggle() => Update
// remove() => Delete

