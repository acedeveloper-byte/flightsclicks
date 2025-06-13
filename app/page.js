'use client'
import Header from "@/components/Header";
import SearchEngine from "@/components/SearchEngine";
import Footer from "@/components/Footer";
import ExploreDeals from "@/components/ExploreDeals";
import DestCity from "@/components/DestCity";
import ExpediaModal from "@/components/Popup";
import { useState } from "react";

export default function Home() {

  return (
    <>
      <Header />
      <SearchEngine />
      <ExploreDeals />

      <DestCity />
      <Footer />

    </>
  );
}
