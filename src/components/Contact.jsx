import { Mail, MapPin, Send } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">

        <div className="text-center">
          <p className="text-violet-400">Contact</p>

          <h2 className="mt-2 text-4xl font-bold">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Have a project or opportunity? Send me a message.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">

          <div className="space-y-5">

            <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
              <Mail className="text-violet-400" />

              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-400">
                  your-email@example.com
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
              <MapPin className="text-violet-400" />

              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-400">
                  Islamabad, Pakistan
                </p>
              </div>
            </div>

          </div>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none placeholder:text-gray-500 focus:border-violet-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none placeholder:text-gray-500 focus:border-violet-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none placeholder:text-gray-500 focus:border-violet-500"
            />

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-4 font-semibold hover:bg-violet-700"
            >
              Send Message
              <Send size={18} />
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;