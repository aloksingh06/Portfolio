import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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

  // Form submission handler
  const sendEmail = (e) => {
    e.preventDefault();

    // Validate the form values
    const errors = validate(formValue);
    setformError(errors);

    // If no errors, send the email
    if (Object.keys(errors).length === 0) {
      emailjs
        .sendForm("service_ltixdv7", "template_dgtorr3", form.current, {
          publicKey: "383dDYazopI-LttLY",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            
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
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.from_name)) {
      errors.from_name = "Invalid email format";
    }
    if (!value.message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r to-[#001233] via-[#001233] from-[rgba(0,0,0,5)] flex justify-center pt-10">
      <div className="w-full">
        <h1 className="text-5xl font-semibold text-center mb-10">Contact me</h1>

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
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
