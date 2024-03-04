import { Bebas_Neue } from "next/font/google";

const inter = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Logo() {
  return (
    <h1 className={`${inter.className} mb-4 text-7xl text-amber-900 uppercase`}>
      Omnom
    </h1>
  );
}
