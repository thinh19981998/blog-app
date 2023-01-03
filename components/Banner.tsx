const Banner = () => {
  return (
    <div
      className="flex flex-col justify-between font-bold px-10 py-5 mb-10
          lg:flex-row lg:space-x-5"
    >
      <div>
        <h1 className="text-5xl">CowHat Blog</h1>
        <h2
          className="mt-5
              md:mt-8"
        >
          Welcome to{' '}
          <span className="underline decoration-4 decoration-[#f7ab0a]">CowHat Blog, </span>
          {''} from the field to the blog.
        </h2>
      </div>
      <p
        className="mt-5 text-gray-400 max-w-sm
          md:mt-2 capitalize"
      >
        The ultimate Blog to read and update of FrontEnd tech, The source of truth.
      </p>
    </div>
  );
};

export default Banner;
