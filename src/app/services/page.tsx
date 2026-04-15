import Image from "next/image";
import StickyNav from "../components/StickyNav";
import StickyFooter from "../components/StickyFooter";
import MagneticButton from "../components/MagneticButton";
import BlurReveal from "../components/BlurReveal";
import TextFillScroll from "../components/TextFillScroll";
import { sanityFetch } from "@/sanity/lib/live";
import ServicesHero from "./ServicesHero";
import ServiceDetail from "./ServiceDetail";

export const metadata = {
  title: "Services | Harvey Specter — H.Studio",
  description:
    "Brand discovery, web design & dev, marketing, and photography — full-service creative from H.Studio.",
};

const SERVICES_QUERY = `*[_type == "service"] | order(order asc) {
  _id, title, slug, shortDescription, longDescription, deliverables, order
}`;

type ServiceDoc = {
  _id: string;
  title: string;
  slug: { current: string };
  shortDescription: string;
  longDescription: string;
  deliverables: string[];
  order: number;
};

const SERVICE_IMAGES: Record<number, string> = {
  1: "/service-1.jpg",
  2: "/service-2.jpg",
  3: "/service-3.jpg",
  4: "/service-4.jpg",
};

export default async function ServicesPage() {
  const { data } = await sanityFetch({ query: SERVICES_QUERY });
  const services = data as ServiceDoc[];

  return (
    <>
      <main className="font-[family-name:var(--font-inter)] relative z-10 bg-white">
        <StickyNav />

        {/* ─── Hero ─── */}
        <ServicesHero />

        {/* ─── Approach Section ─── */}
        <section className="bg-white px-4 py-16 md:px-8 md:py-[120px]">
          <div className="flex flex-col gap-12 md:gap-20">
            <div className="flex flex-col gap-3 items-end">
              <p className="font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] uppercase leading-[1.1] text-right w-full">
                [ approach ]
              </p>
              <div className="w-full h-px bg-[#1f1f1f]" />
            </div>

            <TextFillScroll className="about-type flex flex-col gap-2 items-center md:items-start uppercase font-light tracking-[-0.08em] leading-[0.84] text-black whitespace-nowrap">
              <div>
                <span data-fill-word>Strategy </span>
                <span data-fill-word>first,</span>
              </div>
              <div className="md:ml-[12%]">
                <span data-fill-word>pixels </span>
                <span data-fill-word>second.</span>
              </div>
              <div className="md:ml-[5%]">
                <span data-fill-word className="font-[family-name:var(--font-playfair)] italic font-normal">Always</span>
                <span data-fill-word> with</span>
              </div>
              <div className="md:ml-[18%]">
                <span data-fill-word>intention.</span>
              </div>
            </TextFillScroll>
          </div>
        </section>

        {/* ─── Full-width Image ─── */}
        <BlurReveal className="w-full aspect-[3/4] md:aspect-[1440/600]">
          <section data-nav-dark className="absolute inset-0">
            <Image
              src="/photographer.jpg"
              alt="Creative process"
              fill
              className="object-cover object-center"
            />
          </section>
        </BlurReveal>

        {/* ─── Service Details ─── */}
        <section className="bg-white px-4 py-16 md:px-8 md:py-[120px]">
          <div className="flex flex-col gap-20 md:gap-32">
            <div className="flex flex-col gap-3 items-end">
              <p className="font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] uppercase leading-[1.1] text-right w-full">
                [ {services.length} services ]
              </p>
              <div className="w-full h-px bg-[#1f1f1f]" />
            </div>

            {services.map((service, i) => (
              <ServiceDetail
                key={service._id}
                num={service.order}
                title={service.title}
                shortDescription={service.shortDescription}
                longDescription={service.longDescription}
                image={SERVICE_IMAGES[service.order] || `/service-${service.order}.jpg`}
                deliverables={service.deliverables ?? []}
                reversed={i % 2 === 1}
              />
            ))}
          </div>
        </section>

        {/* ─── Process Section ─── */}
        <section
          data-nav-dark
          className="bg-black px-4 py-16 md:px-8 md:py-[120px] font-[family-name:var(--font-inter)]"
        >
          <div className="flex flex-col gap-12">
            <p className="font-[family-name:var(--font-geist-mono)] text-sm text-white uppercase leading-[1.1]">
              [ the process ]
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  desc: "We start by understanding your brand, your audience, and your goals. Deep research, honest conversations, and strategic clarity.",
                },
                {
                  step: "02",
                  title: "Create",
                  desc: "From concept to execution — we design, build, and refine. Every detail is intentional, every decision backed by strategy.",
                },
                {
                  step: "03",
                  title: "Deliver",
                  desc: "Launch-ready work, on time. We hand off clean assets, provide documentation, and stay available for what comes next.",
                },
              ].map((item) => (
                <div key={item.step} className="flex flex-col gap-4">
                  <span className="text-[64px] md:text-[96px] font-light text-white/20 tracking-[-0.06em] leading-[0.9]">
                    {item.step}
                  </span>
                  <div className="w-full h-px bg-white/20" />
                  <h3 className="text-2xl font-bold italic uppercase text-white tracking-[-0.04em] leading-[1.1]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-[1.5] tracking-[-0.56px]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA Section ─── */}
        <section className="bg-white px-4 py-16 md:px-8 md:py-[120px]">
          <div className="flex flex-col items-center gap-8 text-center max-w-[640px] mx-auto">
            <p className="font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] uppercase leading-[1.1]">
              [ let&apos;s work together ]
            </p>
            <p className="text-[28px] md:text-[48px] font-light text-black tracking-[-0.04em] leading-[1.1] uppercase">
              Have a project in{" "}
              <span className="font-black italic">mind</span>?
            </p>
            <p className="text-sm text-[#1f1f1f] leading-[1.5] tracking-[-0.56px] max-w-[420px]">
              Every great project starts with a conversation. Tell me about your
              vision and let&apos;s figure out how to make it real.
            </p>
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
