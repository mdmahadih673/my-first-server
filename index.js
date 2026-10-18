import express from 'express'
const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('hello world')
})
const users = [

    {
        "name": "Rahim Ahmed",
        "email": "rahim.ahmed@example.com"
    },
    {
        "name": "Karim Hasan",
        "email": "karim.hasan@example.com"
    },
    {
        "name": "Nusrat Jahan",
        "email": "nusrat.jahan@example.com"
    },
    {
        "name": "Sadia Islam",
        "email": "sadia.islam@example.com"
    },
    {
        "name": "Tanvir Hossain",
        "email": "tanvir.hossain@example.com"
    },
    {
        "name": "Ayesha Rahman",
        "email": "ayesha.rahman@example.com"
    },
    {
        "name": "Fahim Chowdhury",
        "email": "fahim.chowdhury@example.com"
    },
    {
        "name": "Sumaiya Akter",
        "email": "sumaiya.akter@example.com"
    },
    {
        "name": "Sakib Mahmud",
        "email": "sakib.mahmud@example.com"
    },
    {
        "name": "Mim Sultana",
        "email": "mim.sultana@example.com"
    }


]


app.get('/about', (req, res) => {
    res.send('about me')
})

app.get('/deshbord', (req, res) => {
    res.send(users)
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);

})