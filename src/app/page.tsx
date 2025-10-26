"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Crown, Gem, Heart, MessageCircle, Phone, Sparkles, Star } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Inventory", id: "inventory" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Ferrari LA"
          button={{
            text: "Schedule Test Drive",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Ferrari Excellence"
          description="Discover the world's most prestigious supercars at our exclusive Los Angeles showroom. From the iconic 488 GTB to the revolutionary SF90 Stradale."
          tag="Premium Dealership"
          tagIcon={Crown}
          buttons={[
            { text: "View Inventory", href: "inventory" },
            { text: "Schedule Visit", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/30735110/pexels-photo-30735110.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury Ferrari showroom in Los Angeles"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Ferrari Los Angeles"
          description="For over two decades, we've been the premier destination for Ferrari enthusiasts in Southern California. Our commitment to excellence mirrors the legendary Italian marque we represent."
          tag="Heritage"
          tagIcon={Star}
          bulletPoints={[
            {
              title: "Certified Excellence",
              description: "Official Ferrari dealership with factory-trained technicians",
              icon: Award
            },
            {
              title: "Exclusive Collection",
              description: "Curated selection of new and pre-owned Ferrari models",
              icon: Gem
            },
            {
              title: "White-Glove Service",
              description: "Personalized experience from selection to delivery",
              icon: Heart
            }
          ]}
          imageSrc="https://images.pexels.com/photos/6765517/pexels-photo-6765517.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Ferrari manufacturing and craftsmanship"
          imagePosition="right"
        />
      </div>

      <div id="inventory" data-section="inventory">
        <ProductCardOne
          title="Current Inventory"
          description="Explore our exceptional collection of Ferrari supercars, each meticulously maintained and ready for their next passionate owner."
          tag="Available Now"
          tagIcon={Sparkles}
          products={[
            {
              id: "1",
              name: "Ferrari 488 GTB",
              price: "$285,000",
              imageSrc: "https://images.pexels.com/photos/17855734/pexels-photo-17855734.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Ferrari 488 GTB"
            },
            {
              id: "2",
              name: "Ferrari F8 Tributo",
              price: "$325,000",
              imageSrc: "https://images.pexels.com/photos/10292237/pexels-photo-10292237.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Ferrari F8 Tributo"
            },
            {
              id: "3",
              name: "Ferrari Portofino",
              price: "$245,000",
              imageSrc: "https://images.pexels.com/photos/11629361/pexels-photo-11629361.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Ferrari Portofino"
            },
            {
              id: "4",
              name: "Ferrari 812 Superfast",
              price: "$385,000",
              imageSrc: "https://images.pexels.com/photos/2664399/pexels-photo-2664399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Ferrari 812 Superfast"
            },
            {
              id: "5",
              name: "Ferrari SF90 Stradale",
              price: "$625,000",
              imageSrc: "https://images.pexels.com/photos/12801137/pexels-photo-12801137.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Ferrari SF90 Stradale"
            },
            {
              id: "6",
              name: "Ferrari Roma",
              price: "$265,000",
              imageSrc: "https://images.pexels.com/photos/9761025/pexels-photo-9761025.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Ferrari Roma"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Luxury Enthusiasts"
          description="Join discerning collectors who trust us with their automotive passion"
          logos={[
            "https://images.pexels.com/photos/26954172/pexels-photo-26954172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/18234127/pexels-photo-18234127.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/6152797/pexels-photo-6152797.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/34327213/pexels-photo-34327213.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/29964436/pexels-photo-29964436.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/31494562/pexels-photo-31494562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/16713659/pexels-photo-16713659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={35}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Hear from Ferrari owners who chose us for their dream car journey"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Michael Chen",
              role: "CEO",
              company: "Tech Ventures",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/9520199/pexels-photo-9520199.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Sarah Rodriguez",
              role: "Investment Director",
              company: "Capital Group",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7552374/pexels-photo-7552374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "David Kim",
              role: "Entrepreneur",
              company: "Innovation Labs",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/16753313/pexels-photo-16753313.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "Alexandra White",
              role: "Collector",
              company: "Private Equity",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/14440464/pexels-photo-14440464.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "5",
              name: "Robert Martinez",
              role: "Business Owner",
              company: "Martinez Holdings",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6914068/pexels-photo-6914068.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          tagIcon={Phone}
          title="Ready to Experience Ferrari?"
          description="Schedule a private viewing or test drive at our exclusive Los Angeles showroom. Our Ferrari specialists are ready to help you find your perfect match."
          inputPlaceholder="Enter your email"
          buttonText="Contact Us"
          termsText="By contacting us, you agree to receive updates about Ferrari vehicles and events."
          imageSrc="https://images.pexels.com/photos/19444126/pexels-photo-19444126.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Ferrari showroom interior"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Ferrari LA"
          columns={[
            {
              items: [
                { label: "Current Inventory", href: "inventory" },
                { label: "Pre-Owned", href: "inventory" },
                { label: "Financing", href: "contact" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Service Center", href: "contact" },
                { label: "Test Drive", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Location", href: "contact" },
                { label: "Hours", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}