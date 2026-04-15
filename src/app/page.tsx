import Image from "next/image";
import TestimonialSlider from "./components/TestimonialSlider";
import NewsSlider from "./components/NewsSlider";
import MagneticButton from "./components/MagneticButton";
import HeroParallax from "./components/HeroParallax";
import StickyNav from "./components/StickyNav";
import TextFillScroll from "./components/TextFillScroll";
import RevealImage from "./components/RevealImage";
import DriftLeft from "./components/DriftLeft";
import BlurReveal from "./components/BlurReveal";
import ServiceItem from "./components/ServiceItem";
import ProjectCard from "./components/ProjectCard";
import ParallaxColumn from "./components/ParallaxColumn";
import ParallaxFloat from "./components/ParallaxFloat";
import NewsCard from "./components/NewsCard";
import StickyFooter from "./components/StickyFooter";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";

type PortfolioItem = {
  _id: string;
  title: string;
  image: { asset: { _ref: string } };
  tags: string[];
  order: number;
};

const PORTFOLIO_QUERY = `*[_type == "portfolio"] | order(order asc) { _id, title, image, tags, order }`;
const SERVICES_QUERY = `*[_type == "service"] | order(order asc) { _id, title, shortDescription, order }`;
const NEWS_QUERY = `*[_type == "newsArticle"] | order(order asc) { _id, title, excerpt, order }`;

type NewsItem = {
  _id: string;
  title: string;
  excerpt: string;
  order: number;
};

type ServiceItem = {
  _id: string;
  title: string;
  shortDescription: string;
  order: number;
};

// Fallback images for services (until images are uploaded to Sanity)
const SERVICE_IMAGES: Record<number, string> = {
  1: "/service-1.jpg",
  2: "/service-2.jpg",
  3: "/service-3.jpg",
  4: "/service-4.jpg",
};

