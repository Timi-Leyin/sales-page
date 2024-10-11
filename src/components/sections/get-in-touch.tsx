const GetInTouch = () => {
  return (
    <div className="text-[#09325B]">
      <div className="flex flex-wrap justify-between p-12">
        <div className="max-w-[450px]">
          <h3 className="text-4xl font-bold py-4">Get in Touch</h3>
          <p>
            <span className="block py-3">
              Do you have any disturbing questions you would love to ask… or you
              just want to casually reach out?
            </span>

            <span className="block py-3">
              Fill out the form below and we’ll get to you in less than 24hrs.
              Also, you’ll get a detailed and personalized response.
            </span>
          </p>

          <button className="px-6 py-3 rounded-md bg-[darkorange] font-bold text-white">Get Started</button>
        </div>
        <div className="flex-1 my-6 md:my-0 flex gap-6 flex-col max-w-[500px]">
            <input type="text" placeholder="First Name" className="border rounded-md border-blue-200 p-4 w-full" />
            <input type="text" placeholder="Last Name" className="border rounded-md border-blue-200 p-4 w-full" />
            <input type="text" placeholder="Email Address" className="border rounded-md border-blue-200 p-4 w-full" />
            <input type="text" placeholder="Type Your Questions here" className="border rounded-md border-blue-200 p-4 w-full" />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
