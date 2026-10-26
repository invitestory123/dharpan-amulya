import { invite } from "@/config/invite";
import { Divider } from "./Divider";
import { Reveal } from "./Reveal";

export function Note() {
  return (
    <section className="px-7 py-20 text-center sm:py-28">
      <Reveal>
        <Divider className="mb-10" />
      </Reveal>
      <Reveal delay={0.1}>
        <p className="caps text-[0.62rem] text-olive tracking-[0.28em]">
          With the blessings of our families
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="mx-auto mt-8 max-w-lg space-y-4 px-2 text-center text-ink/90 sm:text-lg">
          <p className="font-serif italic text-sepia text-base sm:text-lg">
            With the blessings of our families,
          </p>
          <p className="font-serif text-lg leading-[1.85] text-ink/90 sm:text-xl">
            <span className="font-medium text-ink">Podduturi Nagendra Karan Reddy</span> and{" "}
            <span className="font-medium text-ink">Podduturi Rajitha</span> invite you to the
            engagement ceremony of their son{" "}
            <span className="font-medium text-ink">Dharpan Reddy</span> and{" "}
            <span className="font-medium text-ink">Amulya Reddy</span>.
          </p>
          <p className="font-serif italic text-sepia/90 text-base sm:text-lg">
            Please join us for a morning celebration and lunch.
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.3}>
        <p className="script mt-10 text-3xl text-sepia sm:text-4xl">{invite.dayLine}</p>
        <p className="caps mt-4 text-[0.6rem] text-sepia">{invite.timeLine}</p>
      </Reveal>
    </section>
  );
}
