import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLang } from "../i18n/LanguageContext";
import {
  EMAIL_PUBLIC,
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "../config/email";

export default function ContactForm({ dark = true }) {
  const form = useRef(null);
  const [status, setStatus] = useState("idle");
  const [errorDetail, setErrorDetail] = useState("");
  const { m } = useLang();
  const c = m.contact;

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!form.current) return;

    const data = new FormData(form.current);
    const user_name = String(data.get("user_name") || "").trim();
    const user_email = String(data.get("user_email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!user_name || !user_email || !message) return;

    setStatus("sending");
    setErrorDetail("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          user_name,
          user_email,
          message,
          /** Destino fijo — el template debe usar {{to_email}} o To = averbujtomas */
          to_email: EMAIL_PUBLIC,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("ok");
      form.current.reset();
    } catch (err) {
      const text =
        err?.text || err?.message || (typeof err === "string" ? err : "EmailJS error");
      console.error("[EmailJS]", err);
      setErrorDetail(text);
      setStatus("error");
    }
  };

  const line = dark
    ? "w-full bg-transparent border-0 border-b border-paper/25 focus:border-paper text-paper placeholder:text-muted py-4 focus:outline-none transition-colors"
    : "w-full bg-transparent border-0 border-b border-ink/20 focus:border-ink text-ink placeholder:text-ink/40 py-4 focus:outline-none transition-colors";

  return (
    <form ref={form} onSubmit={sendEmail} className="w-full">
      <div className="grid md:grid-cols-2 gap-8">
        <input type="text" name="user_name" required className={line} placeholder={c.name} />
        <input type="email" name="user_email" required className={line} placeholder={c.email} />
      </div>
      <textarea
        name="message"
        rows="4"
        required
        className={`${line} mt-8 resize-none`}
        placeholder={c.message}
      />
      <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className={`self-start font-syne text-[11px] tracking-[0.2em] uppercase px-8 py-4 transition-colors disabled:opacity-60 ${
            dark ? "bg-mist text-ink hover:bg-paper" : "bg-ink text-paper hover:bg-ink/80"
          }`}
        >
          {status === "sending" ? c.sending : c.send}
        </button>
        {status === "ok" && <p className={`text-sm ${dark ? "text-paper/80" : "text-ink/70"}`}>{c.ok}</p>}
        {status === "error" && (
          <div className="text-sm text-red-400">
            <p>{c.error}</p>
            {errorDetail && (
              <p className="mt-1 text-xs text-red-400/70 font-mono break-all">{errorDetail}</p>
            )}
          </div>
        )}
      </div>
    </form>
  );
}
