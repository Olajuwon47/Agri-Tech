'use client';

import { useState } from 'react';
import { toast, Toaster } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please complete all required fields ✍️');
      return;
    }

    try {
      // Simulate form submission
      await new Promise((resolve, reject) => {
        setTimeout(() => Math.random() > 0.2 ? resolve(true) : reject(new Error('Network error')), 1000);
      });

      toast.success("Message sent! We'll respond shortly.");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-100 to-yellow-100 px-4 py-12 max-sm:px-3 max-sm:py-8 max-md:px-5 lg:px-8">
      <Toaster position="top-right" expand={false} richColors closeButton />

      {/* Header */}
      <div className="text-center mb-12 max-sm:mb-8">
        <h1 className="text-4xl mt-8 font-bold text-gray-900 mb-4 max-sm:text-2xl max-md:text-3xl">Connect With Us</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto max-sm:text-sm max-md:text-base">
          Reach out to our agricultural experts. Whether you're a farmer, distributor, or enthusiast, we're here to help your agricultural journey thrive.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 max-sm:gap-8 max-md:gap-10">
        {/* Contact Info */}
        <div className="space-y-8 max-sm:space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-lime-100 max-sm:p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 max-sm:text-xl">Get in Touch</h2>

            <div className="space-y-6">
              {[
                { icon: '📍', title: 'Our Farm Location', text: '12 Unity Street, Ikeja\nLagos, Nigeria' },
                { icon: '📞', title: 'Call Us', text: '+234 812 345 6789\nMon - Fri, 8am - 6pm' },
                { icon: '✉️', title: 'Email Us', text: 'contact@jaywontravels.com\nResponse within 24 hours' },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0 max-sm:w-10 max-sm:h-10">
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-700 text-sm whitespace-pre-line">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-lime-500/10 rounded-2xl p-6 border border-lime-200 max-sm:p-4">
            <h3 className="font-semibold text-gray-900 mb-4 text-center">Why Farmers Choose Us</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              {[
                { value: '500+', label: 'Happy Farmers' },
                { value: '24h', label: 'Response Time' },
                { value: '15+', label: 'Years Experience' },
                { value: '98%', label: 'Satisfaction Rate' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold text-lime-700">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-lime-100 max-sm:p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 max-sm:text-xl">Send Us a Message</h2>
          <p className="text-gray-600 mb-6 max-sm:text-sm">Let's discuss how we can help your farm thrive</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <InputField id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="John Farmer" required label="Full Name *" />
              <InputField id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required label="Email Address *" />
            </div>

            <InputField id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} placeholder="e.g., Crop Consultation" required={false} label="Subject" />

            <TextArea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your agricultural needs..." required label="Your Message *" />

            <button type="submit" className="w-full bg-gradient-to-r from-lime-500 to-yellow-500 text-white font-semibold py-3 px-6 rounded-md hover:from-lime-600 hover:to-yellow-600 focus:ring-2 focus:ring-lime-500 transition-all duration-200 shadow-lg hover:shadow-xl max-sm:py-2.5">Send Message & Grow Together</button>
            <p className="text-center text-sm text-gray-600 max-sm:text-xs">Our agricultural experts will respond within 1 business day</p>
          </form>
        </div>
      </div>
    </div>
  );
}

function InputField({ id, name, type, value, onChange, placeholder, required, label }: any) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-900 mb-2 max-sm:text-xs">{label}</label>
      <input id={id} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} required={required} className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-colors max-sm:py-2" />
    </div>
  );
}

function TextArea({ id, name, value, onChange, placeholder, required, label }: any) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-900 mb-2 max-sm:text-xs">{label}</label>
      <textarea id={id} name={name} value={value} onChange={onChange} placeholder={placeholder} required={required} rows={5} className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-colors resize-none max-sm:py-2" />
    </div>
  );
}
