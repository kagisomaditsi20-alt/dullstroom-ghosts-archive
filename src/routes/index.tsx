import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Image as ImageIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "../components/Button";
import highlandImage from "../assets/misty-dullstroom-highland.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dullstroom Ghosts | A Literary Archive of True Historical Accounts" },
      {
        name: "description",
        content: "A calm, atmospheric literary archive of true stories about the ghosts and history of Dullstroom.",
      },
      { property: "og:title", content: "Dullstroom Ghosts | A Town of Ghosts" },
      {
        property: "og:description",
        content: "True stories about the ghosts of Dullstroom, respectfully told.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PRICE = 49;
const CURRENCY = "R";
const UNLOCK_KEY = "dg_story1_unlocked";

const forewordParagraphs = [
  'These are not "ghost stories." These are true stories about the real ghosts of Dullstroom. They have been written to be read aloud by someone to another person or to others.',
  "All the names, places, buildings, streets, dates, and history are actual, factual, and historically correct. Where possible, I have included photos to prove the history, reality, and actuality of all these things. For those still in doubt, please come visit Dullstroom and go see things for yourself.",
  'The ghosts of Dullstroom are in no way dangerous, harmful, or belligerent towards people. They simply exist in their realm whilst we, the so-called "living," exist in ours. So, if you are fortunate enough to see or experience any of them, simply observe them, respect them, and let them be. They all deserve their peace. Many of them suffered greatly whilst they were where we are now.',
  "Pray for the souls of all those who have gone before us. May the Lord make His face to shine upon them.",
];

const teaser = `To make matters even worse, the farms and farmsteads were burnt in accordance with Lord Roberts' "scorched earth" policy and the women and children...`;

const fullTeaser = [
  `To make matters even worse, the farms and farmsteads were burnt in accordance with Lord Roberts' "scorched earth" policy and the women and children of the town and of the district were rounded up like cattle and driven to concentration camps around Belfast and Middelburg. There they died of malnutrition, hunger, and disease in their thousands – 27,000 women and children in all died in the concentration camps during the 2nd Anglo Boer War. This was the unhappiest of times in the unhappiest of places for all who were kept in captivity there, but especially for the children.`,
  "Dullstroom and its district were quiet and abandoned and burnt to the ground. It was as though life and love had departed and even God himself had turned his back on it.",
];

const storyParagraphs = [
  "In 1887, Die Hervormde Kerk van Africa (the Reformed Church of Africa) decided to found an assembly in Dullstroom.",
  "At the time, Dullstroom consisted of forty-eight people, 8 houses, 3 stables, 10 cattle kraals and WC Janson's Boeren Handelsvereeniging (Farmers' Co-op). This was obviously not enough people to justify an assembly. However, in the district of Dullstroom there were some three hundred farms with families living on them. So, the justification was for the assembly to cater for the spiritual and social needs of all those living in the Dullstroom district.",
  "The Church bought the whole piece of land between Teding Van Berkhout, Gunning, Slachtersnek and Voortrekker streets. The church building (building operations started in 1891 and the church was inaugurated in 1895) was situated with its back towards and near Gunning Street in the middle of the block. This allowed enough space for the farmers to park their wagons and put up their tents around the church building on what was named Oranje Plein (Orange Square).",
  "The practice then (as it is still today in some Christian denominations) was to have a Nagmaaldiens (Communion Service) once a month, on the Sunday nearest the end of the month. This was not only a very popular church service, but also the largest social event in the district each month.",
  "The farmers and their families arrived from all over the district with their ox wagons, horse drawn cart, mule carts, on horseback and on foot. Many of them arrived on the Friday to do some business in town, visiting the co-op, and the only bank in Dullstroom at that time i.e., Die Nederlandsche Bank van Zuid Afrika (The Netherlands Bank of South Africa).",
  "During the weekend, the men drank some home brew, smoked their pipes, talked about farming matters and politics and the British menace in Natal and the Cape Colony.",
  "The women visited with each other, talked about life and love and family and swapped recipes for baking and home-made remedies.",
  "And the children! Oh, the children! They played and played and ran and ran and laughed and laughed until they dropped into sleep and very often not even in their own tent or wagon. They were so full of life, joy, and exuberance and expressed it all in two days knowing that it will be another whole month(!) before they see their friends from the other farms again. The children were fully at play. This was the happiest of times in the happiest places for them.",
  "Then, on 11 October 1899, the Second Anglo Boer War started and things changed. Most of the men (most of them being farmers) left to join the Dutch Commando. This left the women and the children tending the farms. Boys at play became men at work overnight. And girls at play became grown up and domesticated.",
  "On 27 August 1900, the British troops defeated the Boers in the last conventional battle of the War on the farm Bergendal near Belfast, some 30km from Dullstroom as the crow flies. On the same day, British troops marched into Dullstroom under command of Lt-Gen. Ian Hamilton. They occupied the town and set up camp on Groot Suikerboschkop (Great Sugarbush Hill) overlooking the town.",
  "They occupied the town and were encamped on Groot Suikerboschkop until 16 November 1900. They withdrew on that day but only after they blew up the town and burnt everything down except for two homes and the church. Everything else was destroyed including WC Janson's Boeren Handelsvereeniging. These were hard days for the people of the Dullstroom district, but darker days were yet to come!",
  "After the Battle of Bergendal, the Boers reverted to guerrilla warfare against the British. Dullstroom and the district of Dullstroom were in the middle of the area in which the Boers operated. And the people of the town and of the district supported the Boers in any way they could. After all, these fighters were their fathers and brothers, uncles, nephews, and friends.",
  "The British gave the residents of the town and of the district an ultimatum: stop your support of the Boers or we will deal with you severely. But how was this possible? How could one abandon one's own family and friends whilst they are sacrificing their lives in order to set you free from the tyranny of the largest empire the world has ever known? The people of the town and of the district decided that they must do what they must do, and the British must do what they must do.",
  "On 18 April 1901, the British troops occupied Dullstroom again and destroyed whatever was renovated and this time they set fire to the church – not only the symbol of the faith of the community, but the symbol of their social unity, their social interaction, their friendship and common civility.",
  `To make matters even worse, the farms and farmsteads were burnt in accordance with Lord Roberts' "scorched earth" policy and the women and children of the town and of the district were rounded up like cattle and driven to concentration camps around Belfast and Middelburg. There they died of malnutrition, hunger, and disease in their thousands – 27,000 women and children in all died in the concentration camps during the 2nd Anglo Boer War. This was the unhappiest of times in the unhappiest of places for all who were kept in captivity there, but especially for the children.`,
  "Dullstroom and its district were quiet and abandoned and burnt to the ground. It was as though life and love had departed and even God himself had turned his back on it.",
  "But life goes on, and the people of Dullstroom and its district are nothing if not resilient. After the War, the town was slowly restored. And from the scorched earth of the district and the ashes of the town they built another day, a new future.",
  "So was the church re-built and re-inaugurated in 1905. In line with their long-standing tradition, still today the Communion Service is held on the morning of the Sunday of the weekend nearest the end of the month.",
  "On some Communion Service week-ends, if you sit on the veranda of the Dullstroom Inn, across the road from Oranje Square and the church, somewhere between sunset and early evening, and if you keep absolutely quiet amidst the cacophony of noises caused by people drinking and socialising, you can still hear, and if you are lucky, actually see the children at play on the square around the church. They play and play and run and run and laugh and laugh until they fade away, all their energy and exuberance spent, too exhausted to continue. They love to return every so often to re-live their happiest of times in their happiest of places. They are at peace here.",
];

function Index() {
  const [storyOpen, setStoryOpen] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    setUnlocked(window.localStorage.getItem(UNLOCK_KEY) === "true");
  }, []);

  function openStory() {
    setStoryOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function closeStory() {
    setStoryOpen(false);
    window.setTimeout(() => document.querySelector("#stories")?.scrollIntoView({ behavior: "smooth" }), 0);
  }

  function unlockStory() {
    // TODO: Replace this confirmation with Paystack or Yoco checkout.
    if (window.confirm(`Simulate secure payment of ${CURRENCY}${PRICE} and unlock this story?`)) {
      window.localStorage.setItem(UNLOCK_KEY, "true");
      setUnlocked(true);
    }
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-5 lg:px-8">
          <button type="button" className="font-display text-lg font-semibold uppercase tracking-[0.09em] text-foreground sm:text-xl" onClick={() => { setStoryOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            Dullstroom Ghosts
          </button>
          <nav aria-label="Main navigation" className="flex items-center gap-4 sm:gap-7">
            <a href="#home" onClick={() => setStoryOpen(false)} className="nav-link">Home</a>
            <a href="#stories" onClick={() => setStoryOpen(false)} className="nav-link">Stories</a>
            <a href="#foreword" onClick={() => setStoryOpen(false)} className="nav-link">Foreword</a>
          </nav>
        </div>
      </header>

      {!storyOpen ? (
        <div id="home">
          <section className="hero-section relative isolate flex min-h-[62vh] items-center justify-center overflow-hidden px-5 py-24 text-center">
            <img src={highlandImage} alt="Mist settling over the Dullstroom highlands" width={1600} height={1000} className="absolute inset-0 -z-20 h-full w-full object-cover" />
            <div className="hero-overlay absolute inset-0 -z-10" />
            <div className="mx-auto max-w-4xl">
              <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-hero-muted">A literary archive of the Mpumalanga highlands</p>
              <h1 className="font-display text-5xl font-medium leading-none text-hero sm:text-7xl lg:text-8xl">A Town of Ghosts</h1>
              <p className="mt-6 font-display text-2xl italic leading-snug text-hero sm:text-3xl">True stories about the ghosts of Dullstroom</p>
              <div className="mx-auto my-7 h-px w-20 bg-hero-muted/70" />
              <p className="text-sm leading-6 text-hero-muted sm:text-base">An atmospheric literary archive of true historical accounts.</p>
            </div>
          </section>

          <section id="foreword" className="foreword-section relative isolate scroll-mt-16 px-5 py-20 sm:py-28">
            <img src={highlandImage} alt="" loading="lazy" width={1600} height={1000} aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-45" />
            <div className="foreword-wash absolute inset-0 -z-10" />
            <article className="paper-panel mx-auto max-w-[840px] p-7 sm:p-12">
              <div className="border border-border px-5 py-8 sm:px-10 sm:py-11">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Permanent Foreword</p>
                <h2 className="mt-3 font-display text-[2.625rem] font-medium leading-none text-foreground">Foreword</h2>
                <div className="mt-8 font-display text-[1.1875rem] leading-[1.75] text-reading">
                  {forewordParagraphs.map((paragraph) => <p key={paragraph} className="mb-4 last:mb-0">{paragraph}</p>)}
                </div>
              </div>
            </article>
          </section>

          <section id="stories" className="scroll-mt-16 px-5 py-20 sm:py-28">
            <div className="mx-auto max-w-[840px]">
              <div className="mb-10 border-b border-border pb-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">The archive</p>
                <h2 className="mt-2 font-display text-5xl font-medium leading-none text-foreground">Stories</h2>
              </div>
              <article className="story-card border border-border bg-card p-6 sm:p-10">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Story 1</p>
                <h3 className="mt-3 font-display text-3xl font-medium text-foreground">Children At Play</h3>
                <blockquote className="mt-6 border-l-[3px] border-accent bg-teaser px-4 py-3.5 font-display text-lg italic leading-relaxed text-reading">“{teaser}”</blockquote>
                <Button className="mt-7 w-full sm:w-auto" onClick={openStory}>
                  Unlock full story for {CURRENCY}{PRICE}<ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </article>
            </div>
          </section>

          <SiteFooter />
        </div>
      ) : (
        <article id="story-page" className="mx-auto max-w-[840px] px-5 py-12 sm:py-20">
          <button type="button" onClick={closeStory} className="inline-flex min-h-11 items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to Stories
          </button>
          <p className="mt-10 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Story 1</p>
          <h1 className="mt-3 font-display text-[3.25rem] font-medium leading-none text-foreground sm:text-6xl">Children At Play</h1>
          <div className="teaser-full mt-10 border border-teaser-border bg-teaser-full p-[22px] font-display text-xl leading-[1.7] text-reading">
            {fullTeaser.map((paragraph) => <p key={paragraph} className="mb-4 last:mb-0">“{paragraph}{paragraph === fullTeaser[fullTeaser.length - 1] ? "”" : ""}</p>)}
          </div>

          {!unlocked ? (
            <div id="paywallBox" className="mt-8 border border-foreground bg-card p-6 text-center sm:p-8">
              <p className="font-display text-xl leading-relaxed text-reading">This is a true historical account. Unlock complete story with original photographs.</p>
              <Button id="unlockBtn" className="mt-6 w-full sm:w-auto" onClick={unlockStory}>Unlock full story for {CURRENCY}{PRICE}</Button>
              <p className="mt-4 text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Secure payment</p>
            </div>
          ) : (
            <div id="lockedContent" className="mt-12">
              <div className="story-body font-display text-xl leading-[1.85] text-reading">
                {storyParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className="mt-14 grid gap-8 sm:grid-cols-2">
                <ArchiveFigure caption="Die Hervormde Kerk van Afrika, Dullstroom. Inauguration 1895." label="1895 church photograph" />
                <ArchiveFigure caption="The church sometime after 18 April 1901." label="Church after April 1901 photograph" />
              </div>
            </div>
          )}
        </article>
      )}

      {storyOpen && <SiteFooter />}
    </main>
  );
}

function ArchiveFigure({ caption, label }: { caption: string; label: string }) {
  return (
    <figure className="border border-border bg-card p-3">
      <div role="img" aria-label={label} className="grid aspect-[4/3] place-items-center border border-border bg-placeholder text-muted-foreground">
        <div className="text-center">
          <ImageIcon className="mx-auto h-7 w-7" strokeWidth={1.25} aria-hidden="true" />
          <span className="mt-3 block text-[0.625rem] font-semibold uppercase tracking-[0.16em]">Archival photograph</span>
        </div>
      </div>
      <figcaption className="px-2 pb-1 pt-3 text-center font-display text-sm italic leading-snug text-caption">{caption}</figcaption>
    </figure>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-footer px-5 py-8 text-center">
      <p className="text-xs text-muted-foreground">© 2026 Dullstroom Ghosts <span aria-hidden="true">•</span> True stories, respectfully told.</p>
    </footer>
  );
}