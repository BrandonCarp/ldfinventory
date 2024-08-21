export default function Navbar() {
  return (
    <nav className="bg-gray-700 py-4 ">
      <div className="container mx-auto flex justify-between items-center text-gray-200">
        <div className="flex flex-row space-x-2">
          <h1 className="text-gray-200  font-bold text-lg">
            Lynmar Displays & Fixtures
          </h1>
          <button className="py-1 px-6  rounded font-bold hover:text-white  hover:bg-gray-800">
            Link 1
          </button>
          <button className="py-1 px-6  rounded font-bold hover:text-white  hover:bg-gray-800">
            Link 2
          </button>
        </div>

        <div className="space-x-5">
          <input
            className="rounded border-none py-1 px-2 text-black"
            type="search"
            placeholder="Search Lozier Parts"
          />
          <button className="py-1 px-6  rounded font-bold hover:text-white  bg-indigo-600 hover:bg-indigo-500">
            Test Button
          </button>
        </div>
      </div>
    </nav>
  );
}
