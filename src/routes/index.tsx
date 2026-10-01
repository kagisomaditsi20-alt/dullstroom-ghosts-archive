import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Image as ImageIcon, Mail, X } from "lucide-react";
import { type FormEvent, useEffect, useState } from "react";

import { Button } from "../components/Button";
import heroBanner from "../assets/dullstroom-ghosts-hero-revised.jpg";
import marketPoster from "../assets/dullstroom-village-market.jpg.asset.json";
import friendsPortrait from "../assets/friends-united-portrait.png.asset.json";
import heritageSociety from "../assets/dullstroom-heritage-society.jpg.asset.json";
import church1895 from "../assets/hervormde-kerk-1895.jpg.asset.json";
import bubblyMeander from "../assets/dullstroom-bubbly-meander-2026.jpg.asset.json";

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

const PRICE = 29;
const CURRENCY = "R";
const EDITING_HOSTING_FEE = 29;

const forewordParagraphs = [
  'These are not "ghost stories." These are true stories about the real ghosts of Dullstroom.',
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

const friendsTeaser = "However, what was to be yet another day when family and friends delighted in each other's company, turned into a disaster for this small group of friends and a catastrophe for the community as a whole.";

const friendsParagraphs = [
  'The name “Dullstroom” is a combination of the surname of Wolterus Dull and the word “stroom” (stream).',
  "Wolterus Dull visited what is today the town of Dullstroom in 1880 as representative of De Nederlandsche Bank van Zuid Afrika. From there through various actions and events, the town was formed.",
  "The stream refers to the upper reaches of the Krokodilrivier (Crocodile River) which has its origins in the hills above and to the north of the town. By the time it runs past the town to the east thereof, it is no more than a stream. However, as it goes on it becomes a river which later forms the southern border of the Kruger Wildtuin (Kruger National Park), runs through Mozambique, and empties out in the Indian Ocean.",
  "From the upper reaches of the river, town councils, farmers, and others have built dams. So did the early settlers and occupants of Dullstroom. They built a dam to the east of the town less than a kilometre from Oranje Plein where the church stands.",
  "It was the habit of the residents of the town to picnic on the banks of the dam and to bathe (rather than swim) in it. As was the custom in those days, when bathing, the men and the women used to do so separately. And the women did not wear the slick tight-fitting costumes of today but rather a whole outfit of undergarments including a full-length petticoat.",
  "These garments made it quite impossible to swim (as we understand the term today) and when wet were heavy and would have a natural tendency to sink.",
  "And so it happened that on 30 January 1892 the women and the girls of the town set off with their picnic baskets to the dam to go and bathe and enjoy each other's company and friendship. The people of the town formed a small and tightly knit community where most were family, but all were friends and each one was reliant on all the others for their well-being in all matters related to the human condition. In 1894 the town had a population of one hundred.",
  "However, what was to be yet another day when family and friends delighted in each other's company, turned into a disaster for this small group of friends and a catastrophe for the community as a whole.",
  "Whilst wading a bit further than usual into the water, Machteltje, the teenage daughter of J H Janson (Jnr) and Carolina Stork, the young wife of W C Janson unexpectedly stepped into a hole deeper than the rest of the bottom of the dam around them. With their heads suddenly disappearing under water, with the fright they got and with their wet and heavy bathing attire dragging them down, panic set in. They struggled to the surface once or twice screaming. The wife of Allan Van De Poll (Aaltje Ottens) was the first to react and went to the rescue of her friends but soon got into trouble herself. Being the nearest to the others and having not stepped into the deeper hole herself, the others were able to rescue her. However, the young aunt and her young niece were beyond anyone's ability to rescue them. They were both dragged under and drowned there.",
  "Some of the children ran into town to inform the people. All who heard the news rushed to the dam. Some men on horse arrived first to be confronted by a hysterical group of women and girls devastated by the tragedy they had just witnessed. The more accomplished swimmers amongst the men shed their boots, trousers and shirts and swam to the spot indicated by the women. They found the hole but not the bodies. More men joined the search, and they worked their way downstream in the direction of the dam wall. They found the two young women there. They had drifted into the garden formed by water lilies and water grasses and the reeds growing in the water in the clay bank perpendicular to the stone wall on the far side of the dam.",
  "Although this was an unspeakable tragedy for the families and the whole community, the faces of the two drowned ladies had a serene look as though the Lord himself came to comfort them in their time of dread and to claim their souls for himself.",
  "It was a long time before the townsfolk went back to the dam for a picnic or to bathe therein. But, one day the women and the girls who witnessed but survived this most tragic of events decided to go to the dam, to picnic and to bathe and to spread flower petals on the water near to where their friends so tragically perished.",
  "As they were standing in a semi-circle up to their waists in the water, careful not to go anywhere near the hole responsible for the tragedy, and as they were spreading the petals and remembering their dear and much-loved lost friends, those same two friends appeared on the opposite bank of the dam. They were dressed in the same garments they wore on the day of their demise, but it was as bright as snow with sunlight reflecting off of it.",
  "The women and the children smiled and waved at them and their two friends smiled and waved back at them. Nobody said anything or made any sound, and nobody referred to this happening or told anyone else about it. It was an occurrence sufficient unto itself and those who witnessed it.",
  "From then on, every time the women and the girls of the town went to the dam to bathe, their friends would appear on the opposite bank to smile and wave at them and they returned the gestures. And still everything was done in silence, and it remained amongst them.",
  "Over time the original survivors of that most tragic of days, grew old and died one by one. And each time those remaining, upon going to the dam to bathe, would see that the spirit of the most recently departed had joined the spirits of the original two on the opposite bank of the dam. As the survivors diminished in number, the group on the opposite bank grew. Still, they smiled and greeted each other with a wave in complete silence.",
  "And so, it happened until only one of the original group survived. She was well into her eighties, very frail and confined to her bed or otherwise her wheelchair. One year, on the 30th of January of that year, she asked her family to dress her in her prettiest summer frock and take her to the dam. They thought she wanted to go there for a picnic and prepared everything accordingly. However, she longed for her friends and although she knew that she would be joining them soon, she wanted to see them, smile at them and wave to them one more time in this life.",
  "Upon arriving there, however, she did not see her friends on the opposite bank of the dam. She was very distraught about this and perplexed about why they did not show up. Then, in a moment of clarity and understanding, she realised that she was not in the water. She asked her grandson to push her with the wheelchair into the water only as far as to cover her feet.",
  "As he did so, she was looking down at the water helping to navigate her entry making sure that they did not hit any hidden stones. When her feet were covered by the water up to her ankles, she looked up and saw all her friends on the opposite bank of the dam. They were smiling and waving at her. Then she smiled and waved at them still keeping the silence between them.",
  "Those with her did not see her friends on the opposite side and did not understand the smile and the wave but they all swore that as she did so, for a moment her youth returned, and she appeared as a beautiful young woman in the prime of her life.",
  "Then, just as suddenly, her age returned, her arm dropped into her lap, she bowed her head and breathed out her last breath.",
  "Immediately, a small ripple appeared on the water emanating from her wheelchair. It was like the wake of a small, toy boat departing from her wheelchair racing to the opposite bank of the dam. There was no wind to account for this.",
  "All of a sudden, all who were there, although they saw nothing heard the joyous laughter of delight of a group of young women and girls coming from the other side of the dam. It was the kind of laughter and the sound that one hears when family and friends long separated meet up again and delight in one another's company.",
  "It was the first and last time that anyone who was not present and did not witness the tragic events of 30 January 1892, were given a brief and limited view into the love and friendship which bound a group of friends for time and eternity.",
  "The spirits of these women and girls never returned to the dam. There was no one else they were waiting for.",
];

type StoryId = "children" | "friends";

const stories = {
  children: { number: 1, title: "Children At Play", wordCount: "1,136", teaser, image: church1895.url, paragraphs: storyParagraphs },
  friends: { number: 2, title: "Friends United", wordCount: "1,550", teaser: friendsTeaser, image: friendsPortrait.url, paragraphs: friendsParagraphs },
} as const;

function Index() {
  const [activeStory, setActiveStory] = useState<StoryId | null>(null);
  const [unlockedStories, setUnlockedStories] = useState<StoryId[]>([]);
  const [submission, setSubmission] = useState({ name: "", email: "", title: "", story: "" });
  const [permissions, setPermissions] = useState([false, false, false]);
  const [submitted, setSubmitted] = useState(false);
  const [unlockingStory, setUnlockingStory] = useState<StoryId | null>(null);
  const [proofEmail, setProofEmail] = useState("");
  const [proofFile, setProofFile] = useState<File | null>(null);
  const [proofReceived, setProofReceived] = useState(false);
  const wordCount = submission.story.trim() ? submission.story.trim().split(/\s+/).length : 0;
  const submissionReady = Object.values(submission).every((value) => value.trim().length > 0)
    && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email)
    && wordCount <= 750
    && permissions.every(Boolean);

  useEffect(() => {
    setUnlockedStories((Object.keys(stories) as StoryId[]).filter((id) => window.localStorage.getItem(`dg_${id}_unlocked`) === "true"));
  }, []);

  function openStory(id: StoryId) {
    setActiveStory(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function closeStory() {
    setActiveStory(null);
    window.setTimeout(() => document.querySelector("#stories")?.scrollIntoView({ behavior: "smooth" }), 0);
  }

  function openUnlock(id: StoryId) {
    setUnlockingStory(id);
    setProofEmail("");
    setProofFile(null);
    setProofReceived(false);
  }

  function submitProof(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!unlockingStory || !proofEmail || !proofFile) return;
    window.localStorage.setItem(`dg_${unlockingStory}_unlocked`, "true");
    setUnlockedStories((current) => current.includes(unlockingStory) ? current : [...current, unlockingStory]);
    setProofReceived(true);
  }

  function submitStory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!submissionReady) return;
    const subject = encodeURIComponent(`Ghost story for editing: ${submission.title}`);
    const body = encodeURIComponent(`Name: ${submission.name}\nEmail: ${submission.email}\n\n${submission.story}`);
    window.location.href = `mailto:kagisomaditsi20@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  const currentStory = activeStory ? stories[activeStory] : null;
  const currentUnlocked = activeStory ? unlockedStories.includes(activeStory) : false;

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-5 lg:px-8">
          <button type="button" className="font-display text-lg font-semibold uppercase tracking-[0.09em] text-foreground sm:text-xl" onClick={() => { setActiveStory(null); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            Dullstroom Ghosts
          </button>
          <nav aria-label="Main navigation" className="flex items-center justify-center gap-3 sm:gap-7">
            <a href="#home" onClick={() => setActiveStory(null)} className="nav-link">Home</a>
            <a href="#introduction" onClick={() => setActiveStory(null)} className="nav-link">Introduction</a>
            <a href="#stories" onClick={() => setActiveStory(null)} className="nav-link">Stories</a>
            <a href="#events" onClick={() => setActiveStory(null)} className="nav-link">Upcoming Events</a>
            <a href="#your-story" onClick={() => setActiveStory(null)} className="nav-link">Your Ghost Story</a>
            <a href="#payment" onClick={() => setActiveStory(null)} className="nav-link">Payment</a>
          </nav>
        </div>
      </header>

      {!activeStory ? (
        <div id="home">
          <section className="hero-section relative isolate flex items-center justify-center overflow-hidden px-5 py-20 text-center">
             <img src={heroBanner} alt="Dullstroom Ghosts above a misty old Dullstroom street at dusk" width={1920} height={821} className="hero-image absolute inset-0 -z-20 h-full w-full object-cover object-top" />
             <div className="hero-overlay absolute inset-0 -z-10" />
              <div className="hero-copy mx-auto flex w-full max-w-5xl flex-col items-center">
                <h1 className="sr-only">Dullstroom Ghosts</h1>
                <p className="hero-tagline font-display text-[1.7rem] italic leading-snug text-hero sm:text-[2rem]">Every town has secrets. Dullstroom has ghosts.</p>
              </div>
          </section>

            <section id="introduction" className="scroll-mt-16 bg-background px-5 py-20 sm:py-28">
            <article className="paper-panel mx-auto max-w-[840px] p-7 sm:p-12">
              <div className="border border-border px-5 py-8 sm:px-10 sm:py-11">
                  <h2 className="font-display text-[2.625rem] font-medium leading-none text-foreground">Introduction</h2>
                <div className="mt-8 font-display text-[1.1875rem] leading-[1.75] text-reading">
                  {forewordParagraphs.map((paragraph) => <p key={paragraph} className="mb-4 last:mb-0">{paragraph}</p>)}
                </div>
              </div>
            </article>
          </section>

            <section aria-labelledby="sponsored-title" className="border-y border-border bg-card px-5 py-12">
              <div className="mx-auto max-w-5xl">
                <h2 id="sponsored-title" className="mb-5 text-center text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Sponsored advertisement</h2>
                <div className="grid gap-7 sm:grid-cols-2">
                  <a href="https://dullstroomheritagemuseum.co.za/" target="_blank" rel="noreferrer sponsored" className="group flex min-h-72 items-center justify-center border border-border bg-hero p-5" aria-label="Visit the Dullstroom Heritage Society website">
                    <img src={heritageSociety.url} alt="Dullstroom Heritage Society" className="max-h-64 w-full object-contain transition-transform group-hover:scale-[1.02]" />
                  </a>
                  <article className="flex min-h-72 items-center justify-center border border-border bg-hero p-5">
                    <img src={marketPoster.url} alt="Dullstroom Village Market Hello Spring, 3 and 4 October 2026" className="max-h-64 w-full object-contain" />
                  </article>
                </div>
             </div>
           </section>

          <section id="stories" className="scroll-mt-16 px-5 py-20 sm:py-28">
            <div className="mx-auto max-w-[840px]">
              <div className="mb-10 border-b border-border pb-5">
                <h2 className="mt-2 font-display text-5xl font-medium leading-none text-foreground">Stories</h2>
              </div>
               <div className="grid gap-7 md:grid-cols-2">
                 {(Object.entries(stories) as [StoryId, typeof stories[StoryId]][]).map(([id, story]) => (
                   <article key={id} className="story-card flex flex-col overflow-hidden border border-border bg-card">
                      <img src={story.image} alt={story.title === "Friends United" ? "Historic portrait of a young Dullstroom woman" : "Die Hervormde Kerk van Afrika at its 1895 inauguration"} className="aspect-[16/10] w-full object-cover object-top" />
                     <div className="flex flex-1 flex-col p-6 sm:p-8">
                       <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Story {story.number}</p>
                       <h3 className="mt-3 font-display text-3xl font-medium text-foreground">{story.title} ({story.wordCount} words)</h3>
                       <blockquote className="mt-5 border-l-[3px] border-accent bg-teaser px-4 py-3.5 font-display text-lg italic leading-relaxed text-reading">“{story.teaser}”</blockquote>
                       <Button className="mt-7 w-full sm:w-auto" onClick={() => openStory(id)}>
                         Read story<ArrowRight className="h-4 w-4" aria-hidden="true" />
                       </Button>
                     </div>
                   </article>
                 ))}
               </div>
            </div>
          </section>

            <section id="events" aria-labelledby="event-title" className="scroll-mt-16 border-y border-border bg-footer px-5 py-16 sm:py-20">
              <div className="mx-auto max-w-5xl">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">What’s on in Dullstroom</p>
                <h2 id="event-title" className="mt-2 font-display text-5xl font-medium text-foreground">Upcoming Events</h2>
                 <div className="mt-9 grid gap-8">
                   <article className="grid gap-8 border border-border bg-card p-5 sm:grid-cols-[minmax(0,440px)_1fr] sm:p-8">
                     <img src={marketPoster.url} alt="Dullstroom Village Market Hello Spring, 3 and 4 October 2026" className="w-full border border-border object-cover" />
                     <div className="self-center">
                       <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Featured event</p>
                       <h3 className="mt-3 font-display text-4xl font-semibold text-foreground">Dullstroom Village Market</h3>
                       <p className="mt-4 font-display text-xl italic text-reading">Hello Spring · 3 &amp; 4 October 2026 · Verlorenkloof</p>
                     </div>
                   </article>
                   <article className="grid gap-8 border border-border bg-card p-5 sm:grid-cols-[minmax(0,440px)_1fr] sm:p-8">
                     <img src={bubblyMeander.url} alt="Dullstroom Bubbly and Friends Meander flyer" className="w-full border border-border object-cover" />
                     <div className="self-center">
                       <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Featured event</p>
                       <h3 className="mt-3 font-display text-4xl font-semibold text-foreground">Dullstroom Bubbly and Friends Meander</h3>
                       <p className="mt-4 font-display text-xl italic text-reading">7 November 2026 · 10:00–17:00 · R180 per person</p>
                       <p className="mt-3 text-sm text-muted-foreground">Starting point: The Duck &amp; Trout</p>
                     </div>
                   </article>
                 </div>
              </div>
           </section>

            <section id="your-story" className="scroll-mt-16 border-t border-border bg-card px-5 py-20 sm:py-28">
             <div className="mx-auto max-w-6xl">
               <p className="text-[0.6875rem] font-semibold uppercase text-muted-foreground">Community archive</p>
                <h2 className="mt-2 font-display text-5xl font-medium leading-none text-foreground">Your Ghost Story</h2>
                 <p className="mt-5 max-w-2xl font-display text-xl leading-relaxed text-reading">Send your story to our editor for review. Stories are edited first and are never published automatically.</p>
               {submitted ? (
                 <div role="status" className="mt-10 border border-primary bg-background p-8 text-center font-display text-2xl text-reading">Thank you, your story has been received for review.</div>
               ) : (
                 <form className="mt-10 grid gap-6" onSubmit={submitStory}>
                   <div className="grid gap-6 sm:grid-cols-2">
                     <FormField label="Name" name="name" type="text" value={submission.name} onChange={(value) => setSubmission({ ...submission, name: value })} />
                     <FormField label="Email" name="email" type="email" value={submission.email} onChange={(value) => setSubmission({ ...submission, email: value })} />
                   </div>
                   <FormField label="Title" name="title" type="text" value={submission.title} onChange={(value) => setSubmission({ ...submission, title: value })} />
                   <label className="grid gap-2 text-sm font-semibold text-foreground" htmlFor="story">Story
                     <textarea id="story" name="story" required rows={12} maxLength={12000} value={submission.story} onChange={(event) => setSubmission({ ...submission, story: event.target.value })} className="form-control min-h-64 resize-y font-display text-lg font-normal leading-relaxed" />
                     <span className={`text-right text-xs font-normal ${wordCount > 750 ? "text-error" : "text-muted-foreground"}`}>{wordCount} / 750 words</span>
                   </label>
                   <fieldset className="grid gap-4 border-t border-border pt-6">
                     <legend className="mb-4 font-display text-2xl font-semibold text-foreground">Permissions</legend>
                     {[
                       "I give Dullstroom Ghosts permission to publish the story and to do so without expectation of compensation in any form or in any amount.",
                       "I give Dullstroom Ghosts permission to commercialise the story without expectation of compensation in any form or in any amount.",
                       "I give Dullstroom Ghosts permission to edit the story in any way it sees fit.",
                     ].map((permission, index) => (
                       <label key={permission} className="flex items-start gap-3 text-sm leading-6 text-reading">
                         <input type="checkbox" required checked={permissions[index]} onChange={(event) => setPermissions(permissions.map((checked, permissionIndex) => permissionIndex === index ? event.target.checked : checked))} className="mt-1 h-4 w-4 accent-primary" />
                         <span>{permission}</span>
                       </label>
                     ))}
                   </fieldset>
                    <Button type="submit" disabled={!submissionReady} className="w-full sm:w-auto sm:justify-self-start"><Mail className="h-4 w-4" aria-hidden="true" />Email story for editing</Button>
                 </form>
               )}
                <div id="payment" className="scroll-mt-24 mt-12 border border-border bg-background p-7 sm:p-9">
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Payment</p>
                  <h3 className="mt-3 font-display text-3xl font-semibold text-foreground">Editing &amp; hosting fee</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">Pay after your story has been reviewed and accepted.</p>
                  <div className="mt-6 border border-border bg-card p-5">
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">EFT details</p>
                    <dl className="mt-4 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-[130px_1fr]">
                      <dt className="text-muted-foreground">Bank</dt><dd>Standard Bank</dd>
                      <dt className="text-muted-foreground">Account name</dt><dd>Munro Deysel</dd>
                      <dt className="text-muted-foreground">Account type</dt><dd>Savings</dd>
                      <dt className="text-muted-foreground">Account number</dt><dd>358828600</dd>
                      <dt className="text-muted-foreground">Branch code</dt><dd>051001</dd>
                      <dt className="text-muted-foreground">Amount</dt><dd>{CURRENCY}{EDITING_HOSTING_FEE}</dd>
                      <dt className="text-muted-foreground">Reference</dt><dd>Email + Story</dd>
                    </dl>
                  </div>
                </div>
             </div>
           </section>

          <SiteFooter />
        </div>
      ) : (
        currentStory && <article id="story-page" className="mx-auto max-w-[840px] px-5 py-12 sm:py-20">
          <button type="button" onClick={closeStory} className="inline-flex min-h-11 items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to Stories
          </button>
          <p className="mt-10 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Story {currentStory.number}</p>
          <h1 className="mt-3 font-display text-[3.25rem] font-medium leading-none text-foreground">{currentStory.title} ({currentStory.wordCount} words)</h1>
          <div className="teaser-full mt-10 border border-teaser-border bg-teaser-full p-[22px] font-display text-xl leading-[1.7] text-reading">
            <p>“{activeStory === "children" ? fullTeaser.join(" ") : friendsTeaser}”</p>
          </div>

          {!currentUnlocked ? (
            <div id="paywallBox" className="mt-8 border border-foreground bg-card p-6 text-center sm:p-8">
              <p className="font-display text-xl leading-relaxed text-reading">This is a true historical account. Unlock complete story with original photographs.</p>
               <Button id="unlockBtn" className="mt-6 w-full sm:w-auto" onClick={() => activeStory && openUnlock(activeStory)}>Unlock Story - {CURRENCY}{PRICE}</Button>
              <p className="mt-4 text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Secure payment</p>
            </div>
          ) : (
            <div id="lockedContent" className="mt-12">
              <div className="story-body font-display text-xl leading-[1.85] text-reading">
                {currentStory.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {activeStory === "children" ? <div className="mt-14 grid gap-8 sm:grid-cols-2">
                <ArchiveFigure caption="Die Hervormde Kerk van Afrika, Dullstroom. Inauguration 1895." label="1895 church photograph" />
                <ArchiveFigure caption="The church sometime after 18 April 1901." label="Church after April 1901 photograph" />
              </div> : <figure className="mt-14 border border-border bg-card p-3"><img src={friendsPortrait.url} alt="Historic portrait accompanying Friends United" className="w-full sepia-[0.15]" /><figcaption className="px-2 pb-1 pt-3 text-center font-display text-sm italic text-caption">Historical photograph supplied with “Friends United”.</figcaption></figure>}
            </div>
          )}
        </article>
      )}

      {activeStory && <SiteFooter />}

      {unlockingStory && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-background/90 p-4" role="dialog" aria-modal="true" aria-labelledby="unlock-title">
          <div className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto border border-border bg-card p-6 shadow-2xl sm:p-8">
            <Button type="button" variant="outline" aria-label="Close payment" className="absolute right-4 top-4 min-h-10 px-3 py-2" onClick={() => setUnlockingStory(null)}><X className="h-4 w-4" aria-hidden="true" /></Button>
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Bank payment</p>
            <h2 id="unlock-title" className="mt-2 pr-12 font-display text-4xl font-semibold text-foreground">Unlock Story - {CURRENCY}{PRICE}</h2>
            {!proofReceived ? (
              <form className="mt-7 grid gap-5" onSubmit={submitProof}>
                <dl className="grid gap-x-6 gap-y-2 border-y border-border py-5 text-sm sm:grid-cols-[130px_1fr]">
                  <dt className="text-muted-foreground">Bank</dt><dd>Standard Bank</dd>
                  <dt className="text-muted-foreground">Account name</dt><dd>Munro Deysel</dd>
                  <dt className="text-muted-foreground">Account type</dt><dd>Savings</dd>
                  <dt className="text-muted-foreground">Account number</dt><dd>358828600</dd>
                  <dt className="text-muted-foreground">Branch code</dt><dd>051001</dd>
                  <dt className="text-muted-foreground">Amount</dt><dd>{CURRENCY}{PRICE}</dd>
                  <dt className="text-muted-foreground">Reference</dt><dd>Email + Story</dd>
                </dl>
                <label className="grid gap-2 text-sm font-semibold" htmlFor="proof-email">Email
                  <input id="proof-email" type="email" required value={proofEmail} onChange={(event) => setProofEmail(event.target.value)} className="form-control" />
                </label>
                <label className="grid gap-2 text-sm font-semibold" htmlFor="proof-file">Upload proof of payment
                  <input id="proof-file" type="file" required accept="image/*,.pdf" onChange={(event) => setProofFile(event.target.files?.[0] ?? null)} className="form-control file:mr-3 file:border-0 file:bg-primary file:px-3 file:py-2 file:text-primary-foreground" />
                </label>
                <Button type="submit" disabled={!proofEmail || !proofFile} className="w-full">Submit proof</Button>
              </form>
            ) : (
              <div className="mt-7 border border-primary p-6 text-center">
                <p className="font-display text-2xl text-reading">Proof received!</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">Your story is unlocked on this device. Your email unlock link will follow after verification.</p>
                <Button type="button" className="mt-6" onClick={() => setUnlockingStory(null)}>Read story</Button>
              </div>
            )}
          </div>
        </div>
      )}
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

function FormField({ label, name, type, value, onChange }: { label: string; name: string; type: "text" | "email"; value: string; onChange: (value: string) => void }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-foreground" htmlFor={name}>{label}
      <input id={name} name={name} type={type} required maxLength={type === "email" ? 254 : 120} value={value} onChange={(event) => onChange(event.target.value)} className="form-control" />
    </label>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-footer px-5 py-10">
      <div className="mx-auto grid max-w-6xl items-start gap-8 sm:grid-cols-[1fr_300px]">
        <p className="pt-2 text-xs text-muted-foreground">© 2026 Dullstroom Ghosts <span aria-hidden="true">•</span> True stories, respectfully told.</p>
        <div id="ad-sidebar" className="ad-slot ad-sidebar sticky top-24" role="complementary" aria-label="Advertisement"><span>Advertisement · 300 × 250</span></div>
      </div>
    </footer>
  );
}
