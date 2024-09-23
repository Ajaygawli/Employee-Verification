import axios from 'axios';
import React, { useState } from 'react'

import config from '../configuration/config';

import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin=async()=>{
    try {
      console.log(username,password)
      const response= await axios.post(`${config.baseURL}/api/user/login`,{
      username,
      password
      })

      
      const data= response.data
        if(response.status===200){
          toast.success("Login Successfully.....")
          localStorage.setItem("token",data.token);
          localStorage.setItem("user", data.user)

          navigate("/admin")
        }

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
    <div className="w-full container mx-auto">
        <div className="grid md:grid-cols-2 items-center  grid-cols-1 mt-[5rem] ">
          <div className="p-5 ml-10">

            <div className=" flex gap-[15rem]">
              <div className="  flex flex-col items-center justify-start gap-[4px_0px]">
               
              </div>

            


            </div>

            <div className="self-stretch flex flex-col items-start justify-center mt-12">
              <div className="">Welcome back!!</div>
              <div className="text-blue-300 cursor-pointer" onClick={()=>navigate("/register")}>New Here Please Resgister!</div>
            </div>


            <div>
              <div className="mt-3 flex flex-col items-start justify-start gap-[8px_0px]">
                <div className="">
                 Username 
                </div>

                <input
                  type="text"
                  className="w-[50%] mt-2 h-12 px-4 border border-gray-300 rounded focus:outline-none focus:border-relia-energy-primary-color"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                />

              </div>

              <div className="mt-3 flex flex-col items-start justify-start gap-[8px_0px]">
                <div className="">Password </div>
                <input
                  type="password"
                  className="w-[50%] mt-2 h-12 px-4 border border-gray-300 rounded focus:outline-none focus:border-relia-energy-primary-color"
                
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className=" mt-3 flex flex-row items-start justify-start gap-[0px_76px] text-grey-70">
               

              </div>

              <button className="w-[50%] mt-4 rounded-3xs [background:linear-gradient(135deg,_#14add5,_#384295)] h-[50px] flex flex-row items-center justify-center p-2.5 box-border text-white"
              onClick={()=>handleLogin()}
              >
                <div className="relative leading-[24px]">Login In</div>
              </button>

       
            </div>


          </div>
          {/* image div  */}
          <div className="col-span-1">
            <img
              className=" hidden w-[90%] rounded-sm   object-cover md:block "
              alt=""
              src="/images/loginbanner.webp"
            />
          </div>
        </div>

      </div>



    </>
  )
}

export default Login
