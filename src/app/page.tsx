import BirthdayCard from "@/components/BirthdayCard";
import { type People } from "@/lib/type";

const peoples: People[] = [
  {
    image: "/images/domba.jpg",
    name: "Bertie Yates",
    age: 29,
  },
  {
    image: "/images/Fakta-Unik-Tentang-Kambing.jpg",
    name: "Hester Hogan",
    age: 32,
  },
  {
    image: "/images/gambar sapi  5.jpg",
    name: "Larry Little",
    age: 36,
  },
  {
    image: "/images/gambar sapi (1).jpg",
    name: "Sean Walsh",
    age: 34,
  },
  {
    image: "/images/Kambing Alpine.jpg",
    name: "Lola Gardner",
    age: 29,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-fuchsia-200">
      <BirthdayCard peoples={peoples} />
    </main>
  );
}
