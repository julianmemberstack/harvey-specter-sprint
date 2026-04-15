import Image from "next/image";
import MobileMenu from "./components/MobileMenu";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-inter)]">
      {/* ─── Hero Section ─── */}
      <section className="relative h-screen overflow-hidden">
        {/* Background hero image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Harvey Specter"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Blurred copy of image — full screen, masked to only show at bottom */}
        <div className="absolute inset-0 pointer-events-none hero-blur-mask">
          <Image
            src="/hero.jpg"
            alt=""
            fill
            className="object-cover object-top blur-lg"
            aria-hidden="true"
          />
        </div>

        {/* Full-height flex layout for navbar + hero */}
        <div className="relative flex h-full flex-col px-4 pb-6 md:px-8">
          {/* Navbar */}
          <nav className="flex items-center justify-between py-6 shrink-0">
            <span className="text-base font-semibold capitalize tracking-[-0.64px] text-black">
              H.Studio
            </span>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-14 text-base font-semibold capitalize tracking-[-0.64px] text-black">
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#projects">Projects</a>
              <a href="#news">News</a>
              <a href="#contact">Contact</a>
            </div>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden md:flex items-center justify-center rounded-3xl bg-black px-4 py-3 text-sm font-medium tracking-[-0.56px] text-white"
            >
              Let&apos;s talk
            </a>

            {/* Mobile hamburger */}
            <MobileMenu />
          </nav>

          {/* Hero content — fills remaining space */}
          <div className="flex flex-1 flex-col justify-end mb-[8vh]">
            {/* Hero text group */}
            <div className="hero-text-wrapper flex flex-col items-center md:items-start w-full">
              <p className="font-[family-name:var(--font-geist-mono)] text-sm uppercase text-white mix-blend-overlay leading-[1.1]">
                [ Hello i&apos;m ]
              </p>
              {/* Desktop: single line with nbsp spacing */}
              <h1 className="hero-heading font-medium capitalize text-white mix-blend-overlay hidden md:block text-center w-full">
                Harvey &nbsp; Specter
              </h1>
              {/* Mobile: each word centered on its own line */}
              <h1 className="hero-heading font-medium capitalize text-white mix-blend-overlay md:hidden text-center w-full">
                Harvey
                <br />
                Specter
              </h1>
            </div>

            {/* Description + CTA */}
            <div className="mt-6 md:mt-0 flex flex-col items-start gap-[17px] md:self-end w-[294px]">
              <p className="text-sm uppercase tracking-[-0.56px] text-[#1f1f1f] leading-[1.1]">
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
              <a
                href="#contact"
                className="flex items-center justify-center rounded-3xl bg-black px-4 py-3 text-sm font-medium tracking-[-0.56px] text-white"
              >
                Let&apos;s talk
              </a>
            </div>
          </div>
        </div>
      </section>

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

          {/* Large typographic block */}
          <div className="about-type flex flex-col gap-2 items-center md:items-start uppercase font-light tracking-[-0.08em] leading-[0.84] text-black whitespace-nowrap">
            {/* Line 1: A CREATIVE DIRECTOR / */}
            <div className="flex items-start gap-3">
              <span className="hidden md:inline font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] font-normal tracking-normal leading-[1.1] order-2 self-start mt-1">
                001
              </span>
              <span className="md:order-1">A creative director &nbsp;&nbsp;/</span>
            </div>
            <span className="md:hidden font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] font-normal tracking-normal leading-[1.1] order-first">
              001
            </span>

            {/* Line 2: PHOTOGRAPHER */}
            <div className="md:ml-[15%]">Photographer</div>

            {/* Line 3: BORN & RAISED */}
            <div className="md:ml-[44%]">
              Born{" "}
              <span className="font-[family-name:var(--font-playfair)] italic font-normal">
                &amp;
              </span>{" "}
              raised
            </div>

            {/* Line 4: ON THE SOUTH SIDE */}
            <div>on the south side</div>

            {/* Line 5: OF CHICAGO. */}
            <div className="md:ml-[44%]">of chicago.</div>

            {/* Creative freelancer label */}
            <div className="flex justify-center md:justify-end w-full">
              <span className="font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] font-normal tracking-normal leading-[1.1] mt-2">
                [ creative freelancer ]
              </span>
            </div>
          </div>
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
            {/* Text with corner brackets */}
            <div className="flex-1 relative py-3 self-end max-w-[480px]">
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
            </div>

            {/* Image + label */}
            <div className="flex gap-6 items-start shrink-0 w-[45%] max-w-[460px]">
              <p className="font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] uppercase leading-[1.1] shrink-0">
                002
              </p>
              <div className="relative w-full aspect-[436/614]">
                <Image
                  src="/about-portrait.png"
                  alt="Portrait"
                  fill
                  className="object-cover"
                />
              </div>
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
          <div className="relative w-full aspect-[422/594]">
            <Image
              src="/about-portrait.png"
              alt="Portrait"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ─── Full-width Photographer Image ─── */}
      <section className="relative w-full aspect-[3/4] md:aspect-[1440/800]">
        <Image
          src="/photographer.jpg"
          alt="Harvey Specter with camera"
          fill
          className="object-cover object-center"
        />
      </section>

      {/* ─── Services / Deliverables Section ─── */}
      <section
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
            <span>[4]</span>
            <span>Deliverables</span>
          </div>

          {/* Service items */}
          <div className="flex flex-col gap-12">
            {[
              {
                num: 1,
                title: "Brand Discovery",
                desc: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
                img: "/service-1.jpg",
              },
              {
                num: 2,
                title: "Web design & Dev",
                desc: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
                img: "/service-2.jpg",
              },
              {
                num: 3,
                title: "Marketing",
                desc: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
                img: "/service-3.jpg",
              },
              {
                num: 4,
                title: "Photography",
                desc: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
                img: "/service-4.jpg",
              },
            ].map((service) => (
              <div key={service.num} className="flex flex-col gap-3">
                {/* Number + line */}
                <p className="font-[family-name:var(--font-geist-mono)] text-sm text-white uppercase leading-[1.1]">
                  [ {service.num} ]
                </p>
                <div className="w-full h-px bg-white/30" />

                {/* Content row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  {/* Service title */}
                  <h3 className="text-4xl font-bold italic uppercase text-white tracking-[-0.04em] leading-[1.1]">
                    {service.title}
                  </h3>

                  {/* Description + thumbnail */}
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-start">
                    <p className="text-sm text-white leading-[1.3] tracking-[-0.56px] md:w-[393px]">
                      {service.desc}
                    </p>
                    <div className="relative w-[151px] h-[151px] shrink-0">
                      <Image
                        src={service.img}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
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
              <ProjectCard
                img="/work-1.jpg"
                title="Surfers paradise"
                tags={["Social Media", "Photography"]}
                aspectClass="aspect-[670/744]"
              />
              <ProjectCard
                img="/work-2.jpg"
                title="Cyberpunk caffe"
                tags={["Social Media", "Photography"]}
                aspectClass="aspect-[670/699]"
              />

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
                  <a
                    href="#contact"
                    className="self-start flex items-center justify-center rounded-3xl bg-black px-4 py-3 text-sm font-medium tracking-[-0.56px] text-white"
                  >
                    Let&apos;s talk
                  </a>
                </div>
              </div>
            </div>

            {/* Right column — offset down on desktop */}
            <div className="flex-1 flex flex-col gap-6 md:gap-[117px] md:pt-[240px]">
              <ProjectCard
                img="/work-3.jpg"
                title="Agency 976"
                tags={["Social Media", "Photography"]}
                aspectClass="aspect-[670/699]"
              />
              <ProjectCard
                img="/work-4.jpg"
                title="Minimal Playground"
                tags={["Social Media", "Photography"]}
                aspectClass="aspect-[670/744]"
              />
            </div>
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
              <a
                href="#contact"
                className="self-start flex items-center justify-center rounded-3xl bg-black px-4 py-3 text-sm font-medium tracking-[-0.56px] text-white"
              >
                Let&apos;s talk
              </a>
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
          <div className="absolute left-[7%] top-[10%] rotate-[-6.85deg] z-10">
            <TestimonialCard
              logo="/logo-1.svg"
              logoW={143}
              logoH={19}
              quote="A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive."
              name="Marko Stojković"
            />
          </div>

          {/* Card 2 — top-right, rotated */}
          <div className="absolute right-[25%] top-[22%] rotate-[2.9deg]">
            <TestimonialCard
              logo="/logo-2.svg"
              logoW={138}
              logoH={19}
              quote="Professional, precise, and incredibly fast at handling complex product visualizations and templates."
              name="Lukas Weber"
            />
          </div>

          {/* Card 3 — bottom-left, rotated */}
          <div className="absolute left-[21%] bottom-[9%] rotate-[2.23deg] z-10">
            <TestimonialCard
              logo="/logo-3.svg"
              logoW={109}
              logoH={31}
              quote="A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity."
              name="Sarah Jenkins"
            />
          </div>

          {/* Card 4 — bottom-right, rotated */}
          <div className="absolute right-[5%] bottom-[16%] rotate-[-4.15deg] z-10">
            <TestimonialCard
              logo="/logo-4.svg"
              logoW={81}
              logoH={36}
              quote="An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats."
              name="Sofia Martínez"
            />
          </div>
        </div>

        {/* Mobile: title + horizontally scrolling cards */}
        <div className="md:hidden flex flex-col gap-8">
          <h2 className="text-[64px] font-medium capitalize text-black text-center tracking-[-0.07em] leading-[0.8]">
            Testimonials
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4">
            <div className="shrink-0 rotate-[-3.5deg]">
              <TestimonialCard
                logo="/logo-1.svg"
                logoW={143}
                logoH={19}
                quote="A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive."
                name="Marko Stojković"
                small
              />
            </div>
            <div className="shrink-0 rotate-[2deg]">
              <TestimonialCard
                logo="/logo-4.svg"
                logoW={81}
                logoH={36}
                quote="An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats."
                name="Sofia Martínez"
                small
              />
            </div>
          </div>
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

          {/* News cards — 3 fixed-width columns with vertical dividers */}
          <div className="flex gap-4 overflow-x-auto md:gap-[31px] md:flex-1">
            {/* Card 1 */}
            <NewsCard img="/news-1.jpg" />

            {/* Divider */}
            <div className="hidden md:block w-px bg-black/15 self-stretch shrink-0 -mx-[15px]" />

            {/* Card 2 — offset down */}
            <NewsCard img="/news-2.jpg" className="md:pt-[120px]" />

            {/* Divider */}
            <div className="hidden md:block w-px bg-black/15 self-stretch shrink-0 -mx-[15px]" />

            {/* Card 3 */}
            <NewsCard img="/news-3.jpg" />
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer
        id="contact"
        className="bg-black px-4 pt-12 md:px-8 md:pt-12 font-[family-name:var(--font-inter)] overflow-hidden"
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
            <a
              href="#contact"
              className="self-start flex items-center justify-center rounded-3xl border border-white px-4 py-3 text-sm font-medium tracking-[-0.56px] text-white"
            >
              Let&apos;s talk
            </a>
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
      </footer>
    </main>
  );
}

function NewsCard({
  img,
  className = "",
}: {
  img: string;
  className?: string;
}) {
  return (
    <div
      className={`shrink-0 w-[300px] md:w-[353px] flex flex-col gap-4 ${className}`}
    >
      <div className="relative w-full aspect-[353/469] overflow-hidden">
        <Image src={img} alt="News" fill className="object-cover" />
      </div>
      <p className="text-sm text-[#1f1f1f] leading-[1.3] tracking-[-0.56px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <a
        href="#"
        className="inline-flex items-center gap-2.5 border-b border-black pb-1 self-start text-sm font-medium text-black tracking-[-0.56px]"
      >
        Read more
        <svg
          className="w-[18px] h-[18px] -rotate-90"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M18.7235 16.0531L11.1704 8.5L8.5 11.1704L16.053 18.7235H10.2263V22.5H22.5V10.2262H18.7235V16.0531Z"
            fill="black"
          />
        </svg>
      </a>
    </div>
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

function ProjectCard({
  img,
  title,
  tags,
  aspectClass,
}: {
  img: string;
  title: string;
  tags: string[];
  aspectClass: string;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      {/* Image with tags */}
      <div className={`relative w-full ${aspectClass} overflow-hidden`}>
        <Image src={img} alt={title} fill className="object-cover" />
        <div className="absolute bottom-4 left-4 flex gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="backdrop-blur-[10px] bg-white/30 rounded-3xl px-2 py-1 text-sm font-medium text-[#111] tracking-[-0.56px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {/* Title + arrow */}
      <div className="flex items-center justify-between">
        <h3 className="text-2xl md:text-4xl font-black uppercase text-black tracking-[-0.04em] leading-[1.1]">
          {title}
        </h3>
        <div className="w-8 h-8 -rotate-90">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.7235 16.0531L11.1704 8.5L8.5 11.1704L16.053 18.7235H10.2263V22.5H22.5V10.2262H18.7235V16.0531Z" fill="black"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
