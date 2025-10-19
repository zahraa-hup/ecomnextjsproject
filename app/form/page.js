"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function page() {
  const form = useRef();
  const [mesdata, setmesdata] = useState({
    username: "",
    useremail: "",
    message: "",
  });
  function handleformsend(e) {
    e.preventDefault();
  }
  function handdlesendclicked() {
    if (
      mesdata.username != "" &&
      mesdata.useremail != "" &&
      mesdata.message != ""
    ) {
      emailjs
        .sendForm("service_q4gusv8", "template_fcehe1n", form.current, {
          publicKey: "__DJKgm-L2CSWJfI3",
        })
        .then(function (res) {
          console.log(res);
          toast.success("Your Email sended successfuly ✔🎉", {
            theme: "dark",
          });
          setmesdata({ username: "", useremail: "", message: "" });
        })
        .catch(function (error) {
          toast.error("Error Sending Email ✖😔", {
            theme: "dark",
          });
        });
    } else {
      console.log("write fileds")
    }
    
  }
  return (
    <div className="h-[100vh] flex items-center justify-center img w-full text-white flex-col">
      <div className="text-3xl ">Contact Us</div>
      <form
        className="flex flex-col w-[100%] md:w-[50%]"
        onSubmit={function (e) {
          handleformsend(e);
        }}
        ref={form}
      >
        <input
          className=" p-3 mt-5  x rounded-sm block mx-3"
          placeholder="name"
          name="name"
          required
          value={mesdata.username}
          onChange={(e) => {
            setmesdata({...mesdata, username :e.target.value});
          }}
        />
        <input
          className=" p-3 mt-5  x rounded-sm block mx-3"
          type="email "
          placeholder="email"
          name="email"
          value={mesdata.useremail}
          required
          onChange={(e) => {
            setmesdata({...mesdata, useremail : e.target.value});
          }}
        />
        <textarea
          className=" p-3 mt-5  x rounded-sm resize-none block mx-3"
          placeholder="message"
          name="message"
          required
          value={mesdata.message}
          onChange={(e) => {
            setmesdata({...mesdata, message : e.target.value});
          }}
        ></textarea>
        <button
          onClick={handdlesendclicked}
          type="submit"
          className="mt-10 bg-amber-600 p-3 rounded-sm cursor-pointer hover:bg-amber-700 block mx-3"
        >
          Send Your message
        </button>
      </form>
      <ToastContainer theme="dark" />
    </div>
  );
}

export default page;
