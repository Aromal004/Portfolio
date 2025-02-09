import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // Un-comment this when you set up EmailJS

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
      await emailjs.send(serviceId, templateId, formData, publicKey);
      setIsSent(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6">
      <h2 className="text-4xl font-bold mb-10">
        Contact <span className="text-cyan-400">Me</span>
      </h2>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Left Side Inputs */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-style"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-style"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="input-style"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="input-style"
          />
        </div>

        {/* Right Side Message Box */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="input-style h-40 md:h-full"
        ></textarea>

        {/* Submit Button */}
        <button type="submit" className="btn-glow md:col-span-2">
          Send Message
        </button>
      </form>

      {isSent && <p className="mt-4 text-green-400">✅ Message sent successfully!</p>}
    </div>
  );
};

export default Contact;
