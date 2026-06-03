'use client';
import LigoHero from "./components/LigoHero";

import LigoInsights from "./components/LigoInsights";
import LigoAdvantages from "./components/LiGoAdvantages";
import { useState } from "react";
import FAQ from "./components/FAQ";
import CustomerStories from "./components/CustomerStories";
type Lang = "en" | "id" | "de";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <div className="w-full h-full flex flex-col">
      <LigoHero lang={lang} setLang={setLang} />
      <LigoInsights lang={lang} />
      <LigoAdvantages lang={lang} />
      <CustomerStories lang={lang} />
      <FAQ lang={lang} />
    </div>
     
  );
}
