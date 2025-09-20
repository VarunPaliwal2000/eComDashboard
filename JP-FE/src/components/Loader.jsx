export default function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#15191E]">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <div className="text-xl text-gray-100 font-semibold font-inter tracking-wide text-center">
          Loading Dashboard…
        </div>
        <div className="text-gray-400 text-sm tracking-wide font-inter text-center">
          Please wait while your data loads.
        </div>
      </div>
    </div>
  );
}
