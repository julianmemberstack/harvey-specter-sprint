import StickyNav from "../components/StickyNav";
import StickyFooter from "../components/StickyFooter";
import MagneticButton from "../components/MagneticButton";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact | Harvey Specter — H.Studio",
  description: "Get in touch with H.Studio — let's build something meaningful together.",
};

export default function ContactPage() {
  return (
    <>
      <main className="font-[family-name:var(--font-inter)] relative z-10 bg-white">
        <StickyNav />

        {/* ─── Contact Section ─── */}
        <section className="min-h-screen px-4 pt-[120px] pb-16 md:px-8 md:pt-[160px] md:pb-[120px]">
          <div className="flex flex-col md:flex-row gap-16 md:gap-20">
            {/* Left — heading + info */}
            <div className="flex flex-col gap-8 md:w-[40%] md:sticky md:top-[160px] md:self-start">
              <p className="font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f]/50 uppercase leading-[1.1]">
                [ get in touch ]
              </p>
              <h1 className="text-[48px] md:text-[72px] font-light text-black tracking-[-0.04em] leading-[0.95] uppercase">
                Let&apos;s{" "}
                <span className="font-black italic">talk</span>
              </h1>
              <p className="text-base text-[#1f1f1f] leading-[1.5] tracking-[-0.56px] max-w-[380px]">
                Have a project in mind, a question about my process, or just want to say
                hello? Fill out the form and I&apos;ll get back to you within 24 hours.
              </p>

              {/* Contact details */}
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex flex-col gap-1">
                  <p className="font-[family-name:var(--font-geist-mono)] text-xs text-[#1f1f1f]/50 uppercase">
                    Email
                  </p>
                  <a href="mailto:hello@hstudio.com" className="text-base text-black underline tracking-[-0.56px]">
                    hello@hstudio.com
                  </a>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-[family-name:var(--font-geist-mono)] text-xs text-[#1f1f1f]/50 uppercase">
                    Based in
                  </p>
                  <p className="text-base text-black tracking-[-0.56px]">
                    Chicago, IL
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-[family-name:var(--font-geist-mono)] text-xs text-[#1f1f1f]/50 uppercase">
                    Social
                  </p>
                  <div className="flex gap-4 text-base text-black tracking-[-0.56px]">
                    <a href="#" className="underline">Instagram</a>
                    <a href="#" className="underline">X.com</a>
                    <a href="#" className="underline">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="flex-1">
              <ContactForm />
            </div>
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
