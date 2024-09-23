import { useState, useEffect } from "react";
import Image from "next/image";

import data from "@/pages/api/images.json";

import AutoComplete from "@/components/AutoComplete";
import PhotoGallery from "@/components/PhotoGallery";
import ImageCarousel from "@/components/ImageCarousel";
import Tooltip from "@/components/Tooltip";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`transition-colors duration-500 ease-in-out w-full ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <header className="px-[96px] py-4 flex justify-end">
        <button
          onClick={toggleDarkMode}
          className="px-2 py-2 rounded bg-secondary text-white  transition"
        >
          {darkMode ? (
            <Tooltip text={"Light Mode"}>
              <Image
                src="/light.png"
                width={32}
                height={32}
                alt="light mode"
                className=" hover:scale-110"
              />
            </Tooltip>
          ) : (
            <Tooltip text={"Dark Mode"}>
              <Image
                src="/dark.png"
                width={32}
                height={32}
                alt="dark mode"
                className=" hover:scale-110"
              />
            </Tooltip>
          )}
        </button>
      </header>
      <AutoComplete images={data} />
      <PhotoGallery images={data} />
      <ImageCarousel images={data} />
    </div>
  );
}
