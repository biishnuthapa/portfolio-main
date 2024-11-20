"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Download, ExternalLink, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import Image from 'next/image';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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

  const techCategories = {
    wordpress: {
      skills: [
        { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
        { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "WooCommerce", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-plain.svg" },
      ],
      projects: [
        {
          title: "E-Commerce Store",
          description: "Custom WooCommerce solution with advanced product filtering",
          image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          title: "Business Directory",
          description: "WordPress multisite network for local businesses",
          image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
      ],
    },
    web2: {
      skills: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      ],
      projects: [
        {
          title: "SaaS Platform",
          description: "Full-stack application with real-time collaboration features",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          title: "Analytics Dashboard",
          description: "Real-time data visualization platform",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
      ],
    },
    web3: {
      skills: [
        { name: "Solidity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
        { name: "Web3.js", logo: "https://seeklogo.com/images/W/web3js-logo-62DEE79B50-seeklogo.com.png" },
        { name: "Ethereum", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg" },
        { name: "IPFS", logo: "https://seeklogo.com/images/I/ipfs-logo-1BC6DD98A4-seeklogo.com.png" },
      ],
      projects: [
        {
          title: "NFT Marketplace",
          description: "Decentralized platform for trading digital assets",
          image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          title: "DeFi Dashboard",
          description: "Decentralized finance portfolio tracker",
          image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
      ],
    },
  };

  return (
    <main className="min-h-screen">
      <Hero />

      {/* About Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-[#081E21]"
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
            <Button className="bg-[#4ECDC4] hover:bg-[#4ECDC4]/90 text-white">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills & Projects Section */}
      <section className="py-20 bg-[#1A484F]">
        <div className="max-w-6xl mx-auto px-4">
          <Tabs defaultValue="wordpress" className="w-full">
            <TabsList className="flex justify-center gap-4 mb-12">
              <TabsTrigger 
                value="wordpress"
                className="px-6 py-3 text-lg font-semibold rounded-full bg-[#081E21] text-white hover:bg-[#4ECDC4] data-[state=active]:bg-[#4ECDC4]"
              >
                WordPress
              </TabsTrigger>
              <TabsTrigger 
                value="web2"
                className="px-6 py-3 text-lg font-semibold rounded-full bg-[#081E21] text-white hover:bg-[#4ECDC4] data-[state=active]:bg-[#4ECDC4]"
              >
                Web 2.0
              </TabsTrigger>
              <TabsTrigger 
                value="web3"
                className="px-6 py-3 text-lg font-semibold rounded-full bg-[#081E21] text-white hover:bg-[#4ECDC4] data-[state=active]:bg-[#4ECDC4]"
              >
                Web 3.0
              </TabsTrigger>
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
                              <Button variant="secondary" className="w-full bg-[#4ECDC4] hover:bg-[#4ECDC4]/90 text-white">
                                View Project <ExternalLink className="ml-2 h-4 w-4" />
                              </Button>
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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-[#081E21]"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Get in Touch</h2>
          <motion.div 
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
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#081E21] border-[#4ECDC4] text-white"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-[#081E21] border-[#4ECDC4] text-white"
                  rows={5}
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="w-full bg-[#4ECDC4] hover:bg-[#4ECDC4]/90 text-white">
                  Send Message
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 bg-[#081E21]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-[#F6F5FC]">© 2024 John Doe. All rights reserved.</p>
            <div className="flex gap-4">
              {[Github, Linkedin, Twitter].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="ghost" size="icon" className="text-[#F6F5FC] hover:text-white hover:bg-[#4ECDC4]">
                    <Icon className="h-5 w-5" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}