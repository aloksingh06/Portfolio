import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import element from "../assets/element.png";
import arrow from "../assets/arrow.png";
import cross from "../assets/cross.png";

export const Contact = () => {
  const form = useRef();

  const initialValues = { to_name: "", from_name: "", message: "" };
  const [formValue, setformValue] = useState(initialValues); // Form values
  const [formError, setformError] = useState({}); // Form errors

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValue({ ...formValue, [name]: value }); // Update form values
  };

const [button, setbutton] = useState("Send")
const [success, setsuccess] = useState(null)

  // Form submission handler
  const sendEmail = (e) => {
    e.preventDefault();

    // Validate the form values
    const errors = validate(formValue);
    setformError(errors);

    // If no errors, send the email
    if (Object.keys(errors).length === 0) {
      setbutton("Sending...")
      emailjs
        .sendForm("service_ltixdv7", "template_dgtorr3", form.current, {
          publicKey: "383dDYazopI-LttLY",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            setbutton("Send")
            setsuccess("Email sent successfully!")
            setTimeout(() => {
              setsuccess(null)
            }, 2000);


            setformValue(initialValues); // Reset the form after success
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  // Form validation logic
  const validate = (value) => {
    const errors = {};
    if (!value.to_name.trim()) {
      errors.to_name = "Full Name is required";
    }
    if (!value.from_name.trim()) {
      errors.from_name = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.from_name)
    ) {
      errors.from_name = "Invalid email format";
    }
    if (!value.message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };

  return (
    <div className="contact w-full h-screen bg-gradient-to-r to-[#001233] via-[#001233] from-[rgba(0,0,0,5)] flex justify-center pt-10">
      {/* blur effect */}
      {/* project section  */}
      <div className="w-[35vw] -rotate-45 h-40 bg-gradient-to-tl to-[#60a5fa] from-[#d1495b] z-0 rounded-full absolute -z-99 top-[40%] left-5 blur-[120px] "></div>
      <div className="w-[35vw] -rotate-45 h-40 bg-gradient-to-tl to-[#b310a8] from-[#965dff] z-0 rounded-full absolute -z-99 top-[62%] left-5 blur-[120px] "></div>

      <div className="w-[40vw] rotate-180 h-40 bg-gradient-to-tl to-[#60a5fa] from-[#d1495b] z-0 rounded-full absolute -z-99 top-[51%] right-16 blur-[100px] "></div>
      <div className="w-[25vw] rotate-90 h-40 bg-gradient-to-tl to-[#b310a8] from-[#965dff] z-0 rounded-full absolute -z-99 top-[67%] -right-10 blur-[100px] "></div>
      <div className="w-[25vw] rotate-90 h-56 bg-gradient-to-tl to-[#b310a8] from-[#965dff] z-0 rounded-full absolute -z-99 top-[84%] -left-48 blur-[150px] "></div>
      <div className="w-[100%]  h-10 bg-gradient-to-tl to-[#60a5fa] from-[#d1495b] z-0  absolute -z-99 top-[13%] blur-[80px] "></div>

      {/* arrow */}
      {/* <div className=" absolute top-[58%] left-[17%] ">
        <h1 className="text-7xl font-semibold">OBYS AGENCY</h1>
      </div>

      <div className=" absolute top-[51%] left-[50%] ">
        <h1 className="text-7xl font-semibold pl-20">CINE VERSE</h1>
      </div>

      <div className=" absolute top-[60%] left-[50%] ">
        <h1 className="text-7xl font-semibold pl-20">REFOKUS</h1>
      </div> */}
      {/* <div className="absolute top-[65%] left-[19%]">
        <img className="-rotate-90 w-[45vh] " src={arrow} alt="" />
      </div> */}
      <div className="absolute top-[67%] left-[81%]">
        <img className="-rotate-90 w-[35vh] " src={cross} alt="" />
      </div>
      {/* <div className="absolute top-[80%] -left-[18%]">
        <img className="-rotate-90 w-[55vh] opacity-70 " src={cross} alt="" />
      </div> */}

      <div className="w-[58vw] rotate-90 z-0 absolute top-[12%] left-50">
        <img
          className="blur-[25px] opacity-75
    "
          src={element}
          alt=""
        />
      </div>

      <div className="w-full">
        <h1 className="text-5xl font-semibold text-center mb-2">Contact me</h1>
         <h1 className="text-center mb-10 text-green-500 text-lx">{success}</h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-5 w-[33%] m-auto"
        >
          <label>Full Name</label>
          <input
            type="text"
            name="to_name"
            className="p-2 px-5 rounded-[20px] text-slate-900"
            placeholder="Enter your full name..."
            value={formValue.to_name}
            onChange={handleChange}
          />
          {formError.to_name && (
            <p className="text-red-500 text-sm">{formError.to_name}</p>
          )}

          <label>Email</label>
          <input
            type="email"
            name="from_name"
            className="p-2 px-5 rounded-[20px] text-slate-900 "
            placeholder="Enter your Email..."
            value={formValue.from_name}
            onChange={handleChange}
          />
          {formError.from_name && (
            <p className="text-red-500 text-sm">{formError.from_name}</p>
          )}

          <label>Message</label>
          <textarea
            name="message"
            rows={8}
            className="rounded-[20px] text-slate-600 p-3"
            placeholder="Enter your message..."
            value={formValue.message}
            onChange={handleChange}
          />
          {formError.message && (
            <p className="text-red-500 text-sm">{formError.message}</p>
          )}

          <button
            type="submit"
            className="p-3 bg-blue-500 text-white rounded-[20px] hover:bg-blue-600"
            
          >
            {button}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
