import  express  from 'express'
const app= express()
import dotenv from 'dotenv'
dotenv.config()


app.get('/create', (req, res)=>{
    res.send('<h1> venky </h1>')
})
let port= process.env.PORT

app.listen(port,()=>{
    console.log(`server is listen on ${port}`)
})