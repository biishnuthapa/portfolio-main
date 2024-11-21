import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-[#1A484F] to-[#081E21]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Logo />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Bishnu Thapa
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="relative inline-block mb-8"
        >
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text animate-pulse">
          I make ideas & things alive
          </span>
          <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-lg opacity-30 blur"></div>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-lg text-[#F6F5FC] max-w-2xl mx-auto mb-12"
        >
          Crafting beautiful, user-centric digital experiences with modern technologies
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex justify-center gap-4 mb-12"
        >
          {[Github, Linkedin, Twitter, Mail].map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
             <Button 
  variant="outline" 
  size="icon" 
  className="rounded-full border-[#4ECDC4] bg-[#9F2B55] text-white hover:bg-[#4ECDC4] hover:border-transparent"
>
  <Icon className="h-5 w-5" />
</Button>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}