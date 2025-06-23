import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-200 py-10 px-4 mt-16">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                <div>
                    <ScrollLink 
                        to="hero"
                        offset={-70}
                        smooth={true}
                        className="cursor-pointer text-3xl font-bold flex flex-row items-center space-x-2">
                        <Image
                        src="/futuremed-logo.png"
                        alt="FutureMed Logo"
                        width={50}
                        height={50}
                        className=""
                        />
                        FUTURE
                        <span className="text-[var(--color-primary)]">MED</span>
                    </ScrollLink>
                    <p className="mt-3 text-gray-400 max-w-xs">
                        Empowering healthcare with technology. Official reseller of Legit.Health®.
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
                        href="https://www.linkedin.com/in/futuremed-ai-1b4a5a348/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-[var(--color-primary-hover)] transition-colors"
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