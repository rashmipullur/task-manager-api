const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true
})


// const me = new User({
//     name: 'Frank',
//     email: 'frank@gmail.com',
//     password: 'something',
//     age: 27    
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error! ',error)
// })


// const task = new Task({
//    description: 'eat lunch'

// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error! ',error)
// })