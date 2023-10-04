const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center m-16 h-72">
        <div className="mb-5 flex">
          <p className="text-lg font-medium">Name:</p>
          <input
            className="border-2 border-gray-600 ml-12 rounded-md p-1"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="flex">
          <p className="text-lg font-medium">Suggestions:</p>
          <input
            className="border-2 border-gray-600 ml-1 rounded-md p-1"
            type="text"
            placeholder="Suggestion"
          />
        </div>
        <button className="mt-10 px-4 py-2 bg-red-500 text-lg text-white font-medium rounded-md hover:scale-y-105 transition-all duration-200">
          Submit
        </button>
      </div>
    </>
  );
};

export default Contact;
