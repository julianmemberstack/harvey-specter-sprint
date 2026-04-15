import Image from "next/image";
import StickyNav from "../components/StickyNav";
import StickyFooter from "../components/StickyFooter";
import MagneticButton from "../components/MagneticButton";
import ProjectCard from "../components/ProjectCard";
import ParallaxColumn from "../components/ParallaxColumn";
import TextFillScroll from "../components/TextFillScroll";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import ProjectsHero from "./ProjectsHero";

export const metadata = {
  title: "Projects | Harvey Specter — H.Studio",
  description:
    "Selected work across branding, web design, photography, and creative direction by H.Studio.",
};

const PORTFOLIO_QUERY = `*[_type == "portfolio"] | order(order asc) { _id, title, image, tags, order }`;

type PortfolioItem = {
  _id: string;
  title: string;
  image: { asset: { _ref: string } };
  tags: string[];
  order: number;
};

export default async function ProjectsPage() {
  const { data } = await sanityFetch({ query: PORTFOLIO_QUERY });
  const portfolio = data as PortfolioItem[];

  const leftItems = portfolio.filter((_: PortfolioItem, i: number) => i % 2 === 0);
  const rightItems = portfolio.filter((_: PortfolioItem, i: number) => i % 2 === 1);

  return (
    <>
      <main className="font-[family-name:var(--font-inter)] relative z-10 bg-white">
        <StickyNav />

        {/* ─── Hero ─── */}
        <ProjectsHero />

        {/* ─── Intro Text ─── */}
        <section className="bg-white px-4 py-16 md:px-8 md:py-[120px]">
          <div className="flex flex-col gap-12 md:gap-20">
            <div className="flex flex-col gap-3 items-end">
              <p className="font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] uppercase leading-[1.1] text-right w-full">
                [ {portfolio.length} projects ]
              </p>
              <div className="w-full h-px bg-[#1f1f1f]" />
            </div>

            <TextFillScroll className="about-type flex flex-col gap-2 items-center md:items-start uppercase font-light tracking-[-0.08em] leading-[0.84] text-black whitespace-nowrap">
              <div>
                <span data-fill-word>Every </span>
                <span data-fill-word>project</span>
              </div>
              <div className="md:ml-[8%]">
                <span data-fill-word>tells </span>
                <span data-fill-word>a </span>
                <span data-fill-word className="font-[family-name:var(--font-playfair)] italic font-normal">story</span>
                <span data-fill-word>.</span>
              </div>
              <div className="md:ml-[15%]">
                <span data-fill-word>Here </span>
                <span data-fill-word>are </span>
                <span data-fill-word>mine.</span>
              </div>
            </TextFillScroll>
          </div>
        </section>

        {/* ─── Projects Grid ─── */}
        <section className="bg-white px-4 pb-16 md:px-8 md:pb-[120px]">
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
            </div>

            {/* Right column — offset + parallax */}
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
        </section>

        {/* ─── CTA Section ─── */}
        <section className="bg-[#f3f3f3] px-4 py-16 md:px-8 md:py-[120px] font-[family-name:var(--font-inter)]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div className="flex flex-col gap-4 max-w-[500px]">
              <p className="font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f]/50 uppercase leading-[1.1]">
                [ next steps ]
              </p>
              <p className="text-[28px] md:text-[48px] font-light text-black tracking-[-0.04em] leading-[1.1] uppercase">
                Like what you{" "}
                <span className="font-black italic">see</span>?
              </p>
              <p className="text-sm text-[#1f1f1f] leading-[1.5] tracking-[-0.56px]">
                Every project here started with a single conversation. If you have a
                vision — or even just the spark of one — I&apos;d love to hear about it.
              </p>
            </div>
            <MagneticButton href="/#contact">
              Let&apos;s talk
            </MagneticButton>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <StickyFooter className="bg-black px-4 pt-12 md:px-8 md:pt-12 font-[family-name:var(--font-inter)] overflow-hidden z-0">
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
