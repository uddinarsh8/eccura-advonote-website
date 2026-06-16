import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Screenshots from "../components/Screenshots";
import HowItWorks from "../components/HowItWorks";
import Benefits from "../components/Benefits";
import WhyChoose from "../components/WhyChoose";
import FAQ from "../components/FAQ";
import Security from "../components/Security";
import Testimonials from "../components/Testimonials";
import ContactDemo from "../components/ContactDemo";
import AboutEccura from "../components/AboutEccura";
import Footer from "../components/Footer";

function Home() {

    return (

        <>

            <Navbar />

            <Hero />

            <Stats />

            <Features />

            <Screenshots />

            <HowItWorks />

            <Benefits />

            <WhyChoose />

            <FAQ />

            <Security />

            <Testimonials />

            {/* Demo + Contact Forms */}
            <ContactDemo />

            <AboutEccura />

            <Footer />

        </>

    );

}

export default Home;