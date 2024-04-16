import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionLayout } from "../layout";
import { slideIn } from "../utils/motion";
import Modal from "./Modal";
import { formcheck, formerror } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [compiled, setCompiled] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);

    emailjs
      .send(
        "service_oqj2kjq",
        "template_obenzs5",
        {
          from_name: form.name,
          to_name: "Stefano",
          from_email: form.email,
          to_email: "stefano.saccocci.93@gmail.com",
          message: form.message,
        },
        "Wlb5iagcaKe-9FXOe"
      )
      .then(
        () => {
          setLoading(false);
          setCompiled(true);

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          setCompiled(true);
          setError(true);

          console.log(error);
        }
      );
  };

  return (
    <div>
      <div
        className="ml:mt-12 xl:flex-row flex flex-col-reverse
    gap-10 overflow-hidden"
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-form-color p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-color-primary font-medium mb-4">
                Your Name
              </span>
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Insert your name"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-color-primary
          rounded-lg outlined-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-color-primary font-medium mb-4">
                Your Email
              </span>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Insert your email"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-color-primary
          rounded-lg outlined-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-color-primary font-medium mb-4">
                Your Message
              </span>
              <textarea
                required
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Insert your message"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-color-primary
          rounded-lg outlined-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none rounded-xl w-fit text-color-primary
          font-bold shadow-md shadow-secondary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
      {compiled && !error ? (
        <Modal
          message="Thank you for contacting me! I will try to reply as soon as possible."
          img={formcheck}
        />
      ) : (
        ""
      )}

      {compiled && error ? (
        <Modal
          message="Oops! Something went wrong. Please try again."
          img={formerror}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default SectionLayout(Contact, "contact");
