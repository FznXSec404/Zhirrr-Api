__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/api/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})

router.get('/login', (req, res) => {
    res.sendFile(__path + '/views/login.html')
})

router.get('/colors', (req, res) => {
    res.sendFile(__path + '/colors.html')
})

router.get('/menu-api', (req, res) => {
    res.sendFile(__path + '/menu-api.html')
})

router.get('/pembaruan-log', (req, res) => {
    res.sendFile(__path + '/pembaruan-log.html')
})

router.get('/api/news', (req, res) => {
    res.redirect('https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Berita.json')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'ZhirrrBot',
            namaowner: 'Zhirrr',
            instagram: 'zhirr_ajalah',
            youtube : 'Gak Punya'
        }
    }
    res.json(config)
})

module.exports = router
