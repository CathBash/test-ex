// Sidebar mobile
const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

sidebarToggleBtn.onclick = function() {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');
}


// Cards Button More
const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');


btnShowMoreCards.addEventListener('click', function() {
    hiddenCards.forEach(function(card) {
        card.classList.remove('card-link--hidden');
    });
});

// Widget hidden
const widgets = document.querySelectorAll('.widget');

widgets.forEach(function(widget) {
    widget.addEventListener('click', function(e) {
        if (e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active');
            e.target.nextElementSibling.classList.toggle('widget__body--hidden')
        }
    });
});

// Location любая

const checkBoxAny = document.querySelector('#location-05');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]');

checkBoxAny.addEventListener('change', function() {
    if (checkBoxAny.checked) {
        topLocationCheckboxes.forEach(function(item) {
            item.checked = false;
        });
    }
})

topLocationCheckboxes.forEach(function(item) {
    item.addEventListener('change', function() {
        if (checkBoxAny.checked) {
            checkBoxAny.checked = false
        }
    })
})


// Checkbox hidden
const showMoreOptions = document.querySelector('.widget__btn-show-hidden');
const hiddenCheckBoxes = document.querySelectorAll('.checkbox--hidden');

showMoreOptions.onclick = function(e) {
    e.preventDefault();


    if (showMoreOptions.dataset.options == 'hidden') {
        hiddenCheckBoxes.forEach(function(item) {
            item.style.display = 'block';
        });
        showMoreOptions.innerText = 'Скрыть дополнительные опции';
        showMoreOptions.dataset.options = 'visible';
    } else if (showMoreOptions.dataset.options == 'visible') {
        hiddenCheckBoxes.forEach(function(item) {
            item.style.display = 'none';
        });
        showMoreOptions.innerText = 'Показать ещё';
        showMoreOptions.dataset.options = 'hidden';
    }

}