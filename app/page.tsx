"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Download, ExternalLink, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from 'next/image';
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from 'next/link';
import { useEmailService } from "@/hooks/use-email-service";
import { SOCIAL_LINKS } from "@/lib/constants";
import { techCategories } from "@/lib/constants/tech-categories";
import { Logo } from "@/components/ui/logo";

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { sendEmail, isSubmitting } = useEmailService();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await sendEmail({ name, email, message });
    if (success) {
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
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
          {/* Using SocialLink component */}
          <SocialLink href={SOCIAL_LINKS.github} icon={Github} />
          <SocialLink href={SOCIAL_LINKS.linkedin} icon={Linkedin} />
          <SocialLink href={SOCIAL_LINKS.twitter} icon={Twitter} />
          <SocialLink href={SOCIAL_LINKS.mail} icon={Mail} />
        </motion.div>
      </div>
    </section>

      {/* About Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-[#1A484F]"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">About Me</h2>
          <p className="text-[#F6F5FC] mb-8 text-lg leading-relaxed">
            I'm a passionate developer with over 5 years of experience in creating modern web applications. 
            My expertise spans across front-end and back-end development, with a special focus on creating 
            intuitive user experiences and scalable architectures.
          </p>
          <motion.div 
  className="flex justify-center"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <a 
    href="/images/documents/Bishnu-Thapa-Resume.pdf" 
    download="Resume.pdf" 
    className="bg-[#4ECDC4] hover:bg-[#4ECDC4]/90 text-white flex items-center px-4 py-2 rounded"
  >
    <Download className="mr-2 h-4 w-4" /> Download Resume
  </a>
</motion.div>

        </div>
      </motion.section>

      {/* Skills & Projects Section */}
      <section className="py-20 bg-[#1A484F]">
        <div className="max-w-6xl mx-auto px-4">
          <Tabs defaultValue="wordpress" className="w-full">
            <TabsList className="flex justify-center gap-4 mb-12">
              {Object.keys(techCategories).map((category) => (
                <TabsTrigger 
                  key={category}
                  value={category}
                  className="px-6 py-3 text-lg font-semibold rounded-full bg-[#081E21] text-white hover:bg-[#4ECDC4] data-[state=active]:bg-[#4ECDC4]"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(techCategories).map(([key, category]) => (
              <TabsContent key={key} value={key}>
                {/* Skills */}
                <motion.div 
                  initial="hidden"
                  animate="show"
                  variants={container}
                  className="mb-20"
                >
                  <h3 className="text-3xl font-bold text-white mb-12 text-center">Skills</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        variants={item}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center"
                      >
                        <div className="bg-white p-4 rounded-lg mb-2 shadow-lg">
                          <Image
                            src={skill.logo}
                            alt={skill.name}
                            width={48}
                            height={48}
                            className="w-12 h-12"
                          />
                        </div>
                        <span className="text-white font-medium">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Projects */}
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={container}
                >
                  <h3 className="text-3xl font-bold text-white mb-12 text-center">Projects</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    {category.projects.map((project, index) => (
                      <motion.div key={index} variants={item}>
                        <Card className="bg-[#081E21] border-none text-white overflow-hidden">
                          <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className="relative h-48 mb-4"
                          >
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover rounded-t-lg"
                            />
                          </motion.div>
                          <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-[#F6F5FC] mb-4">{project.description}</p>
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                              <Link href={project.url} target="_blank" rel="noopener noreferrer">
                                <Button variant="secondary" className="w-full bg-[#4ECDC4] hover:bg-[#4ECDC4]/90 text-white">
                                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                              </Link>
                            </motion.div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <motion.section 
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-[#081E21]"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Get in Touch</h2>
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#1A484F] rounded-lg p-8"
          >
            <div className="grid gap-6">
              <motion.div whileHover={{ scale: 1.02 }}>
                <Input
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-[#081E21] border-[#4ECDC4] text-white"
                  required
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#081E21] border-[#4ECDC4] text-white"
                  required
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-[#081E21] border-[#4ECDC4] text-white"
                  rows={5}
                  required
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  type="submit"
                  className="w-full bg-[#4ECDC4] hover:bg-[#4ECDC4]/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </motion.div>
            </div>
          </motion.form>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 bg-[#081E21]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-[#F6F5FC]">© 2024 Bishnu Thapa. All rights reserved.</p>
            <div className="flex gap-4">
              <SocialLink href={SOCIAL_LINKS.github} icon={Github} />
              <SocialLink href={SOCIAL_LINKS.linkedin} icon={Linkedin} />
              <SocialLink href={SOCIAL_LINKS.twitter} icon={Twitter} />
              <SocialLink href={SOCIAL_LINKS.mail} icon={Mail} />

            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ElementType;
}

function SocialLink({ href, icon: Icon }: SocialLinkProps) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <Link href={href} target="_blank" rel="noopener noreferrer">
      <Button
          variant="outline"
          size="icon"
          className="rounded-full border-[#4ECDC4] bg-[#9F2B55] text-white hover:bg-[#4ECDC4] hover:border-transparent"
        >
          <Icon className="h-5 w-5" />
        </Button>
      </Link>
    </motion.div>
  );
}