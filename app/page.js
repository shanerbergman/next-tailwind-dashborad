import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
export default function Home() {
  return (
    <>
      <Sidebar>
        <main className="bg-gray-100 min-h-screen">
          <Header></Header>
        </main>
      </Sidebar>
    </>
  );
}
