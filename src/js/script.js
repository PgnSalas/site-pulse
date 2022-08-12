"use strict";

window.addEventListener('DOMContentLoaded', () => {
    const btnNext = document.querySelector('.next'),
          btnPrev = document.querySelector('.prev'),
          boxes = document.querySelectorAll('.carousel__box'),
          dotes = document.querySelectorAll('.dot');


    let index = 0;


    const activeBoxes = (n) => {
        for (let box of boxes) {
            box.classList.remove('active');
            box.classList.add('active-buy');
        }
        boxes[n].classList.add('active');
    };


    const activeDotes = (n) => {
        for (let dot of dotes) {
            dot.classList.remove('dote-active');
        }
        dotes[n].classList.add('dote-active');
    }

    const prepareCurrentBox = ind => {
        activeBoxes(index);
        activeDotes(index);
    };

    const nextBox = () => {
        if (index == boxes.length - 1) {
            index = 0;
            prepareCurrentBox(index);
        } else {
            index++;
            prepareCurrentBox(index);
        }
    }

    const prevBox = () => {
        if (index == 0) {
            index = boxes.length - 1;
            prepareCurrentBox(index);
        } else {
            index--;
            prepareCurrentBox(index);
        }
    };


    dotes.forEach((item, indexDot) => {
        // console.log(item);
        item.addEventListener('click', () => {
            index = indexDot;
            prepareCurrentBox(index);
        })
    });


    btnNext.addEventListener('click', nextBox);
    btnPrev.addEventListener('click', prevBox);



    // ====================================CATALOG==================================================
    const link = document.querySelectorAll('.catalog-item__link'),
          linkBack = document.querySelectorAll('.catalog-item__wrapper_link'),
          itemContent = document.querySelectorAll('.catalog-item__content'),
          content = document.querySelector('.catalog__contant'),
          contentList = document.querySelectorAll('.catalog-item__list');

// console.log(link);

    function hideWrap(i) {
        itemContent[i].classList.toggle('catalog-item__content_active');
        contentList[i].classList.toggle('catalog-item__list_active');
    }
 
    function everyLink() {
        link.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                    e.preventDefault();
                    hideWrap(i);
            });
        });
    }

    function hideText(i) {
        contentList[i].classList.toggle('catalog-item__list_active');
        itemContent[i].classList.toggle('catalog-item__content_active');
    }

    function everyBackLink() {
        linkBack.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                hideText(i);
            });
        });
    }

    everyLink();
    everyBackLink();
 

// =============================================================================
    const contCatalog = document.querySelectorAll('.catalog__content'),
          cataTabs = document.querySelector('.catalog__tabs'),
          cataTab = document.querySelectorAll('.catalog__tab');



    function hideTab() {
        contCatalog.forEach((item, i) => {
            item.style.display = 'none';
        });

        cataTab.forEach((item, i) => {
            item.classList.remove('catalog__tab_active');
        });
    }

    function showTab(i = 0) {
        contCatalog[i].style.display = 'flex';
        cataTab[i].classList.add('catalog__tab_active');
    }

    
    hideTab();
    showTab();

    cataTabs.addEventListener('click', (even) => {
        if (even.target && even.target.closest('.catalog__tab')) {
            cataTab.forEach((item, i) => {
                if (even.target == item || even.target.parentElement == item) {
                    hideTab();
                    showTab(i);
                }
            }); 
        }
    });


});

