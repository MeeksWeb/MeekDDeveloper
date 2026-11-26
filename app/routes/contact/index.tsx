import { motion } from "motion/react";
import { Form } from "react-router";
import { reveal } from "~/motion";
import type { Route } from "./+types";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  const name = String(formData.get("name")).trim();
  const email = String(formData.get("email")).trim();
  const message = String(formData.get("message")).trim();

  const errors: Record<string, string> = {};

  if (!name) errors.name = "Name is required";
  if (!email) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    //the code in the bracket is used to check for email format
    errors.email = "Invalid email format";
  }

  if (!message) errors.message = "Message is required";

  //check if there's at least one error and return that particular error
  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  //if there's none, then proceed with infos provided
  const data = {
    name,
    email,
    message,
  };

  return {
    message: "Thanks for reaching out! I'll get back to you ASAP.",
    data,
  };
}

const ContactPage = ({ actionData }: Route.ComponentProps) => {
  const error = actionData?.errors || {};
  return (
    <motion.section
      {...reveal}
      className="min-h-screen bg-charcoal-950 px-6 py-14 text-white selection:bg-brand-600 selection:text-white md:px-14 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.header
          {...reveal}
          className="mb-10 flex flex-col justify-between gap-4 md:mb-12 md:flex-row md:items-start"
        >
          <h1 className="font-display text-5xl leading-none tracking-tight text-white sm:text-6xl md:text-7xl">
            Let's Talk
          </h1>

          <p className="max-w-xs text-sm leading-relaxed text-charcoal-200 md:pt-2 md:text-right md:text-base">
            Leave your message and I will get back to you ASAP
          </p>
        </motion.header>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">

          <div className="lg:col-span-5">
            <div className="overflow-hidden bg-charcoal-900">
              <img
                src="/meekddeveloper.jpeg"
                alt="Michael Victor standing outdoors"
                className="aspect-[4/4.3] w-full object-cover rounded-lg object-top"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <Form method="post" className="space-y-9">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-charcoal-200 md:text-sm"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="mt-2.5 w-full border-b border-charcoal-700 bg-transparent pb-3 text-sm text-white placeholder-charcoal-500 transition-colors focus:border-brand-600 focus:outline-none md:text-base"
                />
                {error.name && (
                  <p className="text-red-400 text-sm mt-1">{error.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-charcoal-200 md:text-sm"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="yourmail@gmail.com"
                  className="mt-2.5 w-full border-b border-charcoal-700 bg-transparent pb-3 text-sm text-white placeholder-charcoal-500 transition-colors focus:border-brand-600 focus:outline-none md:text-base"
                />
                {error.email && (
                  <p className="text-red-400 text-sm mt-1">{error.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-charcoal-200 md:text-sm"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  className="mt-2.5 w-full resize-none border-b border-charcoal-700 bg-transparent pb-3 text-sm text-white placeholder-charcoal-500 transition-colors focus:border-brand-600 focus:outline-none md:text-base"
                />
                {error.message && (
                  <p className="text-red-400 text-sm mt-1">{error.message}</p>
                )}
              </div>
              {actionData?.message && (
                <p className="mb-6 bg-green-700 text-green-100 text-center rounded-lg border border-green-500 shadow-md py-3">
                  {actionData.message}
                </p>
              )}

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="w-full cursor-pointer bg-brand-600 px-10 py-4 text-sm font-medium text-white transition-colors hover:bg-brand-500 "
                >
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactPage;
