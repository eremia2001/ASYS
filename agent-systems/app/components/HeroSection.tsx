import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import { companyInfo } from "../data/companyInfo";
import HexagonBackground from "./HexagonBackground";
import Link from "next/link";
import { handleSmoothScroll } from "../utils/smoothScroll";

export default function HeroSection() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleSmoothScroll(e, 100); // 100px Offset vom oberen Rand
  };
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>

      {/* Hexagon Background */}
      <HexagonBackground
        variant="dark"
        opacity={0.06}
        size="large"
        animated={true}
        density="medium"
      />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Company name with subtle styling */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-3 text-teal-400 font-medium text-lg"
          >
            {companyInfo.shortName}
          </motion.div>

          {/* Clear, bold headline */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
            style={{ fontFamily: "Inter", letterSpacing: "-0.05em" }}
          >
            {companyInfo.slogan}
          </motion.h1>

          {/* Simplified, focused description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-10 mx-auto"
            style={{ fontFamily: "Inter" }}
          >
            {companyInfo.description}
          </motion.p>

          {/* Single, prominent CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8"
          >
            <Link href="#contact" onClick={handleNavClick}>
              <CTAButton
                text="Jetzt durchstarten"
                href="#contact"
                variant="primary"
                size="large"
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Lower gradient for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-900"></div>
    </section>
  );
}
