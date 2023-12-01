"use client";
import galleryData from "@/AppData/galleryData";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const GalleryComponent = () => {
  const [filltereddata, setFilltereddata] = useState(galleryData);
  const [currentValue, setCurrentValue] = useState(0); // 0 means all

  useEffect(() => {
    if (currentValue === 0) {
      setFilltereddata(galleryData);
      return;
    }

    const latestetData = galleryData.filter(
      (item) => item.category === currentValue
    );
    setFilltereddata(latestetData);
  }, [currentValue]);

  return (
    <div className="mt-4">
      <div className="text-center mb-4">
        <div className="btn-group">
          <button
            className={`btn ${currentValue === 0 && "active_btn"}`}
            onClick={() => setCurrentValue(0)}
          >
            All
          </button>
          <button
            className={`btn ${currentValue === 1 && "active_btn"}`}
            onClick={() => setCurrentValue(1)}
          >
            One
          </button>
          <button
            className={`btn ${currentValue === 2 && "active_btn"}`}
            onClick={() => setCurrentValue(2)}
          >
            Two
          </button>
          <button
            className={`btn ${currentValue === 3 && "active_btn"}`}
            onClick={() => setCurrentValue(3)}
          >
            Three
          </button>
        </div>
      </div>
      <motion.div layout className="grid">
        <AnimatePresence>
          {filltereddata.map((item, index) => (
            <motion.div
              layout
              key={index}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
            >
              <Image height={300} width={300} src={item.img} alt="img" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default GalleryComponent;
