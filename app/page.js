import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import SearchEngine from "@/components/SearchEngine";
import Footer from "@/components/Footer";
import ExploreDeals from "@/components/ExploreDeals";
import DestCity from "@/components/DestCity";

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
