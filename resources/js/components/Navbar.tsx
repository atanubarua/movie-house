import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50 bg-white border-b">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex h-16 items-center justify-between">

                    <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                            M
                        </div>
                        <span className="font-semibold text-lg">MovieBook</span>
                    </div>

                    <nav className="hidden md:flex items-center gap-6">
                        <a href="#" className="text-sm font-medium hover:text-red-600">
                            Now Showing
                        </a>
                        <a href="#" className="text-sm font-medium hover:text-red-600">
                            Coming Soon
                        </a>
                        <a href="#" className="text-sm font-medium hover:text-red-600">
                            Offers
                        </a>
                    </nav>

                    <div className="hidden md:block w-64">
                        <input
                            type="text"
                            placeholder="Search movies..."
                            className="w-full rounded-md border px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="hidden md:inline-flex rounded-md bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700">
                            Sign In
                        </button>

                        <button
                            onClick={() => setOpen(!open)}
                            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {open ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {open && (
                <div className="md:hidden border-t bg-white">
                    <div className="px-4 py-3 space-y-3">
                        <input
                            type="text"
                            placeholder="Search movies..."
                            className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                        />

                        <a href="#" className="block text-sm font-medium">
                            Now Showing
                        </a>
                        <a href="#" className="block text-sm font-medium">
                            Coming Soon
                        </a>
                        <a href="#" className="block text-sm font-medium">
                            Offers
                        </a>

                        <button className="w-full rounded-md bg-red-600 py-2 text-sm text-white">
                            Sign In
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}
