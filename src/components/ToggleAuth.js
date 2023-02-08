import useAuth from "../hooks/useAuth";
export default function ToggleAuth() {
  const { logout } = useAuth();

  const handleClickSignOut = async () => {
    await logout();
  };
  return (
    <div className="absolute right-10 z-10 bg-back divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
      <ul className="py-2 text-sm " aria-labelledby="dropdownDefaultButton">
        <li>
          <a
            href="/lists"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Order history
          </a>
        </li>

        {/* <li>
          <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Earnings
          </a>
        </li> */}
        <li>
          <a
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={handleClickSignOut}
          >
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
}
