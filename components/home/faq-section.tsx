import { SectionHeading } from "@/components/ui/primitives"
import { Reveal } from "@/components/ui/reveal"
import { FaqAccordion } from "@/components/faq-accordion"
import { homeFaqs } from "@/lib/content"

export function FaqSection() {
  return (
    <section className="border-b border-border py-20 md:py-28">
      <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            eyebrow="FAQ"
            title="Answers for enterprise teams"
            description="Everything you need to understand how CLESLA fits into your operation."
          />
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7">
          <FaqAccordion items={homeFaqs} />
        </Reveal>
      </div>
    </section>
  )
}
