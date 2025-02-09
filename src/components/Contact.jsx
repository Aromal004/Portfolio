import React, { useState } from "react";
import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser"; // Un-comment when EmailJS is set up

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "your_service_id"; // Replace with EmailJS Service ID
    const templateId = "your_template_id"; // Replace with EmailJS Template ID
    const publicKey = "your_public_key"; // Replace with EmailJS Public Key

    try {
      // await emailjs.send(serviceId, templateId, formData, publicKey);
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
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Contact <span className="text-cyan-400">Me</span>
      </motion.h2>

      <motion.form 
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
              className="input-style"
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
          className="input-style h-40 md:h-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        ></motion.textarea>

        {/* Submit Button */}
        <motion.button 
          type="submit" 
          className="btn-glow md:col-span-2"
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
