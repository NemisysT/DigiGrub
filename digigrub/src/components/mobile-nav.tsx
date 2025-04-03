// "use client";

// import * as React from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// export function MobileNav() {
//   const [open, setOpen] = React.useState(false);
//   const pathname = usePathname();

//   const navLinks = [
//     { name: "Menu", href: "/menu" },
//     { name: "My Orders", href: "/orders" },
//     { name: "About", href: "/about" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <Sheet open={open} onOpenChange={setOpen}>
//       <SheetTrigger asChild>
//         <Button
//           variant="ghost"
//           className="mr-2 px-0 text-base text-white hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
//         >
//           <Menu className="h-6 w-6" />
//           <span className="sr-only">Toggle Menu</span>
//         </Button>
//       </SheetTrigger>

//       <SheetContent side="left" className="pr-0 bg-primary text-white">
//         {/* Brand Logo */}
//         <Link href="/" className="flex items-center py-4 pl-6 text-xl font-bold" onClick={() => setOpen(false)}>
//           DigiGrub
//         </Link>

//         {/* Navigation Links */}
//         <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
//           <nav className="flex flex-col space-y-4">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 onClick={() => setOpen(false)}
//                 className={`relative text-lg transition-all hover:text-accent ${
//                   pathname === link.href ? "font-semibold text-accent" : "text-white/80"
//                 }`}
//               >
//                 {link.name}
//                 {pathname === link.href && (
//                   <span className="absolute left-0 bottom-0 h-[2px] w-full bg-accent rounded-full transition-all"></span>
//                 )}
//               </Link>
//             ))}
//           </nav>
//         </div>
//       </SheetContent>
//     </Sheet>
//   );
// }
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Menu", href: "/menu" },
    { name: "My Orders", href: "/orders" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-lg font-bold"
        aria-label="Toggle Menu"
      >
        ☰
      </button>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <a href="/" className="text-lg">Home</a>
            <a href="/menu" className="text-lg">Menu</a>
            <a href="/about" className="text-lg">About</a>
            <a href="/contact" className="text-lg">Contact</a>
            <a href="/faq" className="text-lg">FAQ</a>
          </nav>
        </div>
      )}
    </div>
  );
}
