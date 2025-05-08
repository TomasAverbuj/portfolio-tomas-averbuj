import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w6gn4sg",
        "template_98fap2n",
        form.current,
        "QZF9PN3HZEGWIIr6S"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensaje enviado con éxito ✅");
        },
        (error) => {
          console.log(error.text);
          alert("Ocurrió un error al enviar el mensaje ❌");
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="min-h-screen w-full bg-[#1e1e1e] text-white py-20 px-4 flex items-center justify-center">
      <div className="w-full max-w-5xl flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center text-[#4fd1c5] mb-12">
          Contacto
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-lg bg-[#2a2a2a] p-8 rounded-2xl shadow-xl mb-12"
        >
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-[#e2e2e2]">
              Nombre
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full p-4 rounded-lg bg-[#3a3a3a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4fd1c5] transition-all duration-300"
              placeholder="Tu nombre"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-semibold text-[#e2e2e2]">
              Correo electrónico
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full p-4 rounded-lg bg-[#3a3a3a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4fd1c5] transition-all duration-300"
              placeholder="tuemail@ejemplo.com"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-semibold text-[#e2e2e2]">
              Mensaje
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-4 rounded-lg bg-[#3a3a3a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4fd1c5] transition-all duration-300"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#4fd1c5] to-[#3CE3CB] text-black font-semibold py-4 rounded-lg hover:from-[#38b2ac] hover:to-[#2cd3bc] hover:shadow-lg transition-all duration-300"
          >
            Enviar mensaje
          </button>
        </form>

        <div className="flex flex-wrap justify-center gap-4 w-full max-w-lg">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=totoaverbuj@gmail.com&su=Propuesta laboral"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#2a2a2a] text-white rounded-full hover:bg-[#3a3a3a] transition transform hover:scale-105 shadow-lg cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>totoaverbuj@gmail.com</span>
          </a>
          <a
            href="tel:+541169729914"
            className="flex items-center gap-2 px-6 py-3 bg-[#2a2a2a] text-white rounded-full hover:bg-[#3a3a3a] transition transform hover:scale-105 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>+54 11 6972-9914</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;