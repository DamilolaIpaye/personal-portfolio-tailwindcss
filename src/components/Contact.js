import React from 'react';

const Contact = () => {
    return (
      <section id="contact" className="bg-white py-6 px-4 md:px-8 lg:px-16">
      <div className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Contact Me</h2>
        <p className="text-sm text-gray-600 text-center mt-1">
          Feel free to reach out if you have any questions or observations!
        </p>
    
            {/* Contact Form */}
            <form className="mt-4 flex flex-col gap-3">
              <div>
                <label className="text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                  required
                />
              </div>
    
              <div>
                <label className="text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                  required
                />
              </div>
    
              <div>
                <label className="text-gray-700 font-medium">Message</label>
                <textarea
                  rows="4"
                  placeholder="Enter your message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                  required
                ></textarea>
              </div>
    
              <button
  type="submit"
  className="mx-auto w-40 bg-primary text-black py-2 rounded-lg font-medium hover:bg-black hover:text-white transition"
>
  Send 
</button>
            </form>
          </div>
        </section>
      );
    };
    
    export default Contact;