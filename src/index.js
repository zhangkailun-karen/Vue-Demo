import app from './app.js'

const template = `<app></app>`

new Vue({
    template,
    el: '#app',
    components: {
        app
    }
})