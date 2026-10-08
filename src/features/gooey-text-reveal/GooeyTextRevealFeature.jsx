import { useRef } from 'react'
import { ArrowDown } from 'lucide-react'
import { GooeyTextReveal } from '@/components/ui/gooey-text-reveal'
import './gooey-text-reveal.css'

const asset = (file) => `${import.meta.env.BASE_URL}gooey-text-reveal/${file}`

const paintings = [
  { src: asset('img1.jpg'), alt: 'A classical painting lit against a deep shadow' },
  { src: asset('img2.jpg'), alt: 'A dramatic old master painting' },
  { src: asset('img3.jpg'), alt: 'A historic painting rendered in warm light' },
  { src: asset('img4.jpg'), alt: 'A classical figure emerging from darkness' },
]

const headingClass =
  'gooey-reveal-display text-[clamp(2.2rem,6vw,5.5rem)] leading-[0.94] tracking-[-0.035em]'
const listClass =
  'gooey-reveal-display text-[clamp(2.8rem,8vw,6.5rem)] leading-[0.9] tracking-[-0.045em]'

function Painting({ index }) {
  const painting = paintings[index]

  return (
    <div className="relative min-h-full w-full overflow-hidden bg-[#181816]">
      <img
        src={painting.src}
        alt={painting.alt}
        loading={index === 0 ? 'eager' : 'lazy'}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  )
}

export function GooeyTextRevealFeature() {
  const scrollAreaRef = useRef(null)

  const scrollToFirstPainting = () => {
    scrollAreaRef.current?.scrollTo({
      top: scrollAreaRef.current.clientHeight,
      behavior: 'smooth',
    })
  }

  return (
    <div
      ref={scrollAreaRef}
      className="relative h-screen w-full overflow-y-auto overscroll-contain bg-[#f6f6f3] text-[#1a1a18] transition-colors dark:bg-[#10100f] dark:text-[#f1eee6]"
    >
      <div className="pointer-events-none sticky top-0 z-30 h-0">
        <div className="flex items-center justify-between px-5 pt-5 font-mono text-[9px] uppercase tracking-[0.25em] text-white mix-blend-difference sm:px-8">
          <span>The Weight of Old Light</span>
          <span>Scroll inside</span>
        </div>
      </div>

      <section className="relative flex min-h-full items-center justify-center px-6 text-center sm:px-12">
        <GooeyTextReveal
          delay={0.25}
          duration={1.6}
          blurAmount={0.42}
          className="flex w-full justify-center"
        >
          <h2 className="gooey-reveal-display max-w-3xl text-[clamp(3.25rem,9vw,7rem)] leading-[0.88] tracking-[-0.045em]">
            The Weight of Old Light
          </h2>
        </GooeyTextReveal>

        <button
          type="button"
          onClick={scrollToFirstPainting}
          className="absolute bottom-7 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 border border-black/20 bg-white/50 px-3 py-2 font-mono text-[9px] uppercase tracking-wider backdrop-blur transition-colors hover:bg-white dark:border-white/20 dark:bg-black/45 dark:hover:bg-black/75"
        >
          Scroll to reveal
          <ArrowDown className="size-3.5" />
        </button>
      </section>

      <Painting index={0} />

      <section className="flex min-h-[155%] flex-col justify-center gap-24 px-6 py-24 sm:px-12">
        <GooeyTextReveal
          mode="scroll"
          scroller={scrollAreaRef}
          start="top 80%"
          duration={1.5}
          stagger={0.1}
          blurAmount={0.4}
          className="max-w-5xl"
        >
          <h3 className={headingClass}>
            Before the camera, there was only the patient hand. Pigment ground
            by candlelight, flesh rendered warm against a dark that swallows
            everything at the edges of the frame.
          </h3>
        </GooeyTextReveal>

        <GooeyTextReveal
          mode="scroll"
          scroller={scrollAreaRef}
          start="top 80%"
          duration={1.5}
          stagger={0.1}
          blurAmount={0.4}
          className="ml-auto max-w-5xl"
        >
          <h3 className={headingClass}>
            This is a room of Spanish shadow: gods caught mid-argument, men
            caught mid-breath. Each canvas holds a single suspended moment,
            stretched thin across four centuries, still refusing to look away.
          </h3>
        </GooeyTextReveal>
      </section>

      <Painting index={1} />

      <section className="flex min-h-[135%] items-center justify-center px-6 py-28 text-center sm:px-12">
        <GooeyTextReveal
          mode="scrub"
          scroller={scrollAreaRef}
          start="top 80%"
          end="bottom 48%"
          stagger={0.08}
          blurAmount={0.48}
          className="w-full"
        >
          <h3 className={listClass}>Ground Pigment</h3>
          <h3 className={listClass}>Falling Shadow</h3>
          <h3 className={listClass}>Warm Flesh</h3>
          <h3 className={listClass}>Suspended Gesture</h3>
          <h3 className={listClass}>Held Silence</h3>
        </GooeyTextReveal>
      </section>

      <Painting index={2} />

      <section className="flex min-h-[135%] items-center px-6 py-28 sm:px-12">
        <GooeyTextReveal
          mode="scrub"
          scroller={scrollAreaRef}
          start="top 82%"
          end="bottom 50%"
          stagger={0.08}
          blurAmount={0.45}
          className="max-w-5xl"
        >
          <h3 className={headingClass}>
            We collect the paintings that hold their breath. The wine that never
            spills from a tilted cup, the note that never finishes leaving the
            reed, the eye that has watched the same doorway since 1628. Every
            frame is a single second refusing to end.
          </h3>
        </GooeyTextReveal>
      </section>

      <Painting index={3} />

      <section className="flex min-h-full items-center justify-center px-6 text-center sm:px-12">
        <GooeyTextReveal
          mode="scroll"
          scroller={scrollAreaRef}
          start="top 78%"
          duration={1.8}
          blurAmount={0.46}
          className="flex w-full justify-center"
        >
          <h2 className="gooey-reveal-display text-[clamp(3.5rem,10vw,8rem)] leading-none tracking-[-0.045em]">
            Step Closer
          </h2>
        </GooeyTextReveal>
      </section>
    </div>
  )
}
