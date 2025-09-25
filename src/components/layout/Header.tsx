import { useState, useEffect } from "react";
import { Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const DirectShelfLogo = ({ className, variant = "default" }: { className?: string; variant?: "default" | "large" | "xlarge" }) => {
  const sizeClasses = {
    default: "h-12 w-auto",
    large: "h-16 w-auto",
    xlarge: "h-20 w-auto"
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 200"
      className={cn(sizeClasses[variant], className)}
    >
      <defs>
        <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:"#5b21b6"}}/>
          <stop offset="50%" style={{stopColor:"#8b5cf6"}}/>
          <stop offset="100%" style={{stopColor:"#c026d3"}}/>
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor:"#7c3aed"}}/>
          <stop offset="100%" style={{stopColor:"#5b21b6"}}/>
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <g transform="translate(75, 25)">
        {/* Pallet Jack Base */}
        <g transform="translate(40, 110)">
          {/* Handle in upward position */}
          <path d="M25,0 L-15,-25" stroke="#5b21b6"
                strokeWidth="6" strokeLinecap="round" filter="url(#glow)"/>
          {/* Base Frame */}
          <rect x="25" y="-5" width="120" height="12"
                fill="url(#accentGradient)" rx="2"/>

          {/* Left Wheel with Motion Trails */}
          <g transform="translate(45, 7)">
            {/* Extended motion trails */}
            <g opacity="0.2">
              <path d="M-45,-3 L-7,-3" stroke="#8b5cf6" strokeWidth="1.5"/>
              <path d="M-42,0 L-7,0" stroke="#8b5cf6" strokeWidth="1.5"/>
              <path d="M-45,3 L-7,3" stroke="#8b5cf6" strokeWidth="1.5"/>
            </g>
            <g opacity="0.3">
              <path d="M-35,-3 L-7,-3" stroke="#8b5cf6" strokeWidth="1.5"/>
              <path d="M-32,0 L-7,0" stroke="#8b5cf6" strokeWidth="1.5"/>
              <path d="M-35,3 L-7,3" stroke="#8b5cf6" strokeWidth="1.5"/>
            </g>
            {/* Main wheel */}
            <circle cx="0" cy="0" r="7" fill="#5b21b6"/>
            <circle cx="0" cy="0" r="3" fill="white" opacity="0.6"/>
          </g>

          {/* Right Wheel with Motion Trails */}
          <g transform="translate(125, 7)">
            {/* Extended motion trails */}
            <g opacity="0.2">
              <path d="M-45,-3 L-7,-3" stroke="#8b5cf6" strokeWidth="1.5"/>
              <path d="M-42,0 L-7,0" stroke="#8b5cf6" strokeWidth="1.5"/>
              <path d="M-45,3 L-7,3" stroke="#8b5cf6" strokeWidth="1.5"/>
            </g>
            <g opacity="0.3">
              <path d="M-35,-3 L-7,-3" stroke="#8b5cf6" strokeWidth="1.5"/>
              <path d="M-32,0 L-7,0" stroke="#8b5cf6" strokeWidth="1.5"/>
              <path d="M-35,3 L-7,3" stroke="#8b5cf6" strokeWidth="1.5"/>
            </g>
            {/* Main wheel */}
            <circle cx="0" cy="0" r="7" fill="#5b21b6"/>
            <circle cx="0" cy="0" r="3" fill="white" opacity="0.6"/>
          </g>
        </g>

        {/* Floating Effect Shadow */}
        <ellipse cx="100" cy="115" rx="55" ry="3"
                 fill="#5b21b6" opacity="0.2"/>

        {/* Main Box floating above */}
        <rect x="65" y="25" width="120" height="70"
              fill="url(#primaryGradient)" rx="4" filter="url(#glow)"/>

        {/* Shelf Lines */}
        <line x1="65" y1="50" x2="185" y2="50"
              stroke="white" strokeWidth="2" opacity="0.9"/>
        <line x1="65" y1="75" x2="185" y2="75"
              stroke="white" strokeWidth="2" opacity="0.9"/>
      </g>
    </svg>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#solution", label: "Why Choose Us" },
    { href: "#stats", label: "Our Metrics" },
    { href: "#calculator", label: "Calculate Your ROI" },
    { href: "#how-it-works", label: "How It Works" },
  ];

  const solutions = [
    {
      title: "Multi-City Warehousing",
      description: "Strategic warehouse network across major cities with zero upfront investment",
      href: "#solution"
    },
    // {
    //   title: "Dark Store Management",
    //   description: "Hyperlocal fulfillment centers managed by us, branded for you",
    //   href: "#solution"
    // },
    {
      title: "Complete Fulfillment",
      description: "End-to-end order processing with in 24 hour delivery capabilities",
      href: "#solution"
    },
    {
      title: "Zipp Store - Retail as a Service",
      description: "Complete retail store setup and management solution for D2C brands",
      href: "https://zippstor.com/",
      external: true
    }
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank');
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const PhoneNumber = () => (
    <motion.a
      href="tel:08047939544"
      className="inline-flex items-center gap-2 text-primary hover:text-primary/90 transition-colors md:text-base text-sm"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Phone className="h-5 w-5" />
      <span className="font-medium">08047939544</span>
    </motion.a>
  );

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 h-20 z-50
        transition-all duration-500
        ${isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-gradient-to-b from-white/90 to-transparent backdrop-blur-[2px]"
        }
      `}
    >
      <div className="container mx-auto px-4 h-full flex items-center">
        {/* Option 1: Logo 2x larger than text (Default) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-1"
        >
          <DirectShelfLogo
            variant="default"
            className={`transition-all duration-300 ${
              isScrolled ? "h-8 opacity-100" : "h-10 opacity-90"
            }`}
          />
          <span className={`font-bold text-xl leading-tight transition-colors duration-300 ml-1 ${
            isScrolled
              ? "bg-gradient-to-r from-brand-deep-purple to-brand-purple bg-clip-text text-transparent"
              : "bg-gradient-to-r from-brand-deep-purple to-brand-purple bg-clip-text text-transparent"
          }`}>
            DirectShelf
          </span>
        </motion.div>

        <nav className="hidden lg:flex items-center space-x-8 ml-20">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-700 hover:text-primary"
                    : "text-gray-800/90 hover:text-primary/90"
                }`}>
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] gap-3 p-4">
                    {solutions.map((solution) => (
                      <NavigationMenuLink
                        key={solution.title}
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                        )}
                        onClick={() => handleNavClick(solution.href)}
                      >
                        <div className="text-sm font-medium leading-none flex items-center gap-2">
                          {solution.title}
                          {solution.external && (
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          )}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {solution.description}
                        </p>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {navItems.map((item) => (
            <motion.button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-gray-800/90 hover:text-primary/90"
              }`}
            >
              {item.label}
            </motion.button>
          ))}

          <motion.button
            onClick={() => window.open('https://medium.com/@directshelf', '_blank')}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-sm font-medium transition-colors duration-300 ${
              isScrolled
                ? "text-gray-700 hover:text-primary"
                : "text-gray-800/90 hover:text-primary/90"
            }`}
          >
            Insights
          </motion.button>
        </nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="ml-auto flex items-center gap-4">
          <motion.a
            href="https://app.directshelf.in/track"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium
                       hover:bg-primary/90 transition-colors duration-300
                       shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Track Order
          </motion.a>
          <PhoneNumber />
        </motion.div>
      </div>

      {/* Alternative Layout Options - Hidden by default, can be toggled */}
      <div className="hidden">
        {/* Option 2: Logo 3x larger than text */}
        <div className="flex items-center gap-4">
          <DirectShelfLogo variant="xlarge" className="h-20" />
          <span className="font-medium text-xs bg-gradient-to-r from-brand-deep-purple to-brand-purple bg-clip-text text-transparent">
            DirectShelf
          </span>
        </div>

        {/* Option 3: Stacked Layout */}
        <div className="flex flex-col items-center gap-1">
          <DirectShelfLogo variant="large" className="h-16" />
          <span className="font-semibold text-sm bg-gradient-to-r from-brand-deep-purple to-brand-purple bg-clip-text text-transparent">
            DirectShelf
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
