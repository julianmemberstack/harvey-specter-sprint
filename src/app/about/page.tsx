import Image from "next/image";
import StickyNav from "../components/StickyNav";
import StickyFooter from "../components/StickyFooter";
import MagneticButton from "../components/MagneticButton";
import TextFillScroll from "../components/TextFillScroll";
import RevealImage from "../components/RevealImage";
import BlurReveal from "../components/BlurReveal";
import ParallaxFloat from "../components/ParallaxFloat";
import AboutHero from "./AboutHero";
import AboutStats from "./AboutStats";

export const metadata = {
  title: "About | Harvey Specter — H.Studio",
  description:
    "Creative Director & Photographer based in Chicago — 8+ years crafting brands, websites, and visual stories.",
};

export default function AboutPage() {
  return (
    <>
      <main className="font-[family-name:var(--font-inter)] relative z-10 bg-white">
        <StickyNav />

        {/* ─── Hero ─── */}
        <AboutHero />

        {/* ─── Story Section ─── */}
        <section className="bg-white px-4 py-16 md:px-8 md:py-[120px]">
          <div className="flex flex-col gap-12 md:gap-20">
            {/* Label */}
            <div className="flex flex-col gap-3 items-end">
              <p className="font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] uppercase leading-[1.1] text-right w-full">
                [ the story ]
              </p>
              <div className="w-full h-px bg-[#1f1f1f]" />
            </div>

            {/* Large text fill block */}
            <TextFillScroll className="about-type flex flex-col gap-2 items-center md:items-start uppercase font-light tracking-[-0.08em] leading-[0.84] text-black whitespace-nowrap">
              <div>
                <span data-fill-word>I </span>
                <span data-fill-word>don&apos;t </span>
                <span data-fill-word>just </span>
                <span data-fill-word>design</span>
              </div>
              <div className="md:ml-[10%]">
                <span data-fill-word>things </span>
                <span data-fill-word>— </span>
                <span data-fill-word>I </span>
                <span data-fill-word>craft</span>
              </div>
              <div className="md:ml-[5%]">
                <span data-fill-word className="font-[family-name:var(--font-playfair)] italic font-normal">experiences</span>
                <span data-fill-word> that</span>
              </div>
              <div className="md:ml-[20%]">
                <span data-fill-word>leave </span>
                <span data-fill-word>a </span>
                <span data-fill-word>mark.</span>
              </div>
            </TextFillScroll>

            {/* Bio content */}
            <div className="flex flex-col md:flex-row gap-10 md:gap-20">
              {/* Left — label */}
              <div className="shrink-0">
                <p className="font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] uppercase leading-[1.1]">
                  [ 001 ]
                </p>
              </div>

              {/* Right — paragraphs */}
              <div className="flex flex-col gap-6 max-w-[640px]">
                <p className="text-lg text-[#1f1f1f] leading-[1.5] tracking-[-0.72px]">
                  I&apos;m Harvey — a creative director and photographer born and raised on
                  the south side of Chicago. For over eight years, I&apos;ve been helping
                  brands find their voice through design, photography, and digital storytelling.
                </p>
                <p className="text-lg text-[#1f1f1f] leading-[1.5] tracking-[-0.72px]">
                  My path started in street photography, documenting the textures and
                  rhythms of the city. That raw, unfiltered eye eventually led me into
                  branding and web design — where I learned that the best work happens
                  at the intersection of bold aesthetics and strategic thinking.
                </p>
                <p className="text-lg text-[#1f1f1f] leading-[1.5] tracking-[-0.72px]">
                  Today, H.Studio is where all of that comes together. I work with
                  founders, startups, and established brands who want more than a
                  pretty deliverable — they want something that moves people.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Full-width Image ─── */}
        <BlurReveal className="w-full aspect-[3/4] md:aspect-[1440/700]">
          <section data-nav-dark className="absolute inset-0">
            <Image
              src="/photographer.jpg"
              alt="Harvey Specter in his element"
              fill
              className="object-cover object-center"
            />
          </section>
        </BlurReveal>

        {/* ─── Philosophy Section ─── */}
        <section className="bg-white px-4 py-16 md:px-8 md:py-[120px]">
          <div className="flex flex-col gap-12 md:gap-20">
            <div className="flex flex-col gap-3 items-end">
              <p className="font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] uppercase leading-[1.1] text-right w-full">
                [ philosophy ]
              </p>
              <div className="w-full h-px bg-[#1f1f1f]" />
            </div>

            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
              {/* Left — large quote */}
              <div className="flex-1">
                <p className="text-[28px] md:text-[42px] font-light italic text-black tracking-[-0.04em] leading-[1.2]">
                  &ldquo;Great design isn&apos;t about making things look good — it&apos;s
                  about making things{" "}
                  <span className="font-black not-italic">feel right</span>.&rdquo;
                </p>
              </div>

              {/* Right — detail */}
              <div className="md:w-[380px] shrink-0 flex flex-col gap-8">
                <div className="relative py-3">
                  {/* Corner brackets */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#1f1f1f]" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#1f1f1f]" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#1f1f1f]" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#1f1f1f]" />

                  <p className="text-sm text-[#1f1f1f] leading-[1.5] tracking-[-0.56px] px-8 py-3">
                    Every project starts with listening. I dig into the why before
                    touching the what. From there, it&apos;s about building something
                    that communicates with clarity, resonates emotionally, and
                    performs where it matters — in the real world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Stats Section ─── */}
        <section
          data-nav-dark
          className="bg-black px-4 py-16 md:px-8 md:py-[120px] font-[family-name:var(--font-inter)]"
        >
          <div className="flex flex-col gap-12">
            <p className="font-[family-name:var(--font-geist-mono)] text-sm text-white uppercase leading-[1.1]">
              [ by the numbers ]
            </p>
            <AboutStats />
          </div>
        </section>

        {/* ─── Expertise Section ─── */}
        <section className="bg-white px-4 py-16 md:px-8 md:py-[120px]">
          <div className="flex flex-col gap-12 md:gap-20">
            <div className="flex flex-col gap-3 items-end">
              <p className="font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] uppercase leading-[1.1] text-right w-full">
                [ expertise ]
              </p>
              <div className="w-full h-px bg-[#1f1f1f]" />
            </div>

            <div className="flex flex-col md:flex-row gap-12 md:gap-6">
              {/* Skill blocks */}
              {[
                {
                  num: "01",
                  title: "Brand Identity",
                  desc: "Logo systems, visual language, brand guidelines, and the strategic thinking that ties it all together. I build brands that are built to last.",
                },
                {
                  num: "02",
                  title: "Web Design & Dev",
                  desc: "From concept to code — responsive, performant websites that look sharp and convert. I design and build, end to end.",
                },
                {
                  num: "03",
                  title: "Photography",
                  desc: "Editorial, commercial, and brand photography. I bring the same design-thinking mindset to every shoot — intentional, composed, impactful.",
                },
                {
                  num: "04",
                  title: "Creative Direction",
                  desc: "Campaign concepting, art direction, and creative strategy. I help teams find the thread that connects every touchpoint.",
                },
              ].map((skill) => (
                <div key={skill.num} className="flex-1 flex flex-col gap-4">
                  <p className="font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] uppercase leading-[1.1]">
                    [ {skill.num} ]
                  </p>
                  <div className="w-full h-px bg-[#1f1f1f]/20" />
                  <h3 className="text-2xl font-bold italic uppercase text-black tracking-[-0.04em] leading-[1.1]">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-[#1f1f1f] leading-[1.5] tracking-[-0.56px]">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Portrait + CTA ─── */}
        <section className="bg-white px-4 py-16 md:px-8 md:py-[120px]">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            {/* Image */}
            <RevealImage className="relative w-full md:w-1/2 aspect-[436/614]">
              <Image
                src="/about-portrait.png"
                alt="Harvey Specter portrait"
                fill
                className="object-cover"
              />
            </RevealImage>

            {/* CTA block */}
            <div className="flex-1 flex flex-col gap-6 md:gap-8">
              <p className="font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] uppercase leading-[1.1]">
                [ let&apos;s connect ]
              </p>
              <p className="text-[28px] md:text-[42px] font-light text-black tracking-[-0.04em] leading-[1.2] uppercase">
                Ready to build something{" "}
                <span className="font-black italic">meaningful</span>?
              </p>
              <p className="text-sm text-[#1f1f1f] leading-[1.5] tracking-[-0.56px] max-w-[420px]">
                Whether you have a clear brief or just the seed of an idea, I&apos;d
                love to hear about it. Every great project starts with a conversation.
              </p>
              <MagneticButton href="/#contact" className="self-start">
                Let&apos;s talk
              </MagneticButton>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <StickyFooter className="bg-black px-4 pt-12 md:px-8 md:pt-12 font-[family-name:var(--font-inter)] overflow-hidden z-0">
        {/* Top area */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-0">
          <div className="flex flex-col gap-3 w-[298px]">
            <p className="text-2xl text-white uppercase tracking-[-0.96px] leading-[1.1] font-light italic">
              Have a{" "}
              <span className="font-black not-italic">project</span> in mind?
            </p>
            <MagneticButton href="/#contact" variant="outline" className="self-start">
              Let&apos;s talk
            </MagneticButton>
          </div>
          <div className="hidden md:block text-lg text-white uppercase tracking-[-0.72px] leading-[1.1] text-center w-[298px]">
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
          <div className="hidden md:block text-lg text-white uppercase tracking-[-0.72px] leading-[1.1] text-right w-[298px]">
            <p>x.com</p>
            <p>Linkedin</p>
          </div>
          <div className="md:hidden flex flex-col gap-2 text-lg text-white uppercase tracking-[-0.72px] leading-[1.1]">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>x.com</p>
            <p>Linkedin</p>
          </div>
        </div>
        <div className="w-full h-px bg-white/30 mt-12" />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mt-12 md:mt-[120px]">
          <div className="relative overflow-hidden h-[120px] md:h-[219px] flex-1">
            <div className="flex items-start gap-2">
              <div className="hidden md:flex items-center justify-center h-[160px] w-[15px] shrink-0">
                <p className="-rotate-90 font-[family-name:var(--font-geist-mono)] text-sm text-white uppercase leading-[1.1] whitespace-nowrap">
                  [ Coded By Claude ]
                </p>
              </div>
              <p className="md:hidden font-[family-name:var(--font-geist-mono)] text-[10px] text-white uppercase leading-[1.1] absolute top-0 left-0">
                [ Coded By Claude ]
              </p>
              <div className="footer-logo font-semibold capitalize text-white tracking-[-0.06em] leading-[0.8] md:ml-0 mt-5 md:mt-0">
                H.Studio
              </div>
            </div>
          </div>
          <div className="flex gap-[34px] items-center pb-8 mt-4 md:mt-0 text-xs text-white uppercase tracking-[-0.48px] leading-[1.1] text-center shrink-0">
            <a href="#" className="underline">licences</a>
            <a href="#" className="underline">Privacy policy</a>
          </div>
        </div>
      </StickyFooter>
    </>
  );
}
