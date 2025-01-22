const express = require('express')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var cors = require('cors')
const app = express()
const port = 4000


app.use(cors())
app.use(express.json())

const winterSchema = new Schema({
    title: String,
    image: String,
    price: Number
  });

  const winterModel = mongoose.model('Winter', winterSchema)

app.get('/winters', async(req, res) => {
  try {
    const response = await winterModel.find({})
    res.json(response)
  } catch (error) {
    res.json({
        message: "error"
    })
  }
})

app.get('/winters/:id', async(req, res) => {
    const {id} = req.params;
    try {
      const response = await winterModel.findById(id)
      res.json(response)
    } catch (error) {
      res.json({
          message: "error"
      })
    }
  })

  app.delete('/winters/:id', async(req, res) => {
    const {id} = req.params;
    try {
      const deletedWinter = await winterModel.findByIdAndDelete(id)
      res.json(deletedWinter)
    } catch (error) {
      res.json({
          message: "error"
      })
    }
  })


  app.post('/winters', async(req, res) => {
    try {
      const winter = winterModel({...req.body})
      await winter.save()
      res.json(winter)
    } catch (error) {
      res.json({
          message: "error"
      })
    }
  })


mongoose.connect('mongodb+srv://solaehazmp202:shola123@cluster0.tdger.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})