import React from "react";

export default function ContactForm() {
  return (
    <form className="flex-1 min-w-[320px] bg-white p-8 rounded-lg shadow-lg flex flex-col gap-4">
      <h4 className="text-xl font-bold mb-4 text-slate-800">Kontaktujte mě</h4>
      <input type="text" placeholder="Jméno" className="border rounded p-2" required />
      <input type="email" placeholder="E-mail" className="border rounded p-2" required />
      <textarea placeholder="Zpráva" className="border rounded p-2" rows={4} required />
      <button type="submit" className="bg-yellow-400 text-slate-900 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition">Odeslat</button>
    </form>
  );
}
