import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-200 py-10 px-4 mt-16">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                <div>
                    <Link href="/" className="text-2xl font-bold text-white">
                        FutureMed
                    </Link>
                    <p className="mt-3 text-gray-400 max-w-xs">
                        Empowering healthcare with technology. Inspired by legit.health.
                    </p>
                </div>
                <div className="flex gap-12">
                    <div>
                        <h4 className="font-semibold mb-2 text-white">Company</h4>
                        <ul className="space-y-1">
                            <li>
                                <Link href="/about" className="hover:underline">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="hover:underline">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:underline">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2 text-white">Resources</h4>
                        <ul className="space-y-1">
                            <li>
                                <Link href="/blog" className="hover:underline">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/docs" className="hover:underline">
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:underline">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex gap-4 mt-6 md:mt-0">
                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="hover:text-blue-400"
                    >
                        <svg width="24" height="24" fill="currentColor">
                            <path d="M22 5.92a8.38 8.38 0 0 1-2.36.65A4.13 4.13 0 0 0 21.4 4.1a8.19 8.19 0 0 1-2.6 1A4.1 4.1 0 0 0 11.1 9.03a11.65 11.65 0 0 1-8.45-4.28 4.1 4.1 0 0 0 1.27 5.47A4.07 4.07 0 0 1 2 9.13v.05a4.1 4.1 0 0 0 3.29 4.02 4.09 4.09 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 19.54a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.18 8.18 0 0 0 22 5.92z" />
                        </svg>
                    </a>
                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-blue-300"
                    >
                        <svg width="24" height="24" fill="currentColor">
                            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47s-1.73 1.18-1.73 2.4v4.57h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="mt-8 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} FutureMed. All rights reserved.
            </div>
        </footer>
    );
}