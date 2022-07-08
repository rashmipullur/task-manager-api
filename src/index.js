const express = require('express')
require('dotenv').config()
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT


// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled!')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('site is currently down. check back soon.')
// })

// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a Word document'))
//         }
//         cb(undefined, true)
//     }
// })
// // const errorMiddleware = (req, res, next) => {
// //     throw new Error('From my middleware')
// // }
// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// 
// Without middleware:  new request -> run route handler
// 
// With middleware:     new request -> do something -> run route handler
// 

app.listen(port, () => {
    console.log('Server is up on a port ' + port)
})
//console.log("blah " + process.env.S3_BUCKET)



// const main = async () => {
//     // const task = await Task.findById('62c41523d250d870ba174cfa') 
//     // await task.populate('owner')
//     // console.log(task.owner)

//     const user = await User.findById('62c40fd46c0d8e491508278e')
//     await user.populate('tasks')
//     console.log(user.tasks)
// }
// main()