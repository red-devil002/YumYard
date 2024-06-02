'use client';
import MenuItem from "../Menu/MenuItem";
import Image from "next/image";
import SectionHeaders from "./SectionHeader";
import { useEffect, useState } from "react";

export default function HomeMenu() {

  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    fetch('/api/menu-items').then(res => {
      res.json().then(menuItems => {
        const best3 = menuItems.slice(-4);
        setBestSellers(best3);
      })
    })
  }, [])
  return (
    <>
      <section className="">
        <div className="absolute left-0 right-0 w-full justify-start">
          <div className="absolute left-0 -top-[70px] text-left -z-10">
            <Image
              src={"/sallad1.png"}
              width={109}
              height={189}
              alt={"Sallad1"}
            />
          </div>
          <div className="absolute -top-[100px] right-0 -z-10">
            <Image
              src={"/sallad2.png"}
              width={107}
              height={195}
              alt={"Sallad2"}
            />
          </div>
        </div>
        <div className="text-center">
          <SectionHeaders
            subHeader={"check out"}
            mainHeader={"Our Best Sellers"}
          />
        </div>
        <div className="grid grid-cols-4 gap-4 mt-10">
          {bestSellers?.length > 0 && bestSellers.map(item => (
            <MenuItem {...item} />
          ))}
        </div>
      </section>
    </>
  );
}
