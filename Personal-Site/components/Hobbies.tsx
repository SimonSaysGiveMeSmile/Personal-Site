"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Music, Dumbbell, Play } from "lucide-react";

export default function Hobbies() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const musicalHobbies = [
    {
      name: "Violin",
      description: "Classical and contemporary pieces",
      icon: "🎻",
      mediaType: "image",
      placeholder: "/placeholder-violin.jpg",
    },
    {
      name: "Piano",
      description: "Jazz and classical compositions",
      icon: "🎹",
      mediaType: "video",
      placeholder: "/placeholder-piano.jpg",
    },
    {
      name: "Guitar",
      description: "Acoustic and electric performances",
      icon: "🎸",
      mediaType: "image",
      placeholder: "/placeholder-guitar.jpg",
    },
  ];

  const sportHobbies = [
    {
      name: "Tennis",
      description: "Competitive matches and recreational play",
      icon: "🎾",
      mediaType: "video",
      placeholder: "/placeholder-tennis.jpg",
    },
    {
      name: "Golfing",
      description: "Weekend rounds and technique refinement",
      icon: "⛳",
      mediaType: "image",
      placeholder: "/placeholder-golf.jpg",
    },
    {
      name: "Gym",
      description: "Strength training and fitness routines",
      icon: "💪",
      mediaType: "image",
      placeholder: "/placeholder-gym.jpg",
    },
    {
      name: "Cycling",
      description: "Road cycling and scenic trails",
      icon: "🚴",
      mediaType: "video",
      placeholder: "/placeholder-cycling.jpg",
    },
  ];

  return (
    <section id="hobbies" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Hobbies & Interests</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Beyond coding and innovation, I find balance through music and sports. These passions fuel my creativity and keep me energized.
          </p>
        </motion.div>

        {/* Musical Hobbies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Music className="text-blue-600" size={32} />
            <h3 className="text-3xl font-bold text-gray-800">Musical Pursuits</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {musicalHobbies.map((hobby, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="glass rounded-2xl overflow-hidden hover-lift group"
              >
                {/* Media Placeholder */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-400 to-purple-600">
                  <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-40 group-hover:opacity-60 transition-opacity duration-300">
                    {hobby.icon}
                  </div>
                  {hobby.mediaType === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/50 transition-all duration-300 group-hover:scale-110">
                        <Play className="text-white ml-1" size={28} />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                    {hobby.mediaType === "video" ? "Video" : "Image"}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {hobby.name}
                  </h4>
                  <p className="text-gray-600">{hobby.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sports Hobbies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Dumbbell className="text-blue-600" size={32} />
            <h3 className="text-3xl font-bold text-gray-800">Athletic Activities</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sportHobbies.map((hobby, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="glass rounded-2xl overflow-hidden hover-lift group"
              >
                {/* Media Placeholder */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-green-400 to-blue-600">
                  <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-40 group-hover:opacity-60 transition-opacity duration-300">
                    {hobby.icon}
                  </div>
                  {hobby.mediaType === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/50 transition-all duration-300 group-hover:scale-110">
                        <Play className="text-white ml-1" size={24} />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                    {hobby.mediaType === "video" ? "Video" : "Image"}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {hobby.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{hobby.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Optional: Add a quote or personal note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16 glass rounded-3xl p-8 text-center"
        >
          <p className="text-xl text-gray-700 italic">
            "Music gives a soul to the universe, wings to the mind, flight to the imagination, 
            and life to everything. Sports teach discipline, perseverance, and the joy of pushing limits."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

