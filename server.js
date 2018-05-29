const express = require('express');
const bodyParser = require('body-parser');


const app = express();

const PORT = process.env.PORT || 3000;

let friends = [
    {

    name: `Jenn`,
    age: 34,
    hobby: "Basketball"

    },
    {
        name: `Maria`,
        age: 35,
        hobby: `Cooking`
    }

];

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('public'));


app.get('/', (req, res)=> {
    res.send(`Hey There, We're Live!`);
})

app.get('/api/get-friends', (req, res)=>{
     res.json(friends);
})


app.post(`/api/add-friend`, (req, res)=>{
  const newFriend = req.body;
  friends.push(newFriend);
  res.json(newFriend);
})


app.listen(PORT, (err)=> {
    if(err){
        console.log(err);
    }
    console.log(`Listening on Port: ${PORT}`)
})