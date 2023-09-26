import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Employment = () => {
  const handleSubmit = async (values, actions) => {
    try {
      await axios.post('https://vector-corp.vercel.app/api/apply', values );

      console.log('Email sent successfully!');
      actions.setSubmitting(false);
    } catch (error) {
      console.error('Error sending email:', error);
      actions.setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    phone: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    email: Yup.string().email('Invalid email address'),
    workExperience: Yup.string(),
    resume: Yup.mixed().required('Resume file is required'),
  });

  return (
    <>
      <div className="bg-cover bg-[#ffffff] bg-fixed pb-[10%]">
        <div className="px-[10%] mx-[8.5%] pt-[22%] md:pt-[10%] xl:pt-[8%] text-xl">
          <div className="xl:bg-[#eef0f7] h-min rounded-xl xl:shadow-md xl:p-10">
            <div className="pb-4">
            <div className="text-5xl font-bold mb-7">Employment</div>
              Click&nbsp;
              <a
                className="font-bold text-blue-600 hover:text-blue-700 transition ease-in duration-200"
                href="/VectorResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                HERE
              </a>
              &nbsp;to download the Vector Employment PDF. You can print, complete, and mail or fax to us.
            </div>
            <div className="text-2xl font-semibold mb-3">Job Description:</div>
            <p>
              We are seeking experienced and responsible construction personnel to join our heavy highway construction
              company. We want to offer you competitive pay, a generous benefits package, and opportunities for advancement.
              Join our team and learn how fulfilling it is to be rewarded appropriately for your efforts while you develop
              your skills and learn the newest construction techniques in a fast-paced environment.
            </p>
            <div className="text-2xl font-semibold my-3">Responsibilities:</div>
            <div className="flex flex-col space-y-0">
              <p>➮&nbsp;Report each day on time and ready to work.</p>
              <p>➮&nbsp;Have reliable transportation to the work site.</p>
              <p>➮&nbsp;Be able to perform construction tasks that involve strenuous manual labor.</p>
              <p>➮&nbsp;Ability to take and follow directions from superiors.</p>
              <p>➮&nbsp;Attention to Safety Rules and Regulations.</p>
              <p>➮&nbsp;Must be willing to travel to locations within NY.</p>
              <p>➮&nbsp;Must be willing to work overtime, weekends, and nights when required.</p>
              <p>➮&nbsp;Must be able to work as a team member.</p>
            </div>
            <div className="text-2xl font-semibold my-3">Qualifications:</div>
            <div className="flex flex-col space-y-0">
              <p>➮&nbsp;Must have a valid driver's license.</p>
              <p>➮&nbsp;One or more years of experience in construction.</p>
              <p>➮&nbsp;Must pass a pre-hire drug test.</p>
            </div>
            <div className="text-2xl font-bold mt-7">Vector Construction is an Equal Opportunity Employer.</div>
            <div className="h-min">
              <div>
                <Formik
                  initialValues={{
                    name: '',
                    phone: '',
                    address: '',
                    email: '',
                    workExperience: '',
                    resume: null,
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting, setFieldValue }) => (
                    <Form className="rounded-lg py-9" encType="multipart/form-data">
                      <div className="mb-4">
                        <label className="block font-medium mb-2" htmlFor="name">
                          Name*
                        </label>
                        <Field
                          className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight bg-white"
                          name="name"
                          placeholder="Name*"
                        />
                        <ErrorMessage name="name" component="div" className="text-red-500" />
                      </div>
                      <div className="mb-4">
                        <label className="block font-medium mb-2" htmlFor="phone">
                          Phone Number*
                        </label>
                        <Field
                          className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight"
                          name="phone"
                          placeholder="Phone Number*"
                        />
                        <ErrorMessage name="phone" component="div" className="text-red-500" />
                      </div>
                      <div className="mb-4">
                        <label className="block font-medium mb-2" htmlFor="address">
                          Address*
                        </label>
                        <Field
                          className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight"
                          name="address"
                          placeholder="Address*"
                        />
                        <ErrorMessage name="address" component="div" className="text-red-500" />
                      </div>
                      <div className="mb-4">
                        <label className="block font-medium mb-2" htmlFor="email">
                          Email
                        </label>
                        <Field
                          className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight"
                          name="email"
                          placeholder="Email"
                          type="email"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block font-medium mb-2" htmlFor="workExperience">
                          Work Experience
                        </label>
                        <Field
                          className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight"
                          name="workExperience"
                          placeholder="Work Experience"
                          component="textarea"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block font-medium mb-2" htmlFor="resume">
                          Resume*
                        </label>
                        <input
                          className="border-2 bg-[#f8f8f8] border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight"
                          name="resume"
                          type="file"
                          onChange={(event) => {
                            setFieldValue("resume", event.currentTarget.files[0]);
                          }}
                        />
                        <ErrorMessage name="resume" component="div" className="text-red-500" />
                      </div>
                      <button
                        className="bg-[#234d91] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employment;

