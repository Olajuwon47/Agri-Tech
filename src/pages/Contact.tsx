'use client'

import { useState } from 'react'
import { toast, Toaster } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields ✍️.');
      return;
    }

    // Simulate form submission with promise
    const submissionPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate random success/failure for demo
        const isSuccess = Math.random() > 0.2; // 80% success rate
        if (isSuccess) {
          resolve('Success');
        } else {
          reject(new Error('Network error'));
        }
      }, 1000);
    });

    toast.promise(submissionPromise, {
      loading: 'Sending your message...',
      success: () => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        return "Message sent! I'll get back to you soon.";
      },
      error: 'Failed to send message. Please try again.'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-100 to-yellow-100 px-4 py-12 max-sm:px-3 max-sm:py-8 max-md:px-5 lg:px-8">
      {/* Add Toaster here - it will only show toasts from this page */}
      <Toaster 
        position="top-right"
        expand={false}
        richColors
        closeButton
      />
      
      {/* Header Section */}
      <div className="text-center mb-12 max-sm:mb-8">
        <h1 className="text-4xl mt-8 font-bold text-gray-900 mb-4 max-sm:text-2xl max-md:text-3xl">
          Connect With Us
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto max-sm:text-sm max-md:text-base">
          Connect with our agricultural experts. Whether you're a farmer, distributor, 
          or enthusiast, we're here to help your agricultural journey flourish.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 max-sm:gap-8 max-md:gap-10">
        {/* Contact Information */}
        <div className="space-y-8 max-sm:space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-lime-100 max-sm:p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 max-sm:text-xl">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0 max-sm:w-10 max-sm:h-10">
                  <span className="text-lg">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Our Farm Location</h3>
                  <p className="text-gray-700 text-sm">12 Unity Street, Ikeja<br />Lagos, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center flex-shrink-0 max-sm:w-10 max-sm:h-10">
                  <span className="text-lg">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                  <p className="text-gray-700 text-sm">+234 812 345 6789<br />Mon - Fri, 8am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0 max-sm:w-10 max-sm:h-10">
                  <span className="text-lg">✉️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-700 text-sm">contact@jaywontravels.com<br />We reply within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-lime-500/10 rounded-2xl p-6 border border-lime-200 max-sm:p-4">
            <h3 className="font-semibold text-gray-900 mb-4 text-center">Why Farmers Choose Us</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-lime-700">500+</div>
                <div className="text-xs text-gray-600">Happy Farmers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-lime-700">24h</div>
                <div className="text-xs text-gray-600">Response Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-lime-700">15+</div>
                <div className="text-xs text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-lime-700">98%</div>
                <div className="text-xs text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-lime-100 max-sm:p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 max-sm:text-xl">Send Us a Message</h2>
          <p className="text-gray-600 mb-6 max-sm:text-sm">Let's discuss how we can help your farm thrive</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2 max-sm:text-xs">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  required
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-colors max-sm:py-2"
                  placeholder="John Farmer"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2 max-sm:text-xs">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-colors max-sm:py-2"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2 max-sm:text-xs">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-colors max-sm:py-2"
                placeholder="e.g., Crop Consultation"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2 max-sm:text-xs">
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                required
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-colors resize-none max-sm:py-2"
                placeholder="Tell us about your agricultural needs..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-lime-500 to-yellow-500 text-white cursor-pointer font-semibold py-3 px-6 rounded-md hover:from-lime-600 hover:to-yellow-600 focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl max-sm:py-2.5"
            >
              Send Message & Grow Together
            </button>

            <p className="text-center text-sm text-gray-600 max-sm:text-xs">
              Our agricultural experts will respond within 1 business day
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}