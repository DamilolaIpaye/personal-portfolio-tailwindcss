import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 text-center">Contact</h2>
            <p className="text-gray-600 text-center mt-2">
              Feel free to reach out if you have any questions or observations!
            </p>
    
            {/* Contact Form */}
            <form className="mt-6 flex flex-col gap-4">
              <div>
                <label className="text-gray-700 font-medium">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
    
              <div>
                <label className="text-gray-700 font-medium">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
    
              <div>
                <label className="text-gray-700 font-medium">Message</label>
                <textarea
                  rows="4"
                  placeholder="Enter your message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                ></textarea>
              </div>
    
              <button
                type="submit"
                className="w-full bg-primary text-black py-2 rounded-lg font-medium hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      );
    };
    
    export default Contact;