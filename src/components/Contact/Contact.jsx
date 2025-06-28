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
    <section className="max-w-6xl mx-auto py-16 px-4" id="contact">
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
            className="w-[350px] max-w-full mx-auto space-y-6"
          >
            <div className="relative h-16">
              <label className="absolute -top-2 left-5 text-sm bg-white text-[#333] font-semibold px-1 z-10">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Type your name"
                className="w-full h-full border-2 border-gray-300 rounded-lg p-4 bg-transparent text-sm outline-none"
              />
            </div>

            <div className="relative h-16">
              <label className="absolute -top-2 left-5 text-sm bg-white text-[#333] font-semibold px-1 z-10">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Type your email"
                className="w-full h-full border-2 border-gray-300 rounded-lg p-4 bg-transparent text-sm outline-none"
              />
            </div>

            <div className="relative h-44">
              <label className="absolute -top-2 left-5 text-sm bg-white text-[#333] font-semibold px-1 z-10">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                required
                rows="6"
                placeholder="Provide some project details..."
                className="w-full h-full border-2 border-gray-300 rounded-lg p-4 bg-transparent text-sm resize-none outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#333] text-white hover:bg-[#9fbc49] cursor-pointer transition-colors"
            >
              Send Message
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="#fff"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="#fff"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