export default async function Home() {
  const [portfolioResult, servicesResult, newsResult] = await Promise.all([
    sanityFetch({ query: PORTFOLIO_QUERY }),
    sanityFetch({ query: SERVICES_QUERY }),
    sanityFetch({ query: NEWS_QUERY }),
  ]);
  const portfolio = portfolioResult.data as PortfolioItem[];
  const services = servicesResult.data as ServiceItem[];
  const news = newsResult.data as NewsItem[];

  const NEWS_IMAGES: Record<number, string> = { 1: "/news-1.jpg", 2: "/news-2.jpg", 3: "/news-3.jpg" };

  const leftItems = portfolio.filter((_: PortfolioItem, i: number) => i % 2 === 0);
  const rightItems = portfolio.filter((_: PortfolioItem, i: number) => i % 2 === 1);
  return (
    <>
    <main className="font-[family-name:var(--font-inter)] relative z-10 bg-white">
      <StickyNav />

      {/* ─── Hero Section ─── */}
      <HeroParallax>
        {/* Background hero image */}
        <div className="absolute inset-0" data-hero-img>
          <Image
            src="/hero.jpg"
            alt="Harvey Specter"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Backdrop blur overlay — strongest at bottom, fades out towards top */}
        <div
          className="absolute inset-0 pointer-events-none hero-blur-overlay"
          aria-hidden="true"
        />

        {/* Full-height flex layout for hero content */}
        <div className="relative flex h-full flex-col px-4 pb-6 md:px-8 pt-[72px]">
          {/* Hero content — fills remaining space */}
          <div className="flex flex-1 flex-col justify-end mb-[8vh]">
            {/* Hero text group */}
            <div className="hero-text-wrapper flex flex-col items-center md:items-start w-full">
              <p data-hero-hello className="font-[family-name:var(--font-geist-mono)] text-sm uppercase text-white mix-blend-overlay leading-[1.1] will-change-transform">
                [ Hello i&apos;m ]
              </p>
              {/* Desktop: Harvey and Specter on one line, each independently animated */}
              <div className="hero-heading font-medium capitalize text-white mix-blend-overlay hidden md:flex justify-center w-full gap-[0.3em]">
                <span data-hero-harvey className="inline-block will-change-transform">Harvey</span>
                <span data-hero-specter className="inline-block will-change-transform">Specter</span>
              </div>
              {/* Mobile: each word on its own line */}
              <div className="hero-heading font-medium capitalize text-white mix-blend-overlay md:hidden text-center w-full">
                <div data-hero-harvey className="will-change-transform">Harvey</div>
                <div data-hero-specter className="will-change-transform">Specter</div>
              </div>
            </div>

            {/* Description + CTA */}
            <div className="mt-8 md:mt-[15px] flex flex-col items-center md:items-start gap-[17px] self-center md:self-end w-full max-w-[294px]">
              <p className="text-sm uppercase tracking-[-0.56px] text-[#1f1f1f] leading-[1.1] text-center md:text-left">
                <span className="font-bold italic">H.Studio is a </span>
                <span className="italic">full-service</span>
                <span className="font-bold italic">
                  {" "}
                  creative studio creating beautiful digital experiences and
                  products. We are an{" "}
                </span>
                <span className="italic">award winning</span>
                <span className="font-bold italic">
                  {" "}
                  desing and art group specializing in branding, web design and
                  engineering.
                </span>
              </p>
              <MagneticButton href="#contact">
                Let&apos;s talk
              </MagneticButton>
            </div>
          </div>
        </div>
      </HeroParallax>

      {/* ─── About Section ─── */}
      <section
        id="about"
        className="bg-white px-4 py-12 md:px-8 md:py-[120px]"
      >
        <div className="flex flex-col gap-6">
          {/* Top label + line */}
          <div className="flex flex-col gap-3 items-end">
            <p className="font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] uppercase leading-[1.1] text-right w-full">
              [ 8+ years in industry ]
            </p>
            <div className="w-full h-px bg-[#1f1f1f]" />
          </div>

          {/* Large typographic block — text fill on scroll */}
          <TextFillScroll className="about-type flex flex-col gap-2 items-center md:items-start uppercase font-light tracking-[-0.08em] leading-[0.84] text-black whitespace-nowrap">
            {/* Line 1: A CREATIVE DIRECTOR / */}
            <div className="flex items-start gap-3">
              <span className="hidden md:inline font-[family-name:var(--font-geist-mono)] text-sm font-normal tracking-normal leading-[1.1] order-2 self-start mt-1" data-fill-word>
                001
              </span>
              <span className="md:order-1">
                <span data-fill-word>A </span>
                <span data-fill-word>creative </span>
                <span data-fill-word>director</span>
                <span data-fill-word> &nbsp;&nbsp;/</span>
              </span>
            </div>
            <span className="md:hidden font-[family-name:var(--font-geist-mono)] text-sm font-normal tracking-normal leading-[1.1] order-first" data-fill-word>
              001
            </span>

            {/* Line 2: PHOTOGRAPHER */}
            <div className="md:ml-[15%]">
              <span data-fill-word>Photographer</span>
            </div>

            {/* Line 3: BORN & RAISED */}
            <div className="md:ml-[44%]">
              <span data-fill-word>Born </span>
              <span data-fill-word className="font-[family-name:var(--font-playfair)] italic font-normal">&amp;</span>
              <span data-fill-word> raised</span>
            </div>

            {/* Line 4: ON THE SOUTH SIDE */}
            <div>
              <span data-fill-word>on </span>
              <span data-fill-word>the </span>
              <span data-fill-word>south </span>
              <span data-fill-word>side</span>
            </div>

            {/* Line 5: OF CHICAGO. */}
            <div className="md:ml-[44%]">
              <span data-fill-word>of </span>
              <span data-fill-word>chicago.</span>
            </div>

            {/* Creative freelancer label */}
            <div className="flex justify-center md:justify-end w-full">
              <span className="font-[family-name:var(--font-geist-mono)] text-sm font-normal tracking-normal leading-[1.1] mt-2" data-fill-word>
                [ creative freelancer ]
              </span>
            </div>
          </TextFillScroll>
        </div>
      </section>

      {/* ─── About Detail Section ─── */}
      <section className="bg-white px-4 py-12 md:px-8 md:py-[80px]">
        {/* Desktop layout */}
        <div className="hidden md:flex items-start justify-between">
          {/* Left label */}
          <p className="font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] uppercase leading-[1.1] shrink-0">
            [ About ]
          </p>

          {/* Right content */}
          <div className="flex gap-8 items-end w-[68%]">
            {/* Text with corner brackets — drifts left on scroll */}
            <DriftLeft className="flex-1 relative py-3 self-end max-w-[480px]">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#1f1f1f]" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#1f1f1f]" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#1f1f1f]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#1f1f1f]" />

              <p className="text-sm text-[#1f1f1f] leading-[1.3] tracking-[-0.56px] px-8 py-3">
                Placeholder paragraph one. This is where you introduce yourself
                — your background, your passion for your craft, and what drives
                you creatively. Two to three sentences work best here.
                Placeholder paragraph two. Here you can describe your technical
                approach, how you collaborate with clients, or what sets your
                work apart from others in your field.
              </p>
            </DriftLeft>

            {/* Image + label */}
            <div className="flex gap-6 items-start shrink-0 w-[45%] max-w-[460px]">
              <p className="font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] uppercase leading-[1.1] shrink-0">
                002
              </p>
              <RevealImage className="relative w-full aspect-[436/614]">
                <Image
                  src="/about-portrait.png"
                  alt="Portrait"
                  fill
                  className="object-cover"
                />
              </RevealImage>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex flex-col gap-5 md:hidden">
          <p className="font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] uppercase leading-[1.1]">
            002
          </p>
          <p className="font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] uppercase leading-[1.1]">
            [ About ]
          </p>

          {/* Text with corner brackets */}
          <div className="relative py-3">
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#1f1f1f]" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#1f1f1f]" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#1f1f1f]" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#1f1f1f]" />

            <p className="text-sm text-[#1f1f1f] leading-[1.3] tracking-[-0.56px] px-8 py-3">
              Placeholder paragraph one. This is where you introduce yourself —
              your background, your passion for your craft, and what drives you
              creatively. Two to three sentences work best here. Placeholder
              paragraph two. Here you can describe your technical approach, how
              you collaborate with clients, or what sets your work apart from
              others in your field.
            </p>
          </div>

          {/* Portrait */}
          <RevealImage className="relative w-full aspect-[422/594]">
            <Image
              src="/about-portrait.png"
              alt="Portrait"
              fill
              className="object-cover"
            />
          </RevealImage>
        </div>
      </section>

      {/* ─── Full-width Photographer Image ─── */}
      <BlurReveal className="w-full aspect-[3/4] md:aspect-[1440/800]">
        <section data-nav-dark className="absolute inset-0">
          <Image
            src="/photographer.jpg"
            alt="Harvey Specter with camera"
            fill
            className="object-cover object-center"
          />
        </section>
      </BlurReveal>

      {/* ─── Services / Deliverables Section ─── */}
      <section
        data-nav-dark
        id="services"
        className="bg-black px-4 py-12 md:px-8 md:py-[80px] font-[family-name:var(--font-inter)]"
      >
        <div className="flex flex-col gap-8 md:gap-12">
          {/* Section label */}
          <p className="font-[family-name:var(--font-geist-mono)] text-sm text-white uppercase leading-[1.1]">
            [ services ]
          </p>

          {/* [4] DELIVERABLES heading */}
          <div className="flex items-center justify-between uppercase font-light text-white tracking-[-0.08em] deliverables-heading">
            <span>[{services.length}]</span>
            <span>Deliverables</span>
          </div>

          {/* Service items */}
          <div className="flex flex-col gap-12">
            {services.map((service) => (
              <ServiceItem
                key={service._id}
                num={service.order}
                title={service.title}
                desc={service.shortDescription}
                img={SERVICE_IMAGES[service.order] || `/service-${service.order}.jpg`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Selected Work Section ─── */}
      <section
        id="projects"
        className="bg-white px-4 py-12 md:px-8 md:py-[80px] font-[family-name:var(--font-inter)]"
      >
        <div className="flex flex-col gap-8 md:gap-[61px]">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex gap-2.5 items-start uppercase">
              <div className="selected-work-heading font-light text-black tracking-[-0.08em] leading-[0.86]">
                <p>Selected</p>
                <p>Work</p>
              </div>
              <span className="font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] leading-[1.1]">
                004
              </span>
            </div>
            <p className="hidden md:block font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] uppercase leading-[1.1] -rotate-90 origin-center mt-10">
              [ portfolio ]
            </p>
            <p className="md:hidden font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] uppercase leading-[1.1]">
              [ portfolio ]
            </p>
          </div>

          {/* Project grid — 2 columns on desktop, staggered; single column mobile */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-6">
            {/* Left column */}
            <div className="flex-1 flex flex-col gap-6 md:gap-[117px]">
              {leftItems.map((item, i) => (
                <ProjectCard
                  key={item._id}
                  img={urlFor(item.image).width(1340).url()}
                  title={item.title}
                  tags={item.tags ?? []}
                  aspectClass={i % 2 === 0 ? "aspect-[670/744]" : "aspect-[670/699]"}
                />
              ))}

              {/* CTA box with corner brackets — desktop only */}
              <div className="hidden md:block relative py-3 max-w-[465px]">
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#1f1f1f]" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#1f1f1f]" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#1f1f1f]" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#1f1f1f]" />
                <div className="flex flex-col gap-2.5 px-8 py-3">
                  <p className="text-sm italic text-[#1f1f1f] leading-[1.3] tracking-[-0.56px]">
                    Discover how my creativity transforms ideas into impactful
                    digital experiences — schedule a call with me to get started.
                  </p>
                  <MagneticButton href="#contact" className="self-start">
                    Let&apos;s talk
                  </MagneticButton>
                </div>
              </div>
            </div>

            {/* Right column — offset down on desktop, parallax scroll */}
            <ParallaxColumn className="flex-1 flex flex-col gap-6 md:gap-[117px] md:pt-[240px]">
              {rightItems.map((item, i) => (
                <ProjectCard
                  key={item._id}
                  img={urlFor(item.image).width(1340).url()}
                  title={item.title}
                  tags={item.tags ?? []}
                  aspectClass={i % 2 === 0 ? "aspect-[670/699]" : "aspect-[670/744]"}
                />
              ))}
            </ParallaxColumn>
          </div>

          {/* CTA box — mobile only */}
          <div className="md:hidden relative py-3">
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#1f1f1f]" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#1f1f1f]" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#1f1f1f]" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#1f1f1f]" />
            <div className="flex flex-col gap-2.5 px-8 py-3">
              <p className="text-sm italic text-[#1f1f1f] leading-[1.3] tracking-[-0.56px]">
                Discover how my creativity transforms ideas into impactful
                digital experiences — schedule a call with me to get started.
              </p>
              <MagneticButton href="#contact" className="self-start">
                Let&apos;s talk
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Testimonials Section ─── */}
      <section className="relative bg-white px-4 py-16 md:px-8 md:py-[120px] overflow-hidden font-[family-name:var(--font-inter)]">
        {/* Desktop: large centered title with scattered cards */}
        <div className="hidden md:block relative min-h-[800px]">
          {/* Big centered title — absolutely positioned in the middle, behind cards */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="testimonials-heading font-medium capitalize text-black text-center tracking-[-0.07em] leading-[1.1]">
              Testimonials
            </h2>
          </div>

          {/* Card 1 — top-left, rotated */}
          <ParallaxFloat speed={-80} className="absolute left-[7%] top-[10%] rotate-[-6.85deg] z-10">
            <TestimonialCard
              logo="/logo-1.svg"
              logoW={143}
              logoH={19}
              quote="A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive."
              name="Marko Stojković"
            />
          </ParallaxFloat>

          {/* Card 2 — top-right, rotated */}
          <ParallaxFloat speed={-150} className="absolute right-[25%] top-[22%] rotate-[2.9deg]">
            <TestimonialCard
              logo="/logo-2.svg"
              logoW={138}
              logoH={19}
              quote="Professional, precise, and incredibly fast at handling complex product visualizations and templates."
              name="Lukas Weber"
            />
          </ParallaxFloat>

          {/* Card 3 — bottom-left, rotated */}
          <ParallaxFloat speed={-40} className="absolute left-[21%] bottom-[9%] rotate-[2.23deg] z-10">
            <TestimonialCard
              logo="/logo-3.svg"
              logoW={109}
              logoH={31}
              quote="A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity."
              name="Sarah Jenkins"
            />
          </ParallaxFloat>

          {/* Card 4 — bottom-right, rotated */}
          <ParallaxFloat speed={-120} className="absolute right-[5%] bottom-[16%] rotate-[-4.15deg] z-10">
            <TestimonialCard
              logo="/logo-4.svg"
              logoW={81}
              logoH={36}
              quote="An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats."
              name="Sofia Martínez"
            />
          </ParallaxFloat>
        </div>

        {/* Mobile: title + swipeable slider with all 4 cards */}
        <div className="md:hidden flex flex-col gap-8">
          <h2 className="text-[64px] font-medium capitalize text-black text-center tracking-[-0.07em] leading-[0.8]">
            Testimonials
          </h2>
          <TestimonialSlider
            testimonials={[
              {
                logo: "/logo-1.svg",
                logoW: 143,
                logoH: 19,
                quote: "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
                name: "Marko Stojković",
              },
              {
                logo: "/logo-2.svg",
                logoW: 138,
                logoH: 19,
                quote: "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
                name: "Lukas Weber",
              },
              {
                logo: "/logo-3.svg",
                logoW: 109,
                logoH: 31,
                quote: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
                name: "Sarah Jenkins",
              },
              {
                logo: "/logo-4.svg",
                logoW: 81,
                logoH: 36,
                quote: "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
                name: "Sofia Martínez",
              },
            ]}
          />
        </div>
      </section>

      {/* ─── News Section ─── */}
      <section
        id="news"
        className="bg-[#f3f3f3] px-4 py-16 md:px-8 md:py-[120px] font-[family-name:var(--font-inter)] overflow-hidden"
      >
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:-mr-[200px]">
          {/* Rotated heading — desktop only */}
          <div className="hidden md:flex items-center justify-center shrink-0 w-[110px] h-[700px]">
            <div className="-rotate-90 whitespace-nowrap">
              <div className="news-heading font-light text-black tracking-[-0.08em] uppercase leading-[0.86]">
                <p>Keep up with my latest</p>
                <p>news &amp; achievements</p>
              </div>
            </div>
          </div>

          {/* Mobile heading */}
          <div className="md:hidden">
            <h2 className="text-[32px] font-light text-black tracking-[-0.08em] uppercase leading-[0.86]">
              Keep up with my latest news &amp; achievements
            </h2>
          </div>

          {/* News cards — desktop: 3 columns with dividers */}
          <div className="hidden md:flex md:gap-[31px] md:flex-1">
            {news.map((item, i) => (
              <div key={item._id} className="contents">
                {i > 0 && <div className="w-px bg-black/15 self-stretch shrink-0 -mx-[15px]" />}
                <NewsCard
                  img={NEWS_IMAGES[item.order] || `/news-${item.order}.jpg`}
                  title={item.title}
                  excerpt={item.excerpt}
                  className={i === 1 ? "md:pt-[120px]" : ""}
                />
              </div>
            ))}
          </div>

          {/* News cards — mobile: swipeable slider */}
          <div className="md:hidden">
            <NewsSlider
              items={news.map((item) => ({
                img: NEWS_IMAGES[item.order] || `/news-${item.order}.jpg`,
                title: item.title,
                excerpt: item.excerpt,
              }))}
            />
          </div>
        </div>
      </section>

    </main>

    {/* ─── Footer ─── */}
    <StickyFooter
      className="bg-black px-4 pt-12 md:px-8 md:pt-12 font-[family-name:var(--font-inter)] overflow-hidden z-0"
    >
      {/* Top area */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-0">
        {/* CTA */}
        <div className="flex flex-col gap-3 w-[298px]">
          <p className="text-2xl text-white uppercase tracking-[-0.96px] leading-[1.1] font-light italic">
            Have a{" "}
            <span className="font-black not-italic">project</span> in
            mind?
          </p>
          <MagneticButton href="#contact" variant="outline" className="self-start">
            Let&apos;s talk
          </MagneticButton>
        </div>

        {/* Social links — desktop: 2 columns center + right */}
        <div className="hidden md:block text-lg text-white uppercase tracking-[-0.72px] leading-[1.1] text-center w-[298px]">
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
        <div className="hidden md:block text-lg text-white uppercase tracking-[-0.72px] leading-[1.1] text-right w-[298px]">
          <p>x.com</p>
          <p>Linkedin</p>
        </div>

        {/* Social links — mobile: stacked */}
        <div className="md:hidden flex flex-col gap-2 text-lg text-white uppercase tracking-[-0.72px] leading-[1.1]">
          <p>Facebook</p>
          <p>Instagram</p>
          <p>x.com</p>
          <p>Linkedin</p>
        </div>
      </div>

      {/* Divider line */}
      <div className="w-full h-px bg-white/30 mt-12 md:mt-12" />

      {/* Bottom area */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mt-12 md:mt-[120px]">
        {/* Large H.Studio text — clipped at bottom */}
        <div className="relative overflow-hidden h-[120px] md:h-[219px] flex-1">
          <div className="flex items-start gap-2">
            {/* Coded by label — rotated on desktop */}
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

        {/* Legal links */}
        <div className="flex gap-[34px] items-center pb-8 mt-4 md:mt-0 text-xs text-white uppercase tracking-[-0.48px] leading-[1.1] text-center shrink-0">
          <a href="#" className="underline">
            licences
          </a>
          <a href="#" className="underline">
            Privacy policy
          </a>
        </div>
      </div>
    </StickyFooter>
    </>
  );
}


function TestimonialCard({
  logo,
  logoW,
  logoH,
  quote,
  name,
  small,
}: {
  logo: string;
  logoW: number;
  logoH: number;
  quote: string;
  name: string;
  small?: boolean;
}) {
  return (
    <div
      className={`bg-[#f1f1f1] border border-[#ddd] rounded p-6 flex flex-col gap-4 ${
        small ? "w-[260px]" : "w-[353px]"
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logo} alt="" style={{ width: logoW, height: logoH }} className="object-contain" />
      <p className="text-lg text-[#1f1f1f] leading-[1.3] tracking-[-0.72px]">
        {quote}
      </p>
      <p className="text-base font-black uppercase text-black tracking-[-0.64px] leading-[1.1]">
        {name}
      </p>
    </div>
  );
}

