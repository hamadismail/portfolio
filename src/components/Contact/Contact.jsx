import React, { useRef } from "react";
import { HiOutlineMail, HiOutlineArrowSmRight } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        form.current,
        import.meta.env.VITE_PUBLIC_API
      )
      .then(
        (result) => {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Message Send Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.text,
          });
        }
      );
    e.target.reset();
  };

  return (
    <section className="max-6xl mx-auto py-16 px-4" id="contact">
      <h2 className="text-3xl font-bold text-[#333] text-center mb-2">
        Let's Connect
      </h2>
      <span className="block text-center text-gray-500 mb-12">Contact Me</span>

      <div className="grid md:grid-cols-[max-content_max-content] justify-center gap-16 pb-12">
        <div className="">
          <h3 className="text-xl font-semibold text-center mb-6 text-[#333]">
            Talk to me
          </h3>

          <div className="grid gap-4 max-w-xs mb-4 mx-auto">
            <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl text-center shadow">
              <HiOutlineMail className="text-3xl text-gray-800 mb-2 mx-auto" />
              <h3 className="font-semibold text-sm text-gray-500">Email</h3>
              <span className="block text-xs text-gray-500 mb-2">
                hamad.ismail.gub@gmail.com
              </span>
              <a
                href="mailto:hamad.ismail.gub@gmail.com"
                className="inline-flex items-center text-sm text-gray-700 hover:text-[#9fbc49] hover:underline"
              >
                Write Me{" "}
                <HiOutlineArrowSmRight className="ml-1 text-base transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          <div className="grid gap-4 max-w-xs mx-auto">
            <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl text-center shadow">
              <FaWhatsapp className="text-3xl text-gray-800 mb-2 mx-auto" />
              <h3 className="font-semibold text-sm text-gray-500">WhatsApp</h3>
              <span className="block text-xs text-gray-500 mb-2">
                +880 1816401515
              </span>
              <a
                href="https://wa.me/8801816401515?text=Hello%2C%20I%20found%20your%20portfolio!"
                className="inline-flex items-center text-sm text-gray-700 hover:text-[#9fbc49] hover:underline"
              >
                Write Me{" "}
                <HiOutlineArrowSmRight className="ml-1 text-base transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="">
          <h3 className="text-xl font-semibold text-center text-[#333] mb-6">
            What's the project?
          </h3>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-[360px] max-w-full mx-auto space-y-6"
          >
            <div className="relative h-16">
              <label className="absolute -top-2 left-5 text-sm bg-white text-[#333] font-semibold px-1 z-10">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Type your name"
                className="absolute w-full h-full border-2 border-gray-300 rounded-lg p-4 bg-transparent text-sm outline-none"
              />
            </div>

            <div className="relative h-16">
              <label className="absolute -top-2 left-5 text-sm bg-white text-[#333] font-semibold px-1 z-10">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Type your email"
                className="absolute w-full h-full border-2 border-gray-300 rounded-lg p-4 bg-transparent text-sm outline-none"
              />
            </div>

            <div className="relative h-44">
              <label className="absolute -top-2 left-5 text-sm bg-white text-[#333] font-semibold px-1 z-10">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                rows="6"
                placeholder="Provide some project details..."
                className="absolute w-full h-full border-2 border-gray-300 rounded-lg p-4 bg-transparent text-sm resize-none outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#333] text-white hover:bg-[#9fbc49] cursor-pointer transition-colors"
            >
              Send Message
              <svg
                className="w-5 h-5 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M14.22 21.935c-1.18 0-2.85-.83-4.17-4.8l-.72-2.16-2.16-.72C3.21 12.935 2.38 11.265 2.38 10.085c0-1.17.83-2.85 4.79-4.18L15.66 3.075c2.12-.71 3.89-.5 4.98.58 1.09 1.08 1.3 2.86.59 4.98l-2.83 8.49c-1.33 3.98-3 4.81-4.18 4.81Z" />
                <path d="M10.11 14.705a.75.75 0 0 1-.53-1.28l3.58-3.59a.75.75 0 1 1 1.06 1.06l-3.58 3.59a.75.75 0 0 1-.53.22Z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
