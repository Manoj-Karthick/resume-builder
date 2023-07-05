export default function NavBar() {
  return (
    <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 font-semibold">
      <div className="relative flex items-center py-4 border-b border-slate-200">
        <div className="mr-auto px-3 text-slate-900 hover:cursor-pointer">
          Resume
        </div>
        <div className="hidden lg:flex lg:items-center">
          <div className="hover:cursor-pointer">Resume</div>
          <div className="ml-8 hover:cursor-pointer">Cover Letter</div>
          <div className="hidden lg:ml-8 lg:pl-8 lg:flex lg:items-center lg:border-l lg:border-slate-300">
            <div className="inline-flex justify-center px-4 py-2 text-sm text-white font-semibold border bg-slate-950 rounded-lg hover:bg-slate-700 hover:cursor-pointer -my-2.5">
              <span className="pr-2">Create an account</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
