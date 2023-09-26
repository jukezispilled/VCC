import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Contact = () => {
  const handleSubmit = async (values, actions) => {
    console.log('Form Values:', values);
    try {
      await axios.post('https://vector-corp.vercel.app/api/contact', values );

      console.log('Email sent successfully!');
      actions.setSubmitting(false);
    } catch (error) {
      console.error('Error sending email:', error);
      actions.setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });

  return (
    <div className="h-screen bg-cover bg-[#ffffff] bg-fixed pb-[10%]">
        <div className="px-[10%] mx-[8.5%] pt-[22%] md:pt-[10%] xl:pt-[8%]">
            <div className="xl:bg-[#eef0f7] h-min xl:shadow-md rounded-xl xl:p-10 pb-[10%]">
            <div className="text-5xl font-bold mb-7">Contact</div>
                <div>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            subject: '',
                            message: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting, errors, touched }) => (
                            <Form className="rounded-lg mb-10 text-xl">
                                <div className="mb-4">
                                    <label className="block font-medium mb-2" htmlFor="name">
                                        Your Name*
                                    </label>
                                    <Field
                                        className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tightbg-white"
                                        name="name"
                                        placeholder="Your Name*" 
                                        />
                                        {errors.name && touched.name && <div className="text-red-500">{errors.name}</div>}
                                </div>
                                <div className="mb-4">
                                    <label className="block font-medium mb-2" htmlFor="email">
                                        Your Email*
                                    </label>
                                    <Field
                                        className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight bg-white"
                                        name="email"
                                        placeholder="Your Email*" 
                                        />
                                        {errors.email && touched.email && <div className="text-red-500">{errors.email}</div>}
                                </div>
                                <div className="mb-4">
                                    <label className="block font-medium mb-2" htmlFor="subject">
                                        Subject*
                                    </label>
                                    <Field
                                        className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight bg-white"
                                        name="subject"
                                            placeholder="Subject*"
                                        />
                                        {errors.subject && touched.subject && <div className="text-red-500">{errors.subject}</div>}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block font-medium mb-2" htmlFor="message">
                                            Message*
                                        </label>
                                        <Field
                                            className="appearance-none h-24 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight bg-white"
                                            name="message"
                                            placeholder="Message*"
                                            component="textarea" 
                                        />
                                        {errors.message && touched.message && <div className="text-red-500">{errors.message}</div>}
                                    </div>
                                    <button
                                        className="bg-[#234d91] text-white shadow text-xl font-semibold py-2 px-4 rounded-lg transition ease-in duration-200"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send'}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
