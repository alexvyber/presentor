// import Image from "next/image";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

import Content from "./message.mdx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Content />
    </main>
  );
}
