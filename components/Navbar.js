
"use client";

import { Menu, Bell, Search } from "lucide-react";

export default function Navbar({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-gray-200 bg-white px-4 sm:px-6">

      {/* Left side */}
      <div className="flex items-center gap-4">

        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={25} />
        </button>

        <div>
          <h2 className="text-lg font-bold text-gray-800">
            Welcome Back!
          </h2>

          <p className="hidden text-sm text-gray-500 sm:block">
            Manage your investment account.
          </p>
        </div>

      </div>

      {/* Right side */}
      <div className="flex items-center gap-3 sm:gap-5">

        <button
          className="hidden rounded-lg p-2 text-gray-500 hover:bg-gray-100 sm:block"
          aria-label="Search"
        >
          <Search size={21} />
        </button>

        <button
          className="relative rounded-lg p-2 text-gray-500 hover:bg-gray-100"
          aria-label="Notifications"
        >
          <Bell size={22} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="flex items-center gap-2 border-l pl-3 sm:pl-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">
            JD
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-800">
              John Doe
            </p>

            <p className="text-xs text-gray-500">
              Investor
            </p>
          </div>
        </div>

      </div>

    </header>
  );
}
