import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { companyInfo } from "../data/companyInfo";

export default function TeamSection() {
  const teamVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * i,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const team = [
    {
      name: "Robert",
      role: "Fullstack Developer",
      image: "/robert.jpg",
      objectPosition: "center 30%",
      social: [
        { icon: <Github size={18} />, link: companyInfo.social.github },
        { icon: <Linkedin size={18} />, link: companyInfo.social.linkedin },
      ],
    },
    {
      name: "Flo",
      role: "CEO",
      image: "/flo.jpg",
      objectPosition: "center 30%",
      social: [
        { icon: <Github size={18} />, link: companyInfo.social.github },
        { icon: <Linkedin size={18} />, link: companyInfo.social.linkedin },
      ],
    },
    {
      name: "Ida",
      role: "COO",
      image: "/ida.JPG",
      objectPosition: "center 30%",
      social: [
        { icon: <Github size={18} />, link: companyInfo.social.github },
        { icon: <Linkedin size={18} />, link: companyInfo.social.linkedin },
      ],
    },
    {
      name: "Eremiya",
      role: "Fullstack Developer",
      image: "/eremiya.JPG",
      objectPosition: "center 30%",
      social: [
        { icon: <Github size={18} />, link: companyInfo.social.github },
        { icon: <Linkedin size={18} />, link: companyInfo.social.linkedin },
      ],
    },
  ];

  return (
    <section
      id="team"
      className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black relative"
    >
      {/* Top fade for smooth transition from AblaufSection */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none"></div>

      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-teal-500/60 via-teal-400/60 to-teal-500/60 mx-auto rounded-full mb-8"
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4 text-center"
            style={{ fontFamily: "Inter", letterSpacing: "-0.05em" }}
          >
            Unsere Macher:innen
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-xl text-center mb-8 max-w-2xl mx-auto font-light"
          >
            Wir kommen aus der Praxis, nicht aus dem Lehrbuch
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={teamVariants}
              className="text-center group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl mb-6 aspect-square transform transition-all duration-500 hover:shadow-teal-500/20 group-hover:scale-[1.03]">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role} bei ${companyInfo.shortName}`}
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                  style={{ objectPosition: member.objectPosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-80 group-hover:opacity-70 transition-all duration-300"></div>

                {/* Name and role */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <h3
                    className="text-2xl font-bold mb-1 text-white"
                    style={{ fontFamily: "Inter", letterSpacing: "-0.05em" }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-teal-400 font-medium"
                    style={{ fontFamily: "Inter" }}
                  >
                    {member.role}
                  </p>

                  {/* Social links */}
                  <div className="flex justify-center mt-4 space-x-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {member.social.map((social, sIndex) => (
                      <a
                        key={sIndex}
                        href={social.link}
                        className="p-2 bg-gray-800/80 rounded-full hover:bg-teal-500/80 text-gray-300 hover:text-white transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
