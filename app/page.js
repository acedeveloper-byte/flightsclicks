'use client'
import Header from "@/components/Header";
import SearchEngine from "@/components/SearchEngine";
import Footer from "@/components/Footer";
import ExploreDeals from "@/components/ExploreDeals";
import DestCity from "@/components/DestCity";
import ExpediaModal from "@/components/Popup";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <Header />
      <SearchEngine />
      <ExploreDeals />

      <DestCity />
      <Footer />
      <ExpediaModal show={showModal} onClose={() => setShowModal(false)} />

    </>
  );
}
