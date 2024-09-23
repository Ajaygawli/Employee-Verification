
import React, { useEffect, useState } from 'react';
import { Table, Pagination } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../configuration/config';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



const CompaniesDetails = () => {

const [data, setdata]= useState([])
    useEffect(()=>{
            fetchdata()
    },[])


    const fetchdata=async()=>{
        try {
            const response = await axios.get(`${config.baseURL}/api/admin/get-companies`)
            console.log(response.data)
            setdata(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    
const columns = [
    {
        title: "S/N",
        dataIndex: "serialNumber",
        key: "serialNumber",
        render: (_, __, index) => index + 1,
    },
    {
        title: 'Company Name',
        dataIndex: 'companyName',
        key: 'companyName',
    },
    {
        title: 'Registration No.',
        dataIndex: 'registrationNo',
        key: 'registrationNo',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Company GST No.',
        dataIndex: 'companyGstNo',
        key: 'companyGstNo',
    },
    {
        title: 'Company PAN',
        dataIndex: 'companyPan',
        key: 'companyPan',
    },
    {
        title: 'Company Service',
        dataIndex: 'companyService',
        key: 'companyService',
    },
    {
        title: 'Company Representative',
        dataIndex: 'companyRepresentative',
        key: 'companyRepresentative',
    },
    {
        title: 'Company Address',
        dataIndex: 'companyAddress',
        key: 'companyAddress',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <button onClick={() => handleDelete(record._id)}>Delete</button>
        ),
    },

];

const handleDelete = async (id) => {
    try {
        // Call delete API
        const response = await axios.delete(`${config.baseURL}/api/admin/delete-company/${id}`);

        // Assuming the response is successful
        if (response.status === 200) {
            toast.success('Record deleted successfully');

            // Optionally refresh or filter out the deleted record from your data
            setData(prevData => prevData.filter(item => item._id !== id));
        }
    } catch (error) {
        toast.error('Failed to delete record');
        console.error("Delete error:", error);
    }
};
    return (
        <div className='w-full'>

            <div className="mt-2">

                <div className="bg-white rounded-xl shadow-md mt-6 p-3">
                    <div className="font-bold md:text-base flex mt-3">All Companies</div>
                    <div className="overflow-auto md:overflow-auto  md:overflow-x-scroll mt-6  text-left text-xl text-black font-body-3-small">
                        <div className=" text-xs text-grey-70">
                            <Table
                                columns={columns}
                                dataSource={data}
                                pagination={{ pageSize: 4 }}
                                size="middle"
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/* <Pagination className="mt-4" defaultCurrent={1} total={6} pageSize={2} /> */}



        </div>
    );
}

export default CompaniesDetails






