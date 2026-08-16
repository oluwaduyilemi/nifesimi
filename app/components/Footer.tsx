import Link from "next/link";
import {
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "The Edit", href: "/the-edit" },
  { name: "Styling", href: "/styling" },
  { name: "Personal Shopping", href: "/personal-shopping" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#3d281d] text-[#f8f5f0]">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-20 lg:px-12 lg:py-15 xl:px-16">
        
        {/* Top Section */}
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">
          
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <h2 className="font-serif text-2xl tracking-[0.06em] sm:text-3xl">
                THE WARDROBE EDIT
              </h2>

              <p className="mt-2 font-serif text-sm italic text-[#d8c9bd]">
                Your wardrobe, but better.
              </p>
            </Link>

            <p className="mt-7 max-w-md text-sm leading-7 text-[#d8c9bd]">
              Personal styling and personal shopping made a little easier.
              Helping you discover, style and source pieces that make your
              wardrobe work better for you.
            </p>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#806b5d] text-[#f8f5f0] transition-all duration-300 hover:border-[#f8f5f0] hover:bg-[#f8f5f0] hover:text-[#3d281d]"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-[17px] w-[17px]"
                    aria-hidden="true"
                    >
                    <rect width="20" height="20" x="2" y="2" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#806b5d] text-[#f8f5f0] transition-all duration-300 hover:border-[#f8f5f0] hover:bg-[#f8f5f0] hover:text-[#3d281d]"
              >
                <MessageCircle size={17} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#bda99b]">
              Explore
            </p>

            <nav className="mt-6 flex flex-col items-start">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-2 py-2 text-sm text-[#f8f5f0] transition-colors duration-300 hover:text-[#cdb8a9]"
                >
                  <span>{link.name}</span>

                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.3}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact / CTA */}
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#bda99b]">
              Let's work together
            </p>

            <h3 className="mt-6 max-w-sm font-serif text-2xl leading-tight sm:text-3xl">
              Ready to make your wardrobe work better?
            </h3>

            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-3 border-b border-[#f8f5f0] pb-2 text-[10px] font-medium uppercase tracking-[0.14em] text-[#f8f5f0] transition-colors duration-300 hover:text-[#cdb8a9]"
            >
              Book a consultation

              <ArrowUpRight
                size={14}
                strokeWidth={1.3}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <div className="mt-10 space-y-2 text-sm text-[#d8c9bd]">
              <p>UK 🇬🇧 · Nigeria 🇳🇬</p>

              <a
                href="mailto:hello@thewardrobeedit.com"
                className="block transition-colors duration-300 hover:text-white"
              >
                hello@thewardrobeedit.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-[#665044] md:my-16" />

        {/* Bottom */}
        <div className="flex flex-col gap-5 text-[10px] uppercase tracking-[0.1em] text-[#bda99b] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} The Wardrobe Edit. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}