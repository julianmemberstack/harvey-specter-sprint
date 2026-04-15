import StickyNav from "../components/StickyNav";
import StickyFooter from "../components/StickyFooter";
import MagneticButton from "../components/MagneticButton";
import TextFillScroll from "../components/TextFillScroll";
import { sanityFetch } from "@/sanity/lib/live";
import NewsHero from "./NewsHero";
import NewsArticleCard from "./NewsArticleCard";

export const metadata = {
  title: "News | Harvey Specter — H.Studio",
  description: "Latest news, updates, and achievements from H.Studio.",
};

const NEWS_QUERY = `*[_type == "newsArticle"] | order(order asc) {
  _id, title, slug, excerpt, body, publishedAt, order
}`;

type NewsDoc = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  body: string;
  publishedAt: string;
  order: number;
};

const NEWS_IMAGES: Record<number, string> = {
  1: "/news-1.jpg",
  2: "/news-2.jpg",
  3: "/news-3.jpg",
};

export default async function NewsPage() {
  const { data } = await sanityFetch({ query: NEWS_QUERY });
  const articles = data as NewsDoc[];

  return (
    <>
      <main className="font-[family-name:var(--font-inter)] relative z-10 bg-white">
        <StickyNav />

        {/* ─── Hero ─── */}
        <NewsHero />

        {/* ─── Intro ─── */}
        <section className="bg-white px-4 py-16 md:px-8 md:py-[120px]">
          <div className="flex flex-col gap-12 md:gap-20">
            <div className="flex flex-col gap-3 items-end">
              <p className="font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] uppercase leading-[1.1] text-right w-full">
                [ {articles.length} articles ]
              </p>
              <div className="w-full h-px bg-[#1f1f1f]" />
            </div>

            <TextFillScroll className="about-type flex flex-col gap-2 items-center md:items-start uppercase font-light tracking-[-0.08em] leading-[0.84] text-black whitespace-nowrap">
              <div>
                <span data-fill-word>Keeping </span>
                <span data-fill-word>you</span>
              </div>
              <div className="md:ml-[10%]">
                <span data-fill-word>in </span>
                <span data-fill-word>the </span>
                <span data-fill-word className="font-[family-name:var(--font-playfair)] italic font-normal">loop</span>
                <span data-fill-word>.</span>
              </div>
            </TextFillScroll>
          </div>
        </section>

        {/* ─── Articles ─── */}
        <section className="bg-white px-4 pb-16 md:px-8 md:pb-[120px]">
          <div className="flex flex-col gap-20 md:gap-32">
            {articles.map((article, i) => (
              <NewsArticleCard
                key={article._id}
                img={NEWS_IMAGES[article.order] || `/news-${article.order}.jpg`}
                title={article.title}
                excerpt={article.excerpt}
                date={new Date(article.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                reversed={i % 2 === 1}
              />
            ))}
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="bg-[#f3f3f3] px-4 py-16 md:px-8 md:py-[120px]">
          <div className="flex flex-col items-center gap-8 text-center max-w-[640px] mx-auto">
            <p className="font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f]/50 uppercase leading-[1.1]">
              [ stay connected ]
            </p>
            <p className="text-[28px] md:text-[48px] font-light text-black tracking-[-0.04em] leading-[1.1] uppercase">
              Got a{" "}
              <span className="font-black italic">story</span> to tell?
            </p>
            <p className="text-sm text-[#1f1f1f] leading-[1.5] tracking-[-0.56px] max-w-[420px]">
              Whether it&apos;s a collaboration, a feature, or just a hello — I&apos;d love to hear from you.
            </p>
            <MagneticButton href="#contact">
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
            <MagneticButton href="#contact" variant="outline" className="self-start">
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
