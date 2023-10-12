import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { HorizontalTicker } from "react-infinite-ticker";
import "./Home.css";


export default function Home() {

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

    const proj = [
        {
            id: 0,
            imag: "/proj1.jpg",
            name: "Onondaga Pedestrian Bridge",
            sectionId: "o-section"
        },
        {
            id: 1,
            imag: "/aq1.jpg",
            name: "Camillus Aqueduct",
            sectionId: "aq-section"
        },
        {
            id: 2,
            imag: "/wpb.jpg",
            name: "Whitney Point Bridge",
            sectionId: "w-section"
        },
        {
            id: 3,
            imag: "/jgb.jpg",
            name: "John Glenn Boulevard",
            sectionId: "j-section"
        },
        {
            id: 4,
            imag: "/hoxie.jpg",
            name: "Hoxie Gorge",
            sectionId: "h-section"
        }
    ];      
    


    return (
        <div className='overflow-clip'><div className="h-screen w-screen bg-cover" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/homebgfinal-min.jpg'})` }}>
                <div className="pt-[30%] md:pt-[12%] 2xl:pt-[12%] font-semibold pl-8 md:pl-32 h-screen pr-16 md:w-1/2 md:pr-0 xl:pl-52">
                    <div className="text-[45px] leading-none md:text-6xl lg:text-7xl xl:text-[85px] 2xl:text-[105px] text-white font-extrabold">
                        Infrastructure Built to Last
                    </div>
                    <div className="text-2xl text-blue-300 font-semibold">Building strong foundations since 1963</div>
                    <a href="/employment"> 
                        <button type="button" class="py-3 px-4 mt-3 bg-blue-500 shadow-lg hover:bg-blue-600 text-white w-auto transition ease-in duration-300 text-center text-xl font-bold rounded-lg">
                            Join Us
                        </button>
                    </a>
                </div>
            </div>
            <div className="relative h-[200px] bg-white w-screen overflow-visible">
                <div className="absolute left-[-10px] top-[-45px] flex bg-white h-[525px] w-[105%] md:w-[105%] justify-center pt-10 transform rotate-1">
                    <div className="absolute left-[-15px] top-[30px] grid bg-blue-800 h-full w-[105%] md:w-[105%] content-center pt-10 transform rotate-1 overflow-visible">
                        <div className="w-screen flex justify-center absolute top-[10%] text-5xl font-bold -rotate-2 text-white translate-x-3 md:translate-x-0">Projects</div>
                        <div className="w-[105%] -rotate-2 -mt-24 md:-mt-16">
                            <HorizontalTicker
                            duration={30000}
                            >
                                {proj.map(({ id, imag, name, sectionId }) => (
                                    <a href={`/projects#${sectionId}`} className="p-2 hover:scale-[101%] transition ease-in-out duration-500">
                                        <div className="box-wrapper box-wrapper--vertical" key={id}>
                                            <div className="box box--vertical">
                                                <div className="relative">
                                                    <img alt="" className="rounded-md h-[240px] w-[600px]" src={imag} />
                                                    <div className="absolute bottom-[10%] left-[7%] z-10 text-3xl font-semibold text-white">{name}</div>
                                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90 rounded-md"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </HorizontalTicker>
                            <div className="w-screen flex justify-center translate-x-5 md:translate-x-2">
                                <a href="/projects">
                                    <button type="button" class="py-3 px-4 mt-8 bg-blue-500 hover:bg-blue-600 text-white w-auto transition ease-in duration-300 text-center text-xl font-bold rounded-lg">
                                        View Projects
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[360px] bg-white'></div>
            <div>
                <div className="bg-white px-[12%] lg:px-[18%] md:pt-[2%] xl:pt-[4%] pb-[7%]">
                <div className="xl:bg-[#fafbff] h-min xl:shadow-md rounded-xl xl:p-10 pb-[7%] xl:border-2 border-slate-300">
                <div className="text-4xl lg:text-5xl font-bold mb-7">Contact Us</div>
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
                                <Form className="rounded-lg mb-2 text-xl">
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
        </div>
    );
}