'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Ciao sono vue js'
        }
    }
}).mount('#app')