
import React, { useState } from 'react';
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';
import config from '../configuration/config';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const navigate= useNavigate()
    const [formData, setFormData] = useState({
        companyName: '',
        registrationNo: '',
        email: '',
        companyGstNo: '',
        companyPan: '',
        companyService: '',
        companyRepresentative: '',
        companyAddress: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${config.baseURL}/register/company`, formData);
            console.log('Registration Successful:', response.data);
            toast.success("You have been Registered")
            navigate("/")
        } catch (error) {
            console.error('Error during registration:', error);
            toast.error("something went wrong")
        }
    };

    return (
        <div>
            <section className="mt-10">
                <div className="container h-full px-6 py-24">
                    <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="w-full"
                                alt="Phone image"
                            />
                        </div>
                        <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                            <form onSubmit={handleSubmit}>
                                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-3 '>
                                    <div className="mt-4 text-left">
                                        <label htmlFor="companyName" className="block text-sm text-gray-700 text-left">Company name</label>
                                        <input type="text" id="companyName" className="mt-2 h-10 px-4 border rounded-md" placeholder="Enter company name" onChange={handleChange} />
                                    </div>
                                    <div className="mt-4 text-left">
                                        <label htmlFor="registrationNo" className="block text-sm text-gray-700 text-left">Registration No.</label>
                                        <input type="Number" id="registrationNo" className="mt-2 h-10 px-4 border rounded-md" placeholder="Enter Registration No." onChange={handleChange} />
                                    </div>
                                    <div className="mt-4 text-left">
                                        <label htmlFor="email" className="block text-sm text-gray-700 text-left">Email</label>
                                        <input type="email" id="email" className="mt-2 h-10 px-4 border rounded-md" placeholder="Enter company email" onChange={handleChange} />
                                    </div>
                                    <div className="mt-4 text-left">
                                        <label htmlFor="companyGstNo" className="block text-sm text-gray-700 text-left">Company Gst No</label>
                                        <input type="text" id="companyGstNo" className="mt-2 h-10 px-4 border rounded-md" placeholder="Enter Company Gst number" onChange={handleChange} />
                                    </div>
                                    <div className="mt-4 text-left">
                                        <label htmlFor="companyPan" className="block text-sm text-gray-700 text-left">Pan number</label>
                                        <input type="text" id="companyPan" className="mt-2 h-10 px-4 border rounded-md" placeholder="Enter your pan" onChange={handleChange} />
                                    </div>
                                    <div className="mt-4 text-left">
                                        <label htmlFor="companyService" className="block text-sm text-gray-700 text-left">Company Service</label>
                                        <input type="text" id="companyService" className="mt-2 h-10 px-4 border rounded-md" placeholder="Enter Company Service" onChange={handleChange} />
                                    </div>
                                    <div className="mt-4 text-left">
                                        <label htmlFor="companyRepresentative" className="block text-sm text-gray-700 text-left">Company Representative</label>
                                        <input type="text" id="companyRepresentative" className="mt-2 h-10 px-4 border rounded-md" placeholder="Enter Representative" onChange={handleChange} />
                                    </div>
                                    <div className="mt-4 text-left">
                                        <label htmlFor="companyAddress" className="block text-sm text-gray-700 text-left">Company Address</label>
                                        <input type="text" id="companyAddress" className="mt-2 h-10 px-4 border rounded-md" placeholder="Enter Company Address" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="w-full mt-5 flex justify-center">
                                    <button type="submit" className="w-40 rounded-3xs h-[46px] p-2.5 text-white" style={{ background: 'linear-gradient(135deg, #14add5, #384295)' }}>
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Registration;
