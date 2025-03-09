import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">
        <h1 className="text-4xl font-bold mb-8 text-black">Contact Me</h1>

        <form>
          <label htmlFor="email" className="block text-lg font-semibold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
            required
          />

          <label htmlFor="message" className="block text-lg font-semibold mb-2">
            Message:
          </label>
          <textarea
            id="message"
            placeholder="Your message"
            className="w-full p-2 mb-6 border border-gray-300 rounded-md"
            required
          />

          {/* Button as link to open email client */}
          <a
            href="mailto:reynaldstar@gmail.com?subject=Contact%20from%20Website&body="
            className="inline-block bg-blue-500 text-white py-2 px-6 rounded-lg text-lg transition duration-300 hover:bg-blue-600"
          >
            Send
          </a>
        </form>
      </div>
    </section>
  );
};

export default Contact;
