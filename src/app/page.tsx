"use client";
import Image from "next/image";
import { parse } from "opentype.js";

const main = async () => {
  let buffer = await fetch("./Habana.ttf").then((res) => res.arrayBuffer());

  let font = parse(buffer);

  let pathoptions = {
    kerning: true,
    hinting: true,
    features: { liga: false, rlig: false },
  };

  font.getPath("Hello World!", 0, 0, 72, pathoptions);
};

export default function Home() {
  main();

  return <p>Hello World!</p>;
}
