import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm({ dark = true }) {
  const form = useRef(null);
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .sendForm("service_w6gn4sg", "template_98fap2n", form.current, "QZF9PN3HZEGWIIr6S")
      .then(() => {
        setStatus("ok");
        e.target.reset();
      })
      .catch(() => setStatus("error"));
  };

  const line = dark
    ? "w-full bg-transparent border-0 border-b border-paper/25 focus:border-paper text-paper placeholder:text-muted py-4 focus:outline-none transition-colors"
    : "w-full bg-transparent border-0 border-b border-ink/20 focus:border-ink text-ink placeholder:text-ink/40 py-4 focus:outline-none transition-colors";

  return (
    <form ref={form} onSubmit={sendEmail} className="w-full">
      <div className="grid md:grid-cols-2 gap-8">
        <input type="text" name="user_name" required className={line} placeholder="Nombre" />
        <input type="email" name="user_email" required className={line} placeholder="Email" />
      </div>
      <textarea
        name="message"
        rows="4"
        required
        className={`${line} mt-8 resize-none`}
        placeholder="Contame sobre el proyecto"
      />
      <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className={`self-start font-syne text-[11px] tracking-[0.2em] uppercase px-8 py-4 transition-colors disabled:opacity-60 ${
            dark ? "bg-mist text-ink hover:bg-paper" : "bg-ink text-paper hover:bg-ink/80"
          }`}
        >
          {status === "sending" ? "Enviando…" : "Enviar mensaje"}
        </button>
        {status === "ok" && <p className="text-sm text-paper/80">Listo. Te respondo pronto.</p>}
        {status === "error" && (
          <p className="text-sm text-red-400">No se pudo enviar. Probá de nuevo o escribinme por mail.</p>
        )}
      </div>
    </form>
  );
}
