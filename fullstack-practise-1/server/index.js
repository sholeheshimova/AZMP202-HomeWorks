const express = require('express')
const cors = require('cors');
const app = express()
const port = 4000
const mongoose = require('mongoose');
const { Schema } = mongoose;

app.use(cors());
app.use(express.json())


const ProductSchema = new Schema({
    title: String,
    description: String,
    image: String,
})

const ProductModel = mongoose.model("Products", ProductSchema)

// get all data
app.get('/products', async(req, res) => {
    try {
    const products = await ProductModel.find({})
    res.json(products)
    } catch (error) {
        res.json({
            message: "error"
  })
    }
})


// get data by id
app.get('/products/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const product = await ProductModel.findById(id)
        res.json(product)
    } catch (error) {
        res.json({
            message: "error"
        })
    }
  })

  // delete data by id
  app.delete('/products/:id',  async(req, res) => {
    const {id} = req.params;
    try {
        const deletedProduct = await ProductModel.findByIdAndDelete(id)
        res.json(deletedProduct)
    } catch (error) {
        res.json({
            message: "error"
        })
    }
  })

  // post data
  app.post('/products',  async(req, res) => {
    const {title, description} = req.body;
    if (!title || !description) {
        res.json({
            message: "Bad request"
        })
    }
    try {
        const newProduct = ProductModel({...req.body})
        await newProduct.save()
        res.json(newProduct)
    } catch (error) {
        res.json({
            message: "error"
        })
    }

  })


mongoose.connect('mongodb+srv://solaehazmp202:shola123@cluster0.tdger.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {console.log('Connected!')
    app.listen(port, () => {
        console.log(`Example app listening on port ${port} url is http://localhost:${port}`)
      })
  });
