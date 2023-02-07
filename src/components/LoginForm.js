export default function LoginForm() {
  // const handleSubmitForm = async (e) => {
  //   try {
  //     e.preventDefault();
  //     //////// validate

  //     await login(emailOrMobile, password);
  //     toast.success("success login");
  //   } catch (err) {
  //     console.log(err);
  //     toast.error(err.response?.data.message);
  //   }
  // };
  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-gray-900 text-sm font-medium"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-gray-900 text-sm font-medium"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="my-6 text-sm font-medium text-gray-300">
          Not registered?{" "}
          <a href="/modal" className="text-blue-500 hover:underline">
            Create account
          </a>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
