"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ParallaxLayer from "./ParallaxLayer";
import TiltCard from "./TiltCard";
import AnimatedLogo from "./AnimatedLogo";
import { PromptToTestIcon, MultiCaseIcon, BrowserIcon, ScreenshotIcon, AgentIcon, CICDIcon } from "./FeatureIcons";
import MorphingBlob from "./MorphingBlob";
import useCountUp from "./useCountUp";
import DynamicBackground from "./DynamicBackground";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7 } },
};
const zoomIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
};
const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};
const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};
const bounce = {
  hidden: { y: 0 },
  show: {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const },
  },
};
const underlineReveal = {
  hidden: { width: 0 },
  show: { width: "100%", transition: { duration: 0.6, delay: 0.2 } },
};

export default function Home() {
  const [navScrolled, setNavScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [ref1, val1] = useCountUp(500000, 2);
  const [ref2, val2] = useCountUp(1000000, 2.2);
  const [ref3, val3] = useCountUp(865, 1.8);

  return (
    <div className="bg-white text-gray-900">
      {/* Sticky Navbar */}
      <nav className={`sticky top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-opacity-80 transition-all duration-300 ${navScrolled ? "bg-white/90 shadow-lg" : "bg-white/60 shadow-sm"}`}>
        <div className="flex items-center gap-2">
          <AnimatedLogo size={32} />
          <span className="font-bold text-xl tracking-tight">Kwest AI</span>
        </div>
        <ul className="hidden md:flex gap-8 font-medium">
          <li><a href="#features" className="hover:text-blue-600 transition">Features</a></li>
          <li><a href="#pricing" className="hover:text-blue-600 transition">Pricing</a></li>
          <li><a href="#faq" className="hover:text-blue-600 transition">FAQ</a></li>
          <li><a href="#docs" className="hover:text-blue-600 transition">Docs</a></li>
          <li><a href="#launch" className="hover:text-blue-600 transition">Launch</a></li>
        </ul>
        <a href="#launch" className="hidden md:inline-block px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Launch App</a>
      </nav>

      {/* Hero Section with Partner Logos */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 px-6 text-center bg-gradient-to-b from-blue-50 to-white overflow-hidden"
      >
        <DynamicBackground />
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 text-left relative z-10">
          <div className="flex-1">
            <div className="mb-2 text-base font-medium text-blue-600 flex items-center gap-2">
              <span className="text-2xl">🤖</span> AI-Driven Testing for Modern Teams
            </div>
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Kwest AI – <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">No-Code, AI-Powered Test Automation</span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Kwest AI instantly turns your product ideas into robust, automated browser tests. Just describe your flow, and get actionable results—no code, no hassle.
            </motion.p>
            <form className="flex flex-col sm:flex-row gap-3 mb-3 max-w-md">
              <input type="email" placeholder="Enter your work email" className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200" />
              <motion.button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:scale-105 active:scale-95"
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </form>
            <div className="text-gray-500 text-sm">No login required. Secure sandbox execution. Built for SaaS, e-commerce, and startups.</div>
          </div>
          <motion.div className="flex-1 flex justify-center" initial="hidden" whileInView="show" variants={zoomIn}>
            {/* Hero illustration placeholder, could be replaced with branded SVG */}
            <svg width="360" height="240" viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="360" height="240" rx="32" fill="#181F3A" />
              <rect x="32" y="32" width="60" height="176" rx="16" fill="#232B4D" />
              <circle cx="62" cy="62" r="18" fill="#F59E42" />
              <circle cx="62" cy="110" r="18" fill="#F472B6" />
              <circle cx="62" cy="158" r="18" fill="#60A5FA" />
              <circle cx="62" cy="206" r="18" fill="#34D399" />
              <rect x="112" y="32" width="200" height="80" rx="12" fill="#E5E7EB" />
              <rect x="112" y="128" width="200" height="80" rx="12" fill="#E5E7EB" />
              <rect x="112" y="224" width="80" height="16" rx="8" fill="#E5E7EB" />
            </svg>
          </motion.div>
        </div>
        {/* Animated partner logos */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center items-center gap-10 opacity-80"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
        >
          {['OpenAI', 'Shopify', 'Stripe', 'Vercel', 'Notion', 'Zapier'].map((brand, i) => (
            <motion.div key={brand} variants={bounce} initial="hidden" animate="show" className="px-6 py-2 bg-white rounded-lg shadow border text-gray-700 font-bold text-lg">
              {brand}
            </motion.div>
          ))}
        </motion.div>
        <div className="absolute left-1/2 bottom-8 -translate-x-1/2 z-20 flex flex-col items-center animate-bounce">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#6366F1" opacity="0.12"/><path d="M12 8v8M8 12l4 4 4-4" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/></svg>
          <span className="text-xs text-blue-600 mt-1">Scroll</span>
        </div>
        <ParallaxLayer speed={0.15} className="absolute -top-32 -left-32 w-[500px] h-[500px] z-0 pointer-events-none">
          <MorphingBlob color="#6366F1" duration={10} />
        </ParallaxLayer>
      </motion.section>

      {/* Divider */}
      <div className="h-12 bg-gradient-to-r from-blue-50 via-white to-blue-50 w-full" />

      {/* Features Section (6 cards) */}
      <motion.section
        id="features"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="min-h-screen flex flex-col pt-24 pb-24 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs font-semibold tracking-wide shadow">KEY FEATURES</span>
          </div>
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" initial="hidden" whileInView="show" variants={fadeInUp}>
            Why Kwest AI?
          </motion.h2>
          <p className="text-gray-600 mb-12">AI-powered, developer-friendly, and ready for your workflow. Kwest AI is trusted by SaaS, fintech, and e-commerce teams worldwide.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard icon={<PromptToTestIcon />} title="Prompt-to-Test" desc="Turn product ideas into robust tests instantly from plain English prompts." />
            <FeatureCard icon={<MultiCaseIcon />} title="Multi-case Generation" desc="Covers valid, edge, and failure cases for bulletproof coverage." />
            <FeatureCard icon={<BrowserIcon />} title="Headless Browser Execution" desc="Runs tests in real browsers for true user experience validation." />
            <FeatureCard icon={<ScreenshotIcon />} title="Screenshot + Log Capture" desc="Every result is archived for easy debugging and reporting." />
            <FeatureCard icon={<AgentIcon />} title="Agent-Based Architecture" desc="Modular, scalable, and pluggable for any team size." />
            <FeatureCard icon={<CICDIcon />} title="CI/CD Ready" desc="Easily connect to your pipelines for automated feedback." />
          </div>
        </div>
      </motion.section>

      {/* Divider */}
      <motion.div className="w-full overflow-hidden -mb-1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20">
          <motion.path d="M0 40C360 80 1080 0 1440 40V80H0V40Z" fill="#F1F5F9" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2 }} />
        </svg>
      </motion.div>

      {/* Product Highlight Section 1 */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="min-h-screen flex flex-col justify-center py-20 px-6 bg-blue-50"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 flex justify-center">
            {/* Illustration placeholder */}
            <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="400" height="300" rx="32" fill="#E0F2FE" />
              <rect x="40" y="40" width="120" height="220" rx="16" fill="#fff" />
              <circle cx="100" cy="80" r="28" fill="#F59E42" />
              <circle cx="100" cy="140" r="28" fill="#F472B6" />
              <circle cx="100" cy="200" r="28" fill="#60A5FA" />
              <rect x="180" y="40" width="180" height="80" rx="12" fill="#E5E7EB" />
              <rect x="180" y="140" width="180" height="80" rx="12" fill="#E5E7EB" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-block px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-semibold">NEW</span>
              <span className="text-sm font-medium text-gray-700">START TESTING INSTANTLY</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Know More About <span className="relative inline-block"><span className="z-10 relative">Kwest AI</span><span className="absolute left-0 bottom-1 w-full h-2 bg-blue-200 z-0 rounded"></span></span></h2>
            <p className="text-gray-600 mb-6">Just type a sentence like "Test the login and checkout flow for my Shopify app on Safari desktop" and Kwest AI does the rest: parses intent, generates user stories, creates Playwright tests, runs them, and gives you results in seconds.</p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600">01</div>
                <div>
                  <div className="font-semibold text-lg">Prompt-to-Test</div>
                  <div className="text-gray-500">Turn ideas into tests instantly.</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600">02</div>
                <div>
                  <div className="font-semibold text-lg">Multi-case Generation</div>
                  <div className="text-gray-500">Valid, edge, and failure cases covered.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Product Highlight Section 2 */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="min-h-screen flex flex-col justify-center py-20 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="flex-1 flex justify-center">
            {/* Illustration placeholder */}
            <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="400" height="300" rx="32" fill="#FEF3C7" />
              <rect x="40" y="40" width="320" height="180" rx="16" fill="#fff" />
              <rect x="80" y="80" width="240" height="100" rx="12" fill="#E5E7EB" />
              <rect x="120" y="200" width="160" height="40" rx="8" fill="#E5E7EB" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="mb-2 text-sm font-medium text-gray-700">HEADLESS BROWSER EXECUTION</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Track Your <span className="relative inline-block"><span className="z-10 relative">Test Results</span><span className="absolute left-0 bottom-1 w-full h-2 bg-yellow-200 z-0 rounded"></span></span> Instantly</h2>
            <p className="text-gray-600 mb-6">Kwest AI runs your tests in real browsers, collects logs, screenshots, and results, and presents them back in seconds. Every result is archived for easy debugging and reporting.</p>
            <a href="#docs" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline">See Docs <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
          </div>
        </div>
      </motion.section>

      {/* Stats / Trusted by Companies Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="min-h-screen flex flex-col justify-center py-20 px-6 bg-blue-50"
      >
        <div className="max-w-6xl mx-auto rounded-3xl bg-blue-100/60 p-12 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 flex justify-center">
            {/* Illustration placeholder */}
            <svg width="180" height="220" viewBox="0 0 180 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="90" cy="110" rx="90" ry="110" fill="#c7d2fe" />
              <rect x="40" y="60" width="100" height="60" rx="16" fill="#fff" />
              <rect x="60" y="80" width="60" height="20" rx="8" fill="#E5E7EB" />
              <circle cx="60" cy="180" r="24" fill="#60A5FA" />
              <rect x="100" y="160" width="40" height="40" rx="8" fill="#F59E42" />
            </svg>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Global Teams</h2>
            <p className="text-gray-600 mb-8">Developers, QA, and product managers use Kwest AI to automate, verify, and accelerate their workflows.</p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center md:justify-start">
              <div>
                <div className="text-3xl md:text-4xl font-extrabold"><span ref={ref1}>{val1.toLocaleString()}</span></div>
                <div className="text-gray-500">Tests Run</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-extrabold"><span ref={ref2}>{val2.toLocaleString()}+</span></div>
                <div className="text-gray-500">Prompts Processed</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-extrabold"><span ref={ref3}>{val3.toLocaleString()}</span></div>
                <div className="text-gray-500">Teams Onboarded</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Integrations Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="min-h-screen flex flex-col justify-center py-20 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4">
            <span className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold tracking-wide">INTEGRATIONS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Remotely Maintain Your Data, <br className="hidden md:inline" />From Anywhere, Anytime.</h2>
          <p className="text-gray-600 mb-12">Slack, GitHub, CI/CD, and more coming soon.</p>
          <div className="relative h-64 flex items-center justify-center">
            {/* Floating integration icons */}
            <div className="absolute left-1/4 top-8 animate-float-slow">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><rect width="56" height="56" rx="16" fill="#fff"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="24" fill="#4A90E2">S</text></svg>
            </div>
            <div className="absolute right-1/4 top-4 animate-float">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><rect width="56" height="56" rx="16" fill="#fff"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="24" fill="#36C5F0">G</text></svg>
            </div>
            <div className="absolute left-1/3 bottom-8 animate-float">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><rect width="56" height="56" rx="16" fill="#fff"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="24" fill="#5865F2">D</text></svg>
            </div>
            <div className="absolute right-1/3 bottom-8 animate-float-slow">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><rect width="56" height="56" rx="16" fill="#fff"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="24" fill="#0052CC">T</text></svg>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none"><rect width="72" height="72" rx="20" fill="#fff"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="32" fill="#7B61FF">U</text></svg>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={zoomIn}
        className="min-h-screen flex flex-col justify-center py-16 px-6 bg-blue-100"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 rounded-2xl bg-blue-50 p-8 md:p-16">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Join With Us Today & Increase Your Productivity</h2>
            <p className="text-gray-600 mb-4">Developers, QA, and product managers use Kwest AI to automate, verify, and accelerate their workflows.</p>
            <a href="#launch" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Sign up free <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
          </div>
          <div className="flex-1 flex justify-center">
            {/* CTA illustration placeholder */}
            <svg width="180" height="180" viewBox="0 0 180 180" fill="none"><ellipse cx="90" cy="90" rx="90" ry="90" fill="#c7d2fe" /><rect x="60" y="60" width="60" height="60" rx="16" fill="#fff" /><rect x="80" y="80" width="20" height="20" rx="4" fill="#F59E42" /><rect x="100" y="100" width="20" height="20" rx="4" fill="#60A5FA" /></svg>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        id="faq"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="min-h-screen flex flex-col justify-center py-20 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="mb-2 text-sm font-medium text-gray-700">OUR FAQS</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span className="relative inline-block"><span className="z-10 relative">Questions</span><span className="absolute left-0 bottom-1 w-full h-2 bg-yellow-200 z-0 rounded"></span></span></h2>
            <p className="text-gray-600 mb-8">Everything you need to know about Kwest AI and how it can help your team.</p>
            <a href="#docs" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline">See Docs <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
          </div>
          {/* FAQ Accordion */}
          <div className="space-y-4">
            <FAQItem question="How does Kwest AI turn prompts into tests?" answer="Kwest AI uses advanced AI to parse your natural language prompt, generate user stories, convert them into Playwright test cases, and run them in real browsers." defaultOpen />
            <FAQItem question="What browsers are supported?" answer="Currently, Chromium and WebKit are supported. Cypress/Selenium support is coming soon." />
            <FAQItem question="Can I integrate with CI/CD or Slack?" answer="Yes! Kwest AI is CI/CD ready and Slack/GitHub integrations are coming soon." />
          </div>
        </div>
        <div className="absolute -top-32 right-0 w-[400px] h-[200px] z-0 pointer-events-none">
          <MorphingBlob color="#6366F1" duration={12} />
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="min-h-screen flex flex-col pt-24 pb-24 px-6 bg-blue-50 relative"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Users Say</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <TestimonialCard name="Jane Doe" role="QA Lead" text="Kwest AI let us automate our regression suite from just a list of requirements. It's magic!" />
            <TestimonialCard name="John Smith" role="Product Manager" text="I can verify flows before a developer even writes code. This is a game changer for our team." />
            <TestimonialCard name="Priya Patel" role="QA Engineer" text="Kwest AI's no-code approach let me automate tests for our SaaS app in minutes!" />
          </div>
        </div>
        <svg className="absolute top-0 left-1/2 -translate-x-1/2 opacity-10" width="600" height="200"><ellipse cx="300" cy="100" rx="300" ry="100" fill="#6366F1" /></svg>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        id="pricing"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="min-h-screen flex flex-col pt-24 pb-24 px-6 bg-blue-50"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pricing</h2>
          <p className="text-gray-600 mb-12">Simple, transparent pricing for everyone.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <TiltCard className="h-full">
              <div className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow border flex flex-col items-center relative">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full font-semibold">Starter</span>
                <h3 className="font-semibold text-xl mb-2 mt-4">Free</h3>
                <div className="text-3xl font-bold mb-4">$0</div>
                <ul className="text-gray-600 mb-6 space-y-2 text-left">
                  <li>✔️ Prompt-to-Test</li>
                  <li>✔️ Headless Browser Execution</li>
                  <li>✔️ 1 Project</li>
                </ul>
                <a href="#launch" className="px-6 py-2 bg-blue-100 text-blue-600 rounded-lg font-semibold hover:bg-blue-200 transition">Start Free</a>
              </div>
            </TiltCard>
            {/* Pro Plan */}
            <TiltCard className="h-full">
              <div className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-lg border-2 border-blue-600 flex flex-col items-center scale-105 relative z-10">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">Most Popular</span>
                <h3 className="font-semibold text-xl mb-2 mt-4">Pro</h3>
                <div className="text-3xl font-bold mb-4">$19<span className="text-base font-normal">/mo</span></div>
                <ul className="text-gray-600 mb-6 space-y-2 text-left">
                  <li>✔️ All Free Features</li>
                  <li>✔️ Multi-case Generation</li>
                  <li>✔️ Unlimited Projects</li>
                  <li>✔️ CI/CD Integration</li>
                </ul>
                <a href="#launch" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow">Go Pro</a>
              </div>
            </TiltCard>
            {/* Enterprise Plan */}
            <TiltCard className="h-full">
              <div className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow border flex flex-col items-center relative">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full font-semibold">Custom</span>
                <h3 className="font-semibold text-xl mb-2 mt-4">Enterprise</h3>
                <div className="text-3xl font-bold mb-4">Custom</div>
                <ul className="text-gray-600 mb-6 space-y-2 text-left">
                  <li>✔️ All Pro Features</li>
                  <li>✔️ Dedicated Support</li>
                  <li>✔️ Custom Integrations</li>
                </ul>
                <a href="#launch" className="px-6 py-2 bg-blue-100 text-blue-600 rounded-lg font-semibold hover:bg-blue-200 transition">Contact Us</a>
              </div>
            </TiltCard>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="min-h-screen flex flex-col justify-center py-20 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-start">
          <form className="md:col-span-2 bg-white rounded-2xl shadow p-8 flex flex-col gap-6">
            <h2 className="text-3xl font-bold mb-2">Send a message</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Full name" className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none" />
              <input type="email" placeholder="Email address" className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none" />
              <input type="text" placeholder="Subject" className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none sm:col-span-2" />
              <input type="text" placeholder="Phone number" className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none sm:col-span-2" />
            </div>
            <textarea placeholder="Message" className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none min-h-[100px]" />
            <div className="flex items-center gap-2">
              <input type="checkbox" id="consent" className="w-4 h-4" />
              <label htmlFor="consent" className="text-sm text-gray-500">By clicking Checkbox, you agree to use our "Form" terms and consent cookie usage in browser.</label>
            </div>
            <button type="submit" className="self-end px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2">Send Message <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
          </form>
          <div className="bg-blue-50 rounded-2xl shadow p-8">
            <h3 className="text-2xl font-bold mb-4">Find us</h3>
            <div className="mb-4">
              <div className="font-semibold">Our Location</div>
              <div className="text-gray-600 text-sm">123 AI Lane, Suite 42<br />San Francisco, CA, USA</div>
            </div>
            <div className="mb-4">
              <div className="font-semibold">Email Address</div>
              <div className="text-gray-600 text-sm">contact@kwest.ai</div>
            </div>
            <div>
              <div className="font-semibold">Phone Number</div>
              <div className="text-gray-600 text-sm">+1 (555) 123-4567</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* News & Blog Section */}
      <motion.section
        id="news"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="min-h-screen flex flex-col pt-24 pb-24 px-6 bg-white relative"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4">
            <span className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold tracking-wide">NEWS & BLOGS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News & Blogs</h2>
          <p className="text-gray-600 mb-12">Stay up to date with the latest in AI-powered testing, automation, and product updates from Kwest AI.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <BlogCard imgSrc="/blog1.jpg" title="How AI is Changing Test Automation" desc="Discover how Kwest AI leverages artificial intelligence to revolutionize browser-based testing." />
            <BlogCard imgSrc="/blog2.jpg" title="Prompt Engineering for QA Teams" desc="Learn how to write effective prompts for instant, reliable test generation." />
            <BlogCard imgSrc="/blog3.jpg" title="Scaling Your QA with Autonomous Agents" desc="See how agent-based architecture makes your testing modular and scalable." />
            <BlogCard imgSrc="/blog4.jpg" title="AI Testing for Startups" desc="How Kwest AI helps startups ship faster and with confidence." />
          </div>
        </div>
        <svg className="absolute top-0 right-0 opacity-10" width="400" height="200"><ellipse cx="200" cy="100" rx="200" ry="100" fill="#6366F1" /></svg>
      </motion.section>

      {/* Footer (multi-column) */}
      <footer className="py-16 px-6 bg-gray-900 text-white mt-10 border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <AnimatedLogo size={40} />
              <span className="font-bold text-lg">Kwest AI</span>
            </div>
            <p className="text-gray-400 mb-4">Autonomous Testing from Prompt to Report. No-code, AI-powered test automation for modern teams.</p>
            <div className="text-gray-400 text-sm mb-2">CONTACT</div>
            <div className="text-white font-bold text-lg">contact@kwest.ai</div>
          </div>
          {/* Quick Links */}
          <div>
            <div className="font-bold mb-4">Quick Links</div>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#pricing" className="hover:underline">Pricing</a></li>
              <li><a href="#news" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <div className="font-bold mb-4">Support</div>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
              <li><a href="#contact" className="hover:underline">Contact Us</a></li>
              <li><a href="#docs" className="hover:underline">Docs</a></li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <div className="font-bold mb-4">Newsletter</div>
            <p className="text-gray-400 mb-4">Subscribe to receive future updates</p>
            <form className="flex gap-2">
              <input type="email" placeholder="Email address" className="px-4 py-2 rounded-lg text-gray-900 focus:outline-none" />
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
            </form>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-12">© {new Date().getFullYear()} Kwest AI. All rights reserved.</div>
      </footer>
    </div>
  );
}

// FeatureCard component
function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="p-8 rounded-2xl border shadow-sm bg-white hover:shadow-xl transition group cursor-pointer flex flex-col items-center text-center">
      <div className="mb-6">{icon}</div>
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

// TestimonialCard component
function TestimonialCard({ name, role, text }: { name: string; role: string; text: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow flex flex-col items-center border hover:shadow-lg transition">
      <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-blue-200 flex items-center justify-center bg-blue-100 text-blue-600 font-bold text-2xl">{name[0]}</div>
      <div className="flex gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="20" height="20" fill="#facc15" viewBox="0 0 20 20"><polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,18.99 10,15.27 4.18,18.99 6,12.14 0.49,7.64 7.41,7.36"/></svg>
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">"{text}"</p>
      <div className="flex items-center gap-3">
        <span className="font-semibold">{name}</span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-500">{role}</span>
      </div>
    </div>
  );
}

// FAQItem component
function FAQItem({ question, answer, defaultOpen = false }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-900 bg-gray-50 hover:bg-blue-50 focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {question}
        <span className="ml-4">
          {open ? (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M6 15l6-6 6 6" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          ) : (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          )}
        </span>
      </button>
      {open && (
        <div className="px-6 py-4 bg-white text-gray-700 border-t animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  );
}

// BlogCard component
function BlogCard({ imgSrc, title, desc }: { imgSrc: string; title: string; desc: string }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start">
      <div className="w-full h-40 rounded-lg bg-gray-200 mb-4 overflow-hidden flex items-center justify-center">
        {/* Placeholder for blog image */}
        <span className="text-gray-400">Image</span>
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{desc}</p>
    </div>
  );
}
