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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from 'next/link';

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
        { name: "Elementor", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT78j4LYEkoNtNOgCHTEn122ylZ8uPvCeeV2g&s" },
        { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "WooCommerce", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-plain.svg" },
      ],
      projects: [
        {
          title: "AIECOM Solutions: Digital Marketing Website",
          description: "Designed and enhanced the website for AIECOM Solutions, a digital marketing agency specializing in SEO, branding, website redesign, lead generation, and more. Improved website performance for faster loading and seamless user experience. Integrated Google Calendar with an AI-powered bot to automate meeting scheduling, streamlining client interactions. The website features a user-centric design, service-focused content, detailed project showcases, customizable pricing plans, client testimonials, and an intuitive contact form, ensuring businesses can easily scale their online presence.",
          image: "/images/aiecomsolutions.png",
          url: "https://aiecomsolutions.com"
        },
        {
          title: "Renomax Renovation: Transforming Spaces with Custom Joinery",
          description: "I designed and developed a professional, user-friendly website for Renomax Renovation, a Sydney-based custom joinery company specializing in transforming spaces with bespoke craftsmanship. The website showcases their expertise through a structured 5-step process for custom joinery projects, detailed service pages highlighting their commitment to sustainability, safety standards, and quality management, and a visually appealing portfolio of completed kitchen designs. It includes engaging testimonials to build credibility and clear calls-to-action for personalized consultations and free quotes. The website effectively communicates Renomax Renovation's dedication to quality craftsmanship and sustainable practices, establishing them as a trusted leader in the industry.",
          image: "images/renomaxrenovation.png",
          url: "https://renomaxrenovation.com.au"
        },
      ],
    },
    web2: {
      skills: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Github", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThA4b3y1JdS5O-6bOPQGEUWjmsuowssT70pg&s" },
        { name: "AWS", logo: "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png" },
      ],
      projects: [
        {
          title: "HabitUp: Your Companion for Building Daily Productivity",
          description: "HabitUp is a web app designed to help users optimize their daily routines and achieve their goals. It tracks wake-up and sleep times, work hours, exercise, and meditation, providing insights through productivity percentages and progress graphs. With features like Pomodoro timers, daily evaluations, a leaderboard, and a supportive community, HabitUp empowers users to cultivate healthy habits and improve time management. The platform fosters consistency and motivation, making productivity a rewarding journey.",
          image: "images/habitup.png",
          url: "https://habitup.me"
        },
      ],
    },
    web3: {
      skills: [
        { name: "Solidity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
        { name: "Web3.js", logo: "https://seeklogo.com/images/W/web3js-logo-62DEE79B50-seeklogo.com.png" },
        { name: "NFT", logo: "https://png.pngtree.com/png-vector/20220717/ourmid/pngtree-nft-crypto-token-png-image-png-image_5999373.png" },
        { name: "IPFS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Ipfs-logo-1024-ice-text.png/768px-Ipfs-logo-1024-ice-text.png" },
      ],
      projects: [
        {
          title: "Hospitality NFT",
          description: "At Koinon.Tech, I played a crucial role in Fullstack web3 application using Next.js and web3 libraries. Our focus was on to build hotel booking dapp which should mint NFT for each booking made by customer.The smartcontract was deployed on polygon mainent.",
          image: "/images/hospitalitynft.png",
          url: "https://nft-hospitality.vercel.app/"
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