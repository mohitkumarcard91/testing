export default function GetByRole() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <h1>GetByRole</h1>
      <input
        type="text"
        aria-label="Search"
        placeholder="Search..."
        className="border p-2 mb-4"
      />
      <input
        type="number"
        aria-label="Age"
        placeholder="Enter your age"
        className="border p-2 mb-4"
      />
      <button
        aria-label="Click Me"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Click Me
      </button>
    </div>
  );
}
