export default function Contact() {
  return (
    <section id="contact" className="bg-primary-50/50 py-20 dark:bg-dark-950 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-2 font-mono text-sm font-semibold text-primary-600 dark:text-primary-400">
            <span className="syntax-comment">// </span>Get In Touch
          </h2>
          <h3 className="mb-6 text-4xl font-bold text-dark-900 dark:text-white lg:text-5xl">
            Let's Work Together
          </h3>
          <p className="mx-auto max-w-2xl text-lg text-dark-600 dark:text-dark-300">
            I'm currently open to new opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="mx-auto max-w-5xl space-y-8">
          <div className="text-center">
            <h4 className="mb-6 text-2xl font-bold text-dark-900 dark:text-white">
              Contact Information
            </h4>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-center">
              <a
                href="mailto:nurulfaradila19@gmail.com"
                className="group flex flex-col items-center gap-4 rounded-xl border border-dark-200 bg-white p-6 text-center shadow-md transition-all hover:border-primary-500 hover:shadow-lg dark:border-dark-800 dark:bg-dark-900"
              >
                <div className="rounded-full bg-primary-100 p-4 text-primary-600 transition-colors group-hover:bg-primary-500 group-hover:text-white dark:bg-dark-800 dark:text-primary-400">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="mb-1 font-semibold text-dark-900 dark:text-white">Email</div>
                  <div className="text-sm text-dark-600 dark:text-dark-400 break-all">
                    nurulfaradila19@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+60142801356"
                className="group flex flex-col items-center gap-4 rounded-xl border border-dark-200 bg-white p-6 text-center shadow-md transition-all hover:border-primary-500 hover:shadow-lg dark:border-dark-800 dark:bg-dark-900"
              >
                <div className="rounded-full bg-primary-100 p-4 text-primary-600 transition-colors group-hover:bg-primary-500 group-hover:text-white dark:bg-dark-800 dark:text-primary-400">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="mb-1 font-semibold text-dark-900 dark:text-white">Phone</div>
                  <div className="text-sm text-dark-600 dark:text-dark-400">
                    +60 14-280 1356
                  </div>
                </div>
              </a>

              <div className="flex flex-col items-center gap-4 rounded-xl border border-dark-200 bg-white p-6 text-center shadow-md dark:border-dark-800 dark:bg-dark-900">
                <div className="rounded-full bg-primary-100 p-4 text-primary-600 dark:bg-dark-800 dark:text-primary-400">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="mb-1 font-semibold text-dark-900 dark:text-white">Location</div>
                  <div className="text-sm text-dark-600 dark:text-dark-400">
                    Pulau Pinang, Malaysia
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 rounded-xl border border-dark-200 bg-white p-6 text-center shadow-md dark:border-dark-800 dark:bg-dark-900">
                <div className="rounded-full bg-primary-100 p-4 text-primary-600 dark:bg-dark-800 dark:text-primary-400">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="mb-1 font-semibold text-dark-900 dark:text-white">
                    Availability
                  </div>
                  <div className="text-sm text-dark-600 dark:text-dark-400">
                    Available Immediately
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center pt-8">
            <h4 className="mb-6 text-xl font-bold text-dark-900 dark:text-white">
              Connect With Me
            </h4>
            <div className="flex gap-6">
              <a
                href="https://github.com/nurulfaradila"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white p-4 text-dark-800 shadow-lg transition-all hover:bg-primary-500 hover:text-white hover:shadow-xl dark:bg-dark-900 dark:text-dark-200"
                aria-label="GitHub"
              >
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/nurul-faradila-sazali-532a6122a/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white p-4 text-dark-800 shadow-lg transition-all hover:bg-primary-500 hover:text-white hover:shadow-xl dark:bg-dark-900 dark:text-dark-200"
                aria-label="LinkedIn"
              >
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
