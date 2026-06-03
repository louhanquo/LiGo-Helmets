import { motion } from "framer-motion";
import customer1 from "../assets/customer1.svg";
import customer2 from "../assets/customer2.svg";
import customer3 from "../assets/customer3.svg";

type Lang = "en" | "id" | "de";

type Story = { name: string; quote: string; image: string };

const content: Record<Lang, { heading: string; stories: Story[] }> = {
  en: {
    heading: "Stories From Our Customers",
    stories: [
      {
        name: "Jelu A. - Jakarta",
        quote:
          "\u201CI ride Grab to work every day and I used to dread the helmet situation, either carry a bulky one into the office or use one I'd rather not think about. LiGo changed that completely. I fold it into my bag and forget about it until my next ride.\u201D",
        image: customer1.src,
      },
      {
        name: "Sheilla D. - Bandung",
        quote:
          "\u201CI always felt awkward carrying my helmet into a caf\u00E9 or a meeting. With LiGo I just fold it and put it in my tote, nobody even knows I rode a bike to get there.\u201D",
        image: customer2.src,
      },
      {
        name: "Agnes M. - Yogyakarta",
        quote:
          "\u201CI used to leave my helmet at home because it was too bulky to bring into campus. With LiGo, I just fold it and toss it in my backpack between classes. I don't even think about it anymore.\u201D",
        image: customer3.src,
      },
    ],
  },
  id: {
    heading: "Cerita Dari Pelanggan Kami",
    stories: [
      {
        name: "Jelu A. - Jakarta",
        quote:
          "\u201CSaya naik Grab ke kantor setiap hari dan dulu selalu pusing soal helm \u2014 entah bawa yang besar ke kantor atau pakai yang tidak ingin saya pikirkan. LiGo mengubah itu sepenuhnya. Saya lipat dan masukkan ke dalam tas, lupa keberadaannya sampai perjalanan berikutnya.\u201D",
        image: customer1.url,
      },
      {
        name: "Sheilla D. - Bandung",
        quote:
          "\u201CDulu saya canggung membawa helm ke kaf\u00E9 atau rapat. Dengan LiGo cukup saya lipat dan masukkan ke tote bag, tidak ada yang tahu saya naik motor untuk sampai sana.\u201D",
        image: customer2.url,
      },
      {
        name: "Agnes M. - Yogyakarta",
        quote:
          "\u201CDulu saya tinggal helm di rumah karena terlalu besar dibawa ke kampus. Dengan LiGo, saya tinggal lipat dan masukkan ke ransel di antara kelas. Sekarang tidak pernah jadi masalah lagi.\u201D",
        image: customer3.url,
      },
    ],
  },
  de: {
    heading: "Geschichten Unserer Kunden",
    stories: [
      {
        name: "Jelu A. - Jakarta",
        quote:
          "\u201CIch fahre jeden Tag mit Grab zur Arbeit und habe die Helmfrage geha\u00DFt \u2014 entweder einen klobigen mit ins B\u00FCro nehmen oder einen benutzen, an den ich lieber nicht denke. LiGo hat das komplett ver\u00E4ndert. Ich falte ihn in meine Tasche und vergesse ihn bis zur n\u00E4chsten Fahrt.\u201D",
        image: customer1.url,
      },
      {
        name: "Sheilla D. - Bandung",
        quote:
          "\u201CFr\u00FCher war es mir unangenehm, meinen Helm ins Caf\u00E9 oder in Meetings mitzunehmen. Mit LiGo falte ich ihn einfach in meine Tasche \u2014 niemand merkt, dass ich mit dem Bike gekommen bin.\u201D",
        image: customer2.url,
      },
      {
        name: "Agnes M. - Yogyakarta",
        quote:
          "\u201CIch habe meinen Helm immer zuhause gelassen, weil er zu sperrig f\u00FCr die Uni war. Mit LiGo falte ich ihn und werfe ihn zwischen den Vorlesungen in meinen Rucksack. Ich denke gar nicht mehr dr\u00FCber nach.\u201D",
        image: customer3.url,
      },
    ],
  },
};

export default function CustomerStories({ lang }: { lang: Lang }) {
  const t = content[lang];

  return (
    <section className="bg-[#F1F1F1] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl"
        >
          {t.heading}
        </motion.h2>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {t.stories.map((story, i) => (
            <motion.article
              key={story.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.75,
                delay: 0.1 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col"
            >
              <div className="overflow-hidden rounded-[28px] bg-neutral-200 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)]">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              <h3 className="mt-8 text-2xl font-bold text-neutral-900">
                {story.name}
              </h3>
              <p className="mt-5 text-lg leading-relaxed text-neutral-600">
                {story.quote}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
