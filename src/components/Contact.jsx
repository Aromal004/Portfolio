import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null); // Reference to the form
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_14w9oyc"; 
    const templateId = "template_djwbuzs"; 
    const publicKey = "1XjIdEB0FSSS_V-c3"; 

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setIsSent(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <motion.div 
      id="Contact"
      className="flex flex-col items-center justify-center min-h-screen px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Title Animation */}
      <motion.h2 
        className="my-20 text-center text-3xl lg:text-6xl lg:leading-normal tracking-tight font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Contact <span className="text-cyan-400">Me</span>
      </motion.h2>

      <motion.form 
        ref={formRef}
        onSubmit={handleSubmit} 
        className="grid md:grid-cols-2 gap-6 w-full max-w-4xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Side Inputs */}
        <div className="flex flex-col gap-4">
          {["name", "email", "phone", "subject"].map((field, index) => (
            <motion.input
              key={field}
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={formData[field]}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-gray-700 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            />
          ))}
        </div>

        {/* Right Side Message Box */}
        <motion.textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 border-2 border-gray-700 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 h-40 md:h-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        ></motion.textarea>

        {/* Submit Button */}
        <motion.button 
          type="submit" 
          className="bg-cyan-500 text-white font-bold py-3 px-6 rounded-md transition-transform hover:scale-105 active:scale-95 focus:outline-none md:col-span-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          Send Message
        </motion.button>
      </motion.form>

      {isSent && (
        <motion.p 
          className="mt-4 text-green-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          ✅ Message sent successfully!
        </motion.p>
      )}
    </motion.div>
  );
};

export default Contact;
