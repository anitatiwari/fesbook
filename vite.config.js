// vite.config.js
const { resolveObjectURL } = require('buffer')
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                book: resolve(__dirname, 'booking1.html'),
                ticket: resolve(__dirname,'ticket.html')
            }
        }
    }
})