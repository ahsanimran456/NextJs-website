"use client";
import React, { useEffect, useState } from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/utils/cn";
import { red } from '@mui/material/colors';
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import loginimg from "../../../public/Images/login2.png"
import { Checkbox } from "@mui/material";
import Link from "next/link";


function CredentailForm({ title }) {
    const [Type, setType] = useState("customer");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    const LoginFieldList = [
        {
            name: "email",
            label: "Email Address",
            placeholder: "Enter your email",
            type: "email",
        },
        {
            name: "password",
            label: "Password",
            placeholder: "Enter your password",
            type: "password",
        },

    ]

    const SignupFieldList = [
        {
            name: "name",
            label: "Name",
            placeholder: "Enter your name",
            type: "email",
        },
        {
            name: "email",
            label: "Email Address",
            placeholder: "Enter your email",
            type: "email",
        },
        {
            name: "phoneNumber",
            label: "Phone Number",
            placeholder: "Enter your email",
            type: "number",
        },
        {
            name: "country",
            label: "Select Country",
            placeholder: "Enter your country",
            type: "email",
        },
        {
            name: "city",
            label: "Select City",
            placeholder: "Enter your city",
            type: "email",
        },
        {
            name: "password",
            label: "Password",
            placeholder: "Enter your password",
            type: "password",
        },
        {
            name: "confirmpassword",
            label: "Confirm Password",
            placeholder: "Enter your password",
            type: "password",
        },

    ]


    const fieldlisting = title === "login" ? LoginFieldList : SignupFieldList


    return (
        <div className="">
            <BackgroundGradient className="rounded-[22px] max-w-lg  bg-white dark:bg-zinc-900 overflow-hidden">
                <div className="max-w-lg min-w-[25rem] md:min-w-[30rem] w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
                    <div className="flex justify-center items-center gap-3 ">
                        <button
                            className={`
                            ${Type === "customer" ? "text-white from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br" : "text-[#a2a0a0]"}  
                            bg-gradient-to-r rounded-2xl relative group/btn w-full h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]
                        `}
                            type="submit"
                            onClick={(e) => setType("customer")}
                        >
                            Customer
                        </button>
                        <button
                            className={`
                            ${Type === "merchant" ? "text-white from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br" : "text-[#a2a0a0]"}  
                            bg-gradient-to-r rounded-2xl relative group/btn w-full h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]
                        `}
                            type="submit"
                            onClick={(e) => setType("merchant")}
                        >
                            Merchant
                        </button>
                    </div>
                    <form className="my-5" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap -mx-2">
                            {
                                fieldlisting.map((item, index) => {
                                    return (
                                        <LabelInputContainer
                                            className={cn("mb-4 px-2", { 'w-full md:w-1/2': title === "signup", 'w-full': title !== "signup" })}
                                            key={index}
                                        >
                                            <Label htmlFor={item.label}>{item.label}</Label>
                                            <Input name={item.label} placeholder={item.placeholder} type={item.type} />
                                        </LabelInputContainer>
                                    )
                                })
                            }
                        </div>
                        {/* this is for  login  */}
                        {title === "login" ?
                            <>
                                <div className="flex justify-between items-center mb-3">
                                    <div>
                                        <Checkbox
                                            defaultChecked
                                            size="small"
                                            sx={{
                                                color: red[800],
                                                '&.Mui-checked': {
                                                    color: red[600],
                                                },
                                            }}
                                        />
                                        <span className="text-sm text-[#737272]" >
                                            Remember me
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-sm text-[#737272] cursor-pointer">
                                            Forgot Password?
                                        </span>
                                    </div>
                                </div>
                                <button
                                    className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br         relative group/btn  dark:from-zinc-900 dark:to-zinc-900 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                                    type="submit"
                                >
                                    Login
                                </button>
                                <div className="flex justify-center  mt-5">
                                    <Link href="signup">
                                        <span className="text-sm  text-[#737272] cursor-pointer">New Member? <span className="text-sm  text-[#dc2626]">Sign up now</span></span>
                                    </Link>
                                </div>
                                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                            </>
                            :
                            <>
                                <div className="flex justify-between items-center mb-3">
                                    <div>
                                        <Checkbox
                                            defaultChecked
                                            size="small"
                                            sx={{
                                                color: red[800],
                                                '&.Mui-checked': {
                                                    color: red[600],
                                                },
                                            }}
                                        />
                                        <span className="text-sm text-[#737272] cursor-pointer" >
                                            By checking the box you agree to our <span className="text-[#dc2626]">Terms</span> and <span className="text-[#dc2626]">Conditions.</span>
                                        </span>
                                    </div>
                                </div>
                                <button
                                    className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br         relative group/btn  dark:from-zinc-900 dark:to-zinc-900 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                                    type="submit"
                                >
                                    Sign Up
                                </button>
                                <div className="flex justify-center mt-5">
                                    <Link href="login">
                                        <span className="text-sm  text-[#737272] cursor-pointer">Already a Member? <span className="text-sm  text-[#dc2626]">Login</span></span>
                                    </Link>
                                </div>
                            </>
                        }
                    </form>
                </div>
            </BackgroundGradient>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({ children, className }) => {
    return (
        <div className={cn("flex flex-col space-y-2", className)}>
            {children}
        </div>
    );
};

export default CredentailForm