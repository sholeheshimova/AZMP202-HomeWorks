import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const winterSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  price: Yup.number().required('Required'),
  image: Yup.string().url().required('Required'),
});


const BASE_URL = "http://localhost:4000/winters"
 const Add = () => {
  const [winters, setWinters] = useState([])

  const getAllWinters = async() => {
    try {
      const response = await axios.get(`${BASE_URL}`)
      setWinters(response.data)
    } catch (error) {
      console.log(error);
      
    }
  }

const handleDelete = async(id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`)
    if (response.status === 200) {
      setWinters([...winters].filter((q) => q._id !== id))
    }
  } catch (error) {
    console.log(error);
    
  }
}

  useEffect(() => {
    getAllWinters()
  }, [])

  return (
   <>
   <div style={{display: "flex", justifyContent: "center"}}>
     <div>
    <h1>Add to card</h1>
    <Formik
      initialValues={{
        title: '',
        price: '',
        image: '',
      }}
      validationSchema={winterSchema}
      onSubmit={async (values , {resetForm}) => {

        const winter = {...values}
        const res = await axios.post(`${BASE_URL}`, winter)
        resetForm()
        
        // console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form style={{display: "flex", flexDirection: "column", width: "200px", justifyContent: "center", gap: "2rem"}}>
          <Field name="title" />
          {errors.title && touched.title ? (
            <div>{errors.title}</div>
          ) : null}
          <Field name="price" />
          {errors.price && touched.price ? (
            <div>{errors.price}</div>
          ) : null}
           <Field name="image" />
          {errors.image && touched.image ? (
            <div>{errors.image}</div>
          ) : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
   </div>
   <hr />
   <div>
   <TableContainer>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { winters.length > 0 && winters.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right"><img src={row.image} alt=""  width={100}/></TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">${row.price}</TableCell>
              <TableCell align="right"><button onClick={( ) => { window.confirm ("are u sure? ") && handleDelete(row._id)}}>Delete</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </div>
   </>
   

  )
 };

export default Add;