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
          className="w-full max-w-lg bg-[#2a2a2a] p-8 rounded-2xl shadow-xl"
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
      </div>
    </section>
  );
};

export default Contact;