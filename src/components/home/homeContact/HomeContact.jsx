"use client";
import React from "react";
import { FaGithub, FaLinkedinIn, FaXmark } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { RiWebcamLine } from "react-icons/ri";
import { LuHeartHandshake } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";

import Link from "next/link";
import Schedule from "@/components/calendly/Schedule";

const HomeContact = () => {
  return (
    <div className="relative text-white container mx-auto">
      {/*  <div className="relative text-white w-[85%] sm:w-[60%] lg:max-xl:w-[50%] xl:max-2xl:w-[90%] 2xl:w-[80%]"> */}
      {/* Main modal content */}
      <div className="flex items-center justify-center bg-dark-green  ">
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full items-center justify-center">
          {/* Block One */}
          <div className="w-full h-48   text-white p-4  max-md:border-b-2 xl:border-r border-green-500">
            <div className="border-b border-green-500 w-full">
              <div className="flex items-center text-white pb-2 gap-3">
                <MdOutlineMail className="text-2xl" />
                <h4 className="text-xl">Mail Us</h4>
              </div>
            </div>
            <Link href="mailto:mdmorshed.sj2005@gmail.com">
              <p className="flex items-center justify-center h-[80%] tracking-wider">
                indugro@gmail.com
              </p>
            </Link>
          </div>
          {/* Block 2 */}
          <div className="w-full h-48 text-white p-4 max-md:border-b-2 xl:border-r border-green-500">
            <div className="border-b border-green-500">
              <div className="flex items-center text-white pb-2 gap-2">
                <RiWebcamLine className="text-2xl" />
                <h4 className=" text-xl">Set a Meeting</h4>
              </div>
            </div>
            <div className=" flex items-center justify-center h-[80%]">
              <Schedule></Schedule>
            </div>
          </div>
          {/* block 3 */}
          <div className="w-full h-48 p-4  text-white">
            <div className="border-b border-green-500">
              <div className="flex items-center text-white pb-2 gap-3">
                <LuHeartHandshake className="text-2xl" />
                <h4 className=" text-xl">Stay in Touch</h4>
              </div>
            </div>

            <div className="flex items-center justify-center h-[80%] tracking-wider">
              <div className="flex gap-4">
                <Link href="https://github.com/AM-Raju" target="_blank">
                  <FaGithub className="hover:text-[#758191] text-2xl"></FaGithub>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/md-aziz-morshed/"
                  target="_blank"
                >
                  <FaLinkedinIn className="hover:text-[#0A66C2] text-2xl"></FaLinkedinIn>
                </Link>
                <Link
                  href="https://www.instagram.com/md_morshed2005/"
                  target="_blank"
                >
                  <FaInstagram className="hover:text-[#f78944] text-2xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
