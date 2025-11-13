"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type FormState = {
  name: string;
  org: string;
  email: string;
  mobile: string;
  program: string;
  message: string;
};

export default function ContactSimple() {
  const [form, setForm] = useState<FormState>({
    name: "",
    org: "",
    email: "",
    mobile: "",
    program: "Sales Training",
    message: "",
  });
  const [sending, setSending] = useState(false);

  function update(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  function buildSubject() {
    const who = form.name ? ` — ${form.name}` : "";
    return `eAarvi Tech Inquiry: ${form.program}${who}`;
  }

  function buildBody() {
    return [
      `Name: ${form.name || "-"}`,
      `Organization: ${form.org || "-"}`,
      `Email: ${form.email || "-"}`,
      `Mobile: ${form.mobile || "-"}`,
      `Program: ${form.program || "-"}`,
      "",
      "Message:",
      form.message || "-",
      "",
      "--",
      "Sent from eAarvi Tech website",
    ].join("\n");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // basic validation
    if (!form.name || !form.email || !form.mobile) {
      alert("Please fill Name, Email and Mobile.");
      return;
    }

    setSending(true);
    try {
      const to = "business@eaarvitech.com"; // change if needed
      const subject = buildSubject();
      const body = buildBody();

      // Gmail web compose link (opens Gmail compose in a new tab)
      const gmailUrl =
        "https://mail.google.com/mail/?view=cm&fs=1" +
        `&to=${encodeURIComponent(to)}` +
        `&su=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

      // mailto fallback
      const mailtoUrl =
        `mailto:${encodeURIComponent(to)}` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

      // try to open Gmail web compose in a new tab. If popup blocked, fallback to mailto.
      const newWin = window.open(gmailUrl, "_blank");
      if (!newWin) {
        // popup blocked — use mailto (will trigger default mail client)
        window.location.href = mailtoUrl;
      } else {
        try {
          newWin.focus();
        } catch (err) {
          // ignore focus errors
        }
      }
    } catch (err) {
      // worst case: use mailto
      window.location.href = `mailto:business@eaarvitech.com?subject=${encodeURIComponent(
        buildSubject()
      )}&body=${encodeURIComponent(buildBody())}`;
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="mx-auto max-w-3xl">
        <section className="rounded-2xl bg-white/80 p-8 shadow-lg">
          <h1 className="text-2xl font-bold">Let’s Build a High-Performing Sales Team</h1>
          <p className="mt-2 text-sm text-zinc-600">
            Fill the form — on submit your Gmail (or default mail client) will open with a prefilled message to us.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                required
                name="name"
                value={form.name}
                onChange={update}
                placeholder="Name"
                className="px-3 py-2 rounded-lg border"
              />
              <input
                name="org"
                value={form.org}
                onChange={update}
                placeholder="Organization / Institution"
                className="px-3 py-2 rounded-lg border"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                required
                name="email"
                type="email"
                value={form.email}
                onChange={update}
                placeholder="Email"
                className="px-3 py-2 rounded-lg border"
              />
              <input
                required
                name="mobile"
                value={form.mobile}
                onChange={update}
                placeholder="Mobile"
                className="px-3 py-2 rounded-lg border"
              />
            </div>

            <select
              name="program"
              value={form.program}
              onChange={update}
              className="w-full px-3 py-2 rounded-lg border"
            >
              <option>Sales Training</option>
              <option>Field Coaching</option>
              <option>Consulting</option>
              <option>Software Training</option>
              <option>Other</option>
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={update}
              rows={5}
              placeholder="Message / Requirement"
              className="w-full px-3 py-2 rounded-lg border"
            />

            <div className="flex items-center justify-between gap-3">
              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-semibold shadow"
              >
                {sending ? "Opening mail..." : "Request a Call Back"}
              </motion.button>

              <div className="text-xs text-zinc-500">We respect your privacy — no spam.</div>
            </div>
          </form>

          <div className="mt-6 text-sm text-zinc-600">
            <div>Email: business@eaarvitech.com</div>
            <div>Phone: +91-8433965315</div>
            <div>Office: Navi Mumbai, Maharashtra, India</div>
          </div>
        </section>
      </div>
    </main>
  );
}
