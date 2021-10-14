var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

let d = document
let menu = d.getElementById('menu'),
    main = d.getElementById('main')
    slider = d.getElementById('slider')

// console.log(checkbox.getAttribute('checked'))

slider.addEventListener('click', () => {
    menu.classList.toggle('active')
    main.classList.toggle('active')
})

let openModal = d.getElementsByClassName('open_modal'),
    modal = d.getElementById('modal'),
    closeModal = d.getElementsByClassName('close_modal')

for (i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener('click', function () {
        modal.classList.add('active')
    })
}

for (i = 0; i < closeModal.length; i++) {
    closeModal[i].addEventListener('click', function () {
        modal.classList.remove('active')
    })
}