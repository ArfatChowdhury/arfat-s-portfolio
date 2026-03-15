"use client";

import { Preloader } from "@/components/ui/preloader";
import { Navbar } from "@/components/sections/navbar";
import { Opening } from "@/components/sections/opening";
import { Work } from "@/components/sections/work";
import { Experience } from "@/components/sections/experience";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Closing } from "@/components/sections/closing";
import { LensScrollbar } from "@/components/ui/lens-scrollbar";

export default function Home() {
    return (
        <Preloader>
            <main className="min-h-screen bg-background text-foreground">
                <LensScrollbar />
                <Navbar />
                <Opening />
                <Work />
                <Experience />
                <About />
                <Skills />
                {/* <Testimonials /> */}
                <Contact />
                <Closing />
            </main>
        </Preloader>
    );
}
