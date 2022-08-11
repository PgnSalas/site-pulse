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
        console.log(item);
        item.addEventListener('click', () => {
            index = indexDot;
            prepareCurrentBox(index);
        })
    });


    btnNext.addEventListener('click', nextBox);
    btnPrev.addEventListener('click', prevBox);



    // ====================================CATALOG==================================================
    const link = document.querySelector('.catalog-item__link'),
          linkBack = document.querySelector('.catalog-item__wrapper_link'),
          wrapper = document.querySelector('.catalog-item__wrapper'),
          wrapper_2 = document.querySelector('.catalog-item__wrapper_2');


    link.addEventListener('click', (e) => {
        e.preventDefault();
        wrapper.classList.toggle('catalog-item__wrapper_active');
        wrapper_2.classList.toggle('catalog-item__wrapper_block');
    });


    linkBack.addEventListener('click', (e) => {
        e.preventDefault();
        wrapper_2.classList.toggle('catalog-item__wrapper_block');
        wrapper.classList.toggle('catalog-item__wrapper_active');
    }); 
});

