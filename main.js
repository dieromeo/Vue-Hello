'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Ciao sono vue js',
            source: 'https://picsum.photos/600/400',
            centrato: 'd-center',
            testoCentrato: 'text-center'
        }
    }
}).mount('#app')