import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import nodemailer from 'nodemailer';

const Employment = () => {
  const handleSubmit = async (values, actions) => {
    // Send form data to email here
    console.log(values);
    try {
      let transporter = nodemailer.createTransport({
        host: "smtp.example.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "username",
          pass: "password"
        }
      });

      let info = await transporter.sendMail({
        from: '"Employment Form" <form@example.com>',
        to: "recipient@example.com",
        subject: "New Employment Form Submission",
        text: JSON.stringify(values),
        html: `
          <p>Name: ${values.name}</p>
          <p>Phone Number: ${values.phone}</p>
          <p>Address: ${values.address}</p>
          <p>Email: ${values.email}</p>
          <p>Work Experience: ${values.workExperience}</p>
        `
      });

      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    } catch (error) {
      console.log(error);
    }
    actions.setSubmitting(false);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    phone: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    workExperience: Yup.string(),
    resume: Yup.mixed().required('Resume is required')
  });

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
        address: '',
        email: '',
        workExperience: '',
        resume: null
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form>
          <Field name="name" placeholder="Name*" />
          <Field name="phone" placeholder="Phone Number*" />
          <Field name="address" placeholder="Address*" />
          <Field name="email" placeholder="Email*" type="email" />
          <Field name="workExperience" placeholder="Work Experience" component="textarea" />
          <Field
            name="resume"
            component="input"
            type="file"
            onChange={event => {
              setFieldValue("resume", event.currentTarget.files[0]);
            }}
            />
            <button type="submit" disabled={isSubmitting}>
            Submit
            </button>
        </Form>
        )}
    </Formik>
    );
};
            
export default Employment