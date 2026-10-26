import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import paper from "@/assets/paper.jpg";
import { ActionBar } from "@/components/invite/ActionBar";
import { AddToCalendar } from "@/components/invite/AddToCalendar";
import { BackgroundMusic } from "@/components/invite/BackgroundMusic";
import { Countdown } from "@/components/invite/Countdown";
import { Envelope } from "@/components/invite/Envelope";
import { Hero } from "@/components/invite/Hero";
import { InviteFooter } from "@/components/invite/InviteFooter";
import { Note } from "@/components/invite/Note";
import { ScrollThread } from "@/components/invite/ScrollThread";
import { Venue } from "@/components/invite/Venue";
import { invite } from "@/config/invite";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const title = `${invite.groom} & ${invite.bride} — ${invite.dayLine.split(",")[1]?.trim() ?? invite.dateLabel}`;
const description = `With the blessings of our families, Podduturi Nagendra Karan Reddy and Podduturi Rajitha invite you to the engagement ceremony of their son Dharpan Reddy and Amulya Reddy on Sunday, 1st November 2026 at Laxmi Kalyana Mandapam, Nizamabad.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${title} · Save the Date` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} · Engagement Ceremony Invitation` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dharpan-amulya.invitestory.in/" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${title} · Engagement Ceremony Invitation` },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Invitation,
});

function Invitation() {
  useSmoothScroll();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <BackgroundMusic autoPlayTrigger={opened} />
      <Envelope onOpen={() => setOpened(true)} />
      <ScrollThread />
      <main
        className="grain relative min-h-screen bg-paper text-ink"
        style={{ backgroundImage: `url(${paper})`, backgroundSize: "480px" }}
      >
        <Hero ready={opened} />
        <Note />
        <Countdown />
        <Venue />
        <AddToCalendar />
        <InviteFooter />
      </main>
      <ActionBar />
    </>
  );
}
