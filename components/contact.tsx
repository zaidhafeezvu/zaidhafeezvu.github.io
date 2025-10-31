"use client";
import React, { useRef, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current || isSubmitting) return;
    
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_caqq35d",
        "template_lg7p1pn",
        form.current,
        "7HSKk-xd76xWIGwT3"
      );
      toast.success("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Email send error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full max-w-2xl mx-auto p-6 bg-white" id="contact">
      <ToastContainer position="top-right" hideProgressBar />
      
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
        Get In Touch
      </h2>
      
      <p className="text-center text-gray-600 mb-8">
        Contact me directly at{" "}
        <a 
          className="text-gray-900 underline hover:no-underline transition-all" 
          href="mailto:zaidhafeez47@gmail.com"
        >
          inquiry.webdev@zaidcode.me
        </a>{" "}
        or use the form below.
      </p>

      <form ref={form} onSubmit={sendEmail} className="space-y-5">
        <input
          className="w-full h-12 px-4 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:border-gray-600 focus:outline-none transition-colors"
          name="name"
          type="text"
          required
          maxLength={100}
          placeholder="Your name"
          disabled={isSubmitting}
        />
        
        <input
          className="w-full h-12 px-4 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:border-gray-600 focus:outline-none transition-colors"
          name="email"
          type="email"
          required
          maxLength={100}
          placeholder="Your email"
          disabled={isSubmitting}
        />
        
        <textarea
          className="w-full h-32 px-4 py-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:border-gray-600 focus:outline-none transition-colors resize-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={1000}
          disabled={isSubmitting}
        />
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="  px-4 py-2 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};