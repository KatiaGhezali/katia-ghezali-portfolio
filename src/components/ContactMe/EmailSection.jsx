import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";

const ContactMe = () => {
  const prefersReducedMotion = useReducedMotion();

  const socialLinks = [
    {
      name: "GitHub",
      description: "Explore my projects",
      href: "https://github.com/KatiaGhezali",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      description: "Let's connect professionally",
      href: "https://www.linkedin.com/in/katiaghezali",
      icon: FaLinkedin,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 text-white sm:px-10 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/[0.12] blur-[120px] sm:h-96 sm:w-96"
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          className="mb-4 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
        >
          <span className="h-px w-8 bg-purple-400/60" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
            Get in touch
          </span>
          <span className="h-px w-8 bg-purple-400/60" />
        </motion.div>

        <motion.h2
          className="text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
        >
          Let&apos;s <span className="text-purple-300">Connect</span>
        </motion.h2>

        <motion.p
          className="mx-auto mt-5 max-w-2xl text-center leading-7 text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.6,
            delay: prefersReducedMotion ? 0 : 0.1,
          }}
        >
          Have a project in mind, an opportunity to share, or just want to talk
          about technology? I&apos;d love to hear from you.
        </motion.p>

        <motion.div
          className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-400"
          initial={{ opacity: 0, scaleX: prefersReducedMotion ? 1 : 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
        />

        <motion.div
          className="relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.025] p-6 shadow-2xl shadow-purple-950/10 backdrop-blur-sm sm:p-10 md:p-12"
          initial={{
            opacity: 0,
            y: prefersReducedMotion ? 0 : 25,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.6,
            ease: "easeOut",
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"
          />

          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-purple-300">
                Have something in mind?
              </span>

              <h3 className="mt-3 text-2xl font-semibold leading-snug text-white sm:text-3xl">
                Let&apos;s make
                <br />
                something meaningful.
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                I&apos;m always interested in connecting with people, exploring
                ideas, and discovering new opportunities to build and learn.
              </p>

              <div className="mt-8 space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 transition-all duration-300 hover:border-purple-400/30 hover:bg-purple-500/[0.06]"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/[0.08] text-lg text-purple-300 transition-colors duration-300 group-hover:bg-purple-500/[0.15]">
                        <Icon />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block font-medium text-white">
                          {social.name}
                        </span>
                        <span className="mt-1 block text-xs text-gray-500">
                          {social.description}
                        </span>
                      </span>

                      <FaExternalLinkAlt className="shrink-0 text-xs text-gray-500 transition-colors group-hover:text-purple-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">
                Send me a message
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Tell me a little about what&apos;s on your mind.
              </p>

              <form
                className="mt-6 space-y-5"
                onSubmit={(event) => event.preventDefault()}
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Jane Smith"
                    className="w-full rounded-xl border border-white/[0.09] bg-[#0c0b18]/70 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 hover:border-white/20 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    className="w-full rounded-xl border border-white/[0.09] bg-[#0c0b18]/70 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 hover:border-white/20 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Tell me about your idea..."
                    className="w-full resize-y rounded-xl border border-white/[0.09] bg-[#0c0b18]/70 px-4 py-3.5 text-sm leading-6 text-white outline-none transition-all duration-300 placeholder:text-gray-600 hover:border-white/20 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/10"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-950/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-900/30 focus:outline-none focus:ring-2 focus:ring-purple-400/60 focus:ring-offset-2 focus:ring-offset-[#0c0b18]"
                >
                  Send Message
                  <FaExternalLinkAlt className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <p className="text-center text-xs leading-5 text-gray-500">
                  The contact form is currently a visual placeholder and does
                  not send messages yet.
                </p>
              </form>
            </div>
          </div>
        </motion.div>

        <motion.p
          className="mt-12 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
        >
          Designed & built with care.
          <span className="mx-2 text-purple-400">✦</span>©{" "}
          {new Date().getFullYear()}
        </motion.p>
      </div>
    </section>
  );
};

export default ContactMe;
