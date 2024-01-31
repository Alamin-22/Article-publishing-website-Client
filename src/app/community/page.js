const community = () => {
  return (
    <div className="mt-5 p-5">
      <div className="grid lg:grid-cols-5">
        <div className="col-span-1">layout 1</div>
        <div className="col-span-3 mx-5">
          <form class=" bg-white p-5 rounded-md">
            <div className="flex gap-5 ">
              <div>
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="Rounded avatar"
                />
              </div>
              <div>
                <h1 class="block mb-5   font-bold text-gray-900 dark:text-white">
                  Name
                </h1>

                <div>
                  <textarea
                    id="message"
                    rows="2"
                    className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your post..."></textarea>

                  
                  <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="multiple_files"
                    type="file"
                    multiple
                  />

                  <input
                    className="text-white bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 mt-2"
                    type="Submit"
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="bg-white my-5 rounded-lg p-5">
            <div className="flex gap-3">
              <img
                class="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Jese image"
              />
              <div className="">
                <h1 className="font-semibold text-gray-900 dark:text-white">
                  Name
                </h1>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  11:46
                </p>
              </div>
            </div>
            <div className="my-2">
              <div className="pb-3">
              <p>
                "Welcome to our article writing platform!", "Explore the world
                of professional article writing with us!", "Unlock your
                potential as a writer on our platform!", "Join our community of
                passionate writers!", "Ready to showcase your writing skills?
                Let's get started!", "Discover a new avenue for expressing your
                ideas through writing!", "Empowering writers to create
                compelling content!", "Transform your thoughts into captivating
                articles with us!"
              </p>
              </div>
              <hr />
            <div className="flex justify-evenly py-1">
              <p>Like</p>
              <p>Comment</p>
              <p>Share</p>
            </div>
            <hr />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          layout 3
          <div>
            <h1>This is community</h1>
            <p>
              Featured Articles: Showcase a selection of high-quality articles
              from your community to capture visitors' interest. Include
              eye-catching images, titles, and brief descriptions. Article
              Categories: Organize articles into categories such as Technology,
              Lifestyle, Health, etc. Each category should have a visually
              appealing icon or image. Recent Articles: Display a feed of the
              most recent articles published by community members. Top
              Contributors: Recognize and highlight top contributors or authors
              within the community. Include their profile pictures, usernames,
              and a brief bio. Article Submission Form: Encourage users to
              contribute their articles by providing a clear and accessible
              submission form. Include fields for title, content, category
              selection, and optional image upload.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default community;
