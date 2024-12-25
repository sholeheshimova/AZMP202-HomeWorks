import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios'
const SignupSchema = Yup.object().shape({
  id: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  name: Yup.string().email("Invalid email").required("Required"),
});

const Home = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        id: "",
        description: "",
        name: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        await axios.post("https://northwind.vercel.app/api/categories",values)
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="id" />
          {errors.id && touched.id ? (
            <div>{errors.id}</div>
          ) : null}
          <Field name="description" />
          {errors.description && touched.description ? (
            <div>{errors.description}</div>
          ) : null}
          <Field name="name" />
          {errors.name && touched.name ? <div>{errors.name}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Home;
