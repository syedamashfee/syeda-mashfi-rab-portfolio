"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    setStatus("success");
    event.currentTarget.reset();
  };

  return (
    <form className="card p-6" noValidate onSubmit={handleSubmit}>
      <div className="grid gap-4">
        <div>
          <label className="mb-2 block text-sm font-semibold" htmlFor="name">
            Name
          </label>
          <input
            className="focus-ring w-full rounded-md border p-3"
            id="name"
            name="name"
            placeholder="Your full name"
            required
            type="text"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="focus-ring w-full rounded-md border p-3"
            id="email"
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold" htmlFor="message">
            Message
          </label>
          <textarea
            className="focus-ring min-h-36 w-full rounded-md border p-3"
            id="message"
            name="message"
            placeholder="Write your message..."
            required
          />
        </div>
      </div>
      <button
        className="focus-ring mt-5 rounded-md bg-[var(--brand)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        type="submit"
      >
        Send Message
      </button>
      {status === "success" ? (
        <p className="mt-3 text-sm text-green-700">
          Message captured successfully. This form is currently a frontend
          placeholder.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-3 text-sm text-red-700">
          Please fill in name, email, and message before submitting.
        </p>
      ) : null}
    </form>
  );
}
