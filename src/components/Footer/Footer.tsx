// Footer - Site-wide footer with newsletter, links, and social media
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaPinterest, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

import logo from '@/assets/logo/Logof.png';

const ABOUT_LINKS = ["Companies", "Pricing", "Terms", "Advice", "Privacy Policy"];
const RESOURCES_LINKS = ["Help Docs", "Guide", "Updates", "Contact Us"];

const SOCIALS = [
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaPinterest, label: "Pinterest", href: "#" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
  { icon: FaXTwitter, label: "Twitter / X", href: "#" },
];

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link
      href={href}
      className="text-gray-400 text-sm hover:text-white transition-colors duration-150 inline-block"
    >
      {children}
    </Link>
  </li>
);

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-2 text-white text-sm font-semibold bg-white/10 rounded-lg px-4 py-3">
        <span>You&apos;re subscribed! Check your inbox.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex w-full">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (error) setError(""); }}
          placeholder="Email Address"
          className="flex-1 min-w-0 px-4 py-2.5 text-sm bg-[#2a2a3a] text-white placeholder-gray-500 border border-[#3a3a4a] rounded-l-md outline-none focus:border-[#4f46e5] transition-all duration-200"
        />
        <button
          type="submit"
          className="px-5 py-2.5 bg-[#4f46e5] text-white text-sm font-semibold rounded-r-md hover:bg-[#3730a3] transition-colors duration-200 whitespace-nowrap"
        >
          Subscribe
        </button>
      </div>
      {error && <p className="text-red-400 text-xs mt-1.5">{error}</p>}
    </form>
  );
};

const Footer = () => {
  return (
    <footer className="w-full bg-[#13131f]">
      <div className="xl:container mx-auto px-6 pt-14 pb-8">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/[0.08]">

          {/* Col 1: Logo + description */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src={logo} alt="QuickHire Logo" height={32} className="object-contain" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Great platform for the job seeker that passionate about startups. Find your dream job easier.
            </p>
          </div>

          {/* Col 2: About */}
          <div>
            <h3 className="text-white font-semibold text-[15px] mb-4">About</h3>
            <ul className="space-y-2.5">
              {ABOUT_LINKS.map((item) => (
                <FooterLink key={item} href="#">{item}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h3 className="text-white font-semibold text-[15px] mb-4">Resources</h3>
            <ul className="space-y-2.5">
              {RESOURCES_LINKS.map((item) => (
                <FooterLink key={item} href="#">{item}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-[15px] mb-2">Get job notifications</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <NewsletterForm />
          </div>

        </div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
          <p className="text-gray-500 text-sm">
            2021 @ QuickHire. All rights reserved.
          </p>
          <div className="flex items-center gap-2.5">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/[0.07] text-gray-400 hover:bg-[#4f46e5] hover:text-white transition-all duration-200"
              >
                <Icon size={13} />
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;