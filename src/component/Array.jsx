import React from 'react'
import testimImg from '../imgs/dogwithman.jpg';
import testimImg1 from '../imgs/testiImg1.jpg';

import prodImg from '../imgs/bird-feed.avif'
import prodImg1 from '../imgs/cat-feed.jpg'
import prodImg4 from '../imgs/dog-food2.jpg'
import prodImg2 from '../imgs/cat-food.jpg'
import prodImg3 from '../imgs/dog-food.jpg'
import prodImg6 from '../imgs/cat-food3.jpg'
import prodImg5 from '../imgs/bird-feed.avif'

import prof from '../imgs/prof.jpg'
import prof1 from '../imgs/prof1.jpg'
import prof2 from '../imgs/prof2.jpg'
import prof3 from '../imgs/prof3.jpg'
import prof4 from '../imgs/prof4.jpg'

// ------------SERVICES----------

const serviceItems = [
    {
        icon:'fa-solid fa-bone',
        title:'Pet feeding',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, asperiores.',
    },
    {
        icon:'fa-solid fa-scissors',
        title:'pet grooming',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, asperiores.',
    },
    {
        icon:'fa-solid fa-house-flag',
        title:'pet boarding',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, asperiores.',
    },
    {
        icon:"fa-solid fa-shield-cat",
        title:'pet training',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, asperiores.',
    },
    {
        icon:'fa-solid fa-house-medical-flag',
        title:'pet treatment',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, asperiores.',
    },
    {
        icon:'fa-solid fa-shield-dog',
        title:'pet exersize',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, asperiores.',
    },
]

// --------------TESTIMONIAL------------

const testimonail = [
    {
        img:testimImg,
        p:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error voluptatem, alias, provident inventore tenetur modi totam neque, quidem quis numquam delectus hic dolor ab cum omnis ullam perspiciatis deserunt aut." ,

        Name:'My Name',
        prof:'profession'
    },
    {
        img:testimImg1,
        p:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error voluptatem, alias, provident inventore tenetur modi totam neque, quidem quis numquam delectus hic dolor ab cum omnis ullam perspiciatis deserunt aut." ,

        Name:'My Name',
        prof:'profession'
    }
]


// -------------product-------------

const productItems = [
    {
        img:prodImg,
        name:'best quality',
        price:20.45
    },
    {
        img:prodImg1,
        name:'best quality',
        price:20.45
    },
    {
        img:prodImg2,
        name:'best quality',
        price:20.45
    },
    {
        img:prodImg3,
        name:"best quality",
        price:20.45
    },
    {
        img:prodImg4,
        name:'best quality',
        price:20.45
    },
    {
        img:prodImg5,
        name:'best quality',
        price:20.45
    },
    {
        img:prodImg6,
        name:'best quality',
        price:20.45
    }
]

// ----------------Team Members---------------

const profissionals = [
    {
        img:prof,
        name:'good name',
        desig:'designation'
    },
    {
        img:prof1,
        name:'good name',
        desig:'designation'
    },
    {
        img:prof2,
        name:'good name',
        desig:'designation'
    },
    {
        img:prof3,
        name:'good name',
        desig:'designation'
    },
    {
        img:prof4,
        name:'good name',
        desig:'designation'
    },
    {
        img:prof2,
        name:'good name',
        desig:'designation'
    },
]





export default serviceItems;

export {testimonail};

export {productItems};

export {profissionals};