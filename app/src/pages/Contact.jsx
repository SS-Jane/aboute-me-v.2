import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import cvPdf from "../assets/WebDevelopment_thaweesin_CV.pdf";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Message sent successfully");
  };

  const myContact = {
    location: "City Nakhon Pathom, Thailand",
    email: "Superjane.sangprasit@gmaio.com",
    phone: "+66-810-26400",
  }
  return (
    <section className="container-contact px-12 flex flex-col items-center">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-blue-500 via-purple-500 to-sky-500 animate-text">
          Contact
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 w-full">
        <div className="container-my-contact mobile w-full lg:hidden p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Contact details
          </h2>
          <div className="text-foreground/80">
            <div className="mb-4 flex items-center">
              <FontAwesomeIcon
                icon={faLocationDot}
                bounce
                className="text-xl text-blue-500"
              />
              <span className="ml-4">{myContact.location}</span>
            </div>
            <div className="mb-4 flex items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                beat
                className="text-xl text-blue-500"
              />

              <a
                href="mailto:Superjane.prodev@gmail.com"
                className="ml-3 text-blue-500 hover:underline"
              >
                {myContact.email}
              </a>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faPhone}
                shake
                className="text-xl text-blue-500"
              />

              <a
                href="tel:+66810026400"
                className="ml-3 text-blue-500 hover:underline"
              >
                {myContact.phone}
              </a>
            </div>
            <div className="flex text-center mt-8 ">
              <a
                href={cvPdf}
                download="Thaweesin_WebDevelopment_CV.pdf"
                className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition transform hover:scale-105"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="container-contactor w-full lg:w-2/3 p-6 dark:bg-gray-800 rounded-lg shadow-xl">
          <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="font-bold text-2xl text-foreground">Contact form</h2>
            <div>
              <label className="block text-sm font-semibold text-foreground/80">
                Full name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-2 w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gary-600 rounded-md p-3 text-foreground/80 focus:outline-none focus:ring-2 focus:ring-blue-400"
                {...register("name", {
                  required: "Full name is required",
                  maxLength: 30,
                })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground/80">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="mt-2 w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gary-600 rounded-md p-3 text-foreground/80 focus:outline-none focus:ring-2 focus:ring-blue-400"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground/80">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="mt-2 w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gary-600 rounded-md p-3 text-foreground/80 focus:outline-none focus:ring-2 focus:ring-blue-400"
                {...register("subject", {
                  required: "Subject is required",
                  maxLength: 30,
                })}
              />
              {errors.subject && (
                <span className="text-red-500 text-sm">
                  {errors.subject.message}
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground/80">
                Message
              </label>
              <textarea
                type="text"
                rows="5"
                className="mt-2 w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gary-600 rounded-md p-3 text-foreground/80 focus:outline-none focus:ring-2 focus:ring-blue-400"
                {...register("message", {
                  required: "Message is required",
                  maxLength: 500,
                })}
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="w-full lg:w-40 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transform transition-transform focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Send message
            </button>
          </form>
        </div>

        <div className="container-my-contact desktop hidden lg:block lg:w-1/3 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-foreground mb-8">
          Contact details
          </h2>
          <div className="text-foreground/80">
            <div className="mb-4 flex items-center ml-1">
              <FontAwesomeIcon
                icon={faLocationDot}
                bounce
                className="text-xl text-blue-500"
              />
              <span className="ml-2">{myContact.location}</span>
            </div>
            <div className="mb-4 flex items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                beat
                className="text-xl text-blue-500"
              />

              <a
                href="mailto:Superjane.prodev@gmail.com"
                className="ml-2 text-blue-500 hover:underline"
              >
                {myContact.email}
              </a>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faPhone}
                shake
                className="text-xl text-blue-500"
              />

              <a
                href="tel:+66810026400"
                className="ml-2 text-blue-500 hover:underline "
              >
                {myContact.phone}
              </a>
            </div>
            <div className="flex text-center mt-8">
              <a
                href={cvPdf}
                download="Thaweesin_WebDevelopment_CV.pdf"
                className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition transform hover:scale-105"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
