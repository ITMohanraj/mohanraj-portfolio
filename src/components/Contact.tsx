"use client";

import React, { useState } from "react";
import { Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert("Please fill in the required fields.");
      return;
    }
    setIsSubmitting(true);

    // Mock form submission timing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      
      // Reset success banner after 4 seconds
      setTimeout(() => setSubmitted(false), 4000);
    }, 1500);
  };

  const contactDetails = [
    {
      label: "Email Me",
      value: "mohanraj.k1110@gmail.com",
      href: "mailto:mohanraj.k1110@gmail.com",
      icon: <Mail className="h-5 w-5 text-primary" />,
    },
    {
      label: "Call Me",
      value: "+91 9360091961",
      href: "tel:+919360091961",
      icon: <Phone className="h-5 w-5 text-primary" />,
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mohanraj-k-b3380829a/",
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/ITMohanraj",
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black/10 dark:bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left space-y-3">
          <span className="text-primary font-display font-semibold tracking-wider uppercase text-sm">
            08 / Contact
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight">
            Get In Touch
          </h2>
          <div className="h-1 w-12 bg-primary rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Contact Information (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display font-extrabold text-2xl text-foreground">
                Let&apos;s Build Something Intelligent
              </h3>
              <p className="text-sm opacity-80 leading-relaxed font-sans">
                Are you looking for an AI Engineer intern, Java Developer, or startup co-developer? Send me a message, drop an email, or connect via LinkedIn. I am always open to discussing new opportunities.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4">
              {contactDetails.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="p-5 rounded-2xl glass-panel border border-border flex items-center space-x-4 hover:scale-[1.01] transition-transform duration-300 group"
                >
                  <div className="p-3 bg-primary/10 rounded-xl border border-primary/20 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[10px] text-primary font-bold uppercase tracking-wider font-display">
                      {item.label}
                    </span>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Channels */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-xs uppercase tracking-widest text-muted">
                Social Networks
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-border glass-panel hover:bg-primary hover:text-white hover:border-primary hover:scale-105 transition-all duration-300"
                    title={s.name}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-8 rounded-2xl glass-panel border border-border glow-card glow-border"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold font-display opacity-80">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 font-sans text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold font-display opacity-80">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 font-sans text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-semibold font-display opacity-80">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Subject of message"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 font-sans text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold font-display opacity-80">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, team, or opportunity..."
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 font-sans text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none"
                />
              </div>

              {/* Submit Button & Alert feedback */}
              <div className="relative pt-2">
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-4 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center space-x-2 text-emerald-400 font-sans text-xs"
                    >
                      <CheckCircle2 className="h-4.5 w-4.5 flex-shrink-0" />
                      <span>Success! Message mock-sent. I will respond to your email shortly.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3.5 rounded-lg bg-primary hover:bg-[#E04F1A] text-white font-semibold text-xs transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-lg flex items-center space-x-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
