const Contact = () => {
  return (
    <div
      name="Contact"
      className="bg-gradient-to-b to-gray-800 from-black w-full h-full p-4 text-white "
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me </p>
        </div>
        <div className="flex justify-center items-center ">
          <form
            action="https://getform.io/f/d7dfb86e-c6c7-41be-859c-9a6aac729e87"
            method="POST"
            className="flex flex-col w-full"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="Email"
              placeholder="Enter your name"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              placeholder="Enter your Message"
              name="message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className=" text-white bg-gradient-to-b from-cyan-500 to-blue-500  px-6 py-2 my-8 mx-auto rounded-md hover:scale-110 duration-30">
              Let&apos;s talk{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
