const express = require('express')
const mongoose = require('mongoose');
// const { renderToStaticMarkup } = require('react-dom/server');
const { Schema } = mongoose;
var cors = require('cors')

const app = express()
const port = 4000


app.use(cors())
app.use(express.json())

const dataSchema = new Schema({
    title: String,
    description: String,
    price: Number,
})

const dataModel = mongoose.model("Data", dataSchema)


// get data 
app.get('/data',  async(req, res) => {
    try {
       const datas = await dataModel.find({})
       res.json(datas)
    } catch (error) {
        res.json({
            message: "error"
        })
    }
  })
  
  // get data by id
app.get('/data/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const data = await dataModel.findById(id)
        res.json(data)
    } catch (error) {
        res.json({
            message: "error"
        })
    }
})

// delete data by id
app.delete('/data/:id', async(req, res) => {
    const {id} = req.params;
   try {
    const deletedData = await dataModel.findByIdAndDelete(id)
    res.json(deletedData)
   } catch (error) {
    res.json({
        message: "error"
    })
   }
  })

// post data
  app.post('/data', async(req, res) => {
    try {
      const addData = dataModel({...req.body})
     await  addData.save();
     res.json(addData)
    } catch (error) {
        res.json({
            message: "error"
        })
    }
  })

  // put data

  app.put('/data/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const updatedData = await dataModel.findByIdAndUpdate(id, {...req.body}, {new: true});
        res.json(updatedData)
    } catch (error) {
        res.json({
            message: "error"
        })
    }
  })


mongoose.connect("mongodb+srv://solaehazmp202:shola123@cluster0.tdger.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {console.log('Connected!')
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
  }
);