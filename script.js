import React, { useState, useEffect } from "https://esm.sh/react@19";
import { createRoot } from "https://esm.sh/react-dom@19/client";
import { motion } from "https://esm.sh/motion/react";
import { ChevronLeft, ChevronRight } from "https://esm.sh/lucide-react";

const ASSETS = [
{
  src: 'https://6a8ed666dc963d7a1d03673d.imgix.net/sandbox/20150606_153546_Original.jpeg',
  title: '' },

{
  src: 'https://6a8ed666dc963d7a1d03673d.imgix.net/sandbox/IMG_20211114_174222140_Original.jpeg',
  title: '' },

{
  src: 'https://6a8ed666dc963d7a1d03673d.imgix.net/sandbox/IMG-20220923-WA0024_Original.jpeg',
  title: '' },

{
  src: 'https://6a8ed666dc963d7a1d03673d.imgix.net/sandbox/IMG-20211111-WA0079_Original.jpeg',
  title: '' },

{
  src: 'https://6a8ed666dc963d7a1d03673d.imgix.net/sandbox/IMG-20220923-WA0019_Original.jpeg',
  title: '' },

{
  src: 'https://6a8ed666dc963d7a1d03673d.imgix.net/sandbox/FB_IMG_1557836955203_Original.jpeg',
  title: '' },

{
  src: 'https://6a8ed666dc963d7a1d03673d.imgix.net/sandbox/20180715_204318_Original.jpeg',
  title: '' },

{
  src: 'https://6a8ed666dc963d7a1d03673d.imgix.net/sandbox/IMG_4514.jpeg',
  title: '' }];



const App = () => {
  const [activeIndex, setActiveIndex] = useState(3);

  const toPrev = () => {
    setActiveIndex(prev => Math.max(0, prev - 1));
  };

  const toNext = () => {
    setActiveIndex(prev => Math.min(ASSETS.length - 1, prev + 1));
  };

  const toSlide = index => {
    setActiveIndex(index);
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "p-2 text-neutral-800 select-none" }, /*#__PURE__*/

    React.createElement("div", { className: "w-30 md:w-50 mt-8" }, /*#__PURE__*/

    React.createElement(motion.div, {
      className: "flex w-fit",
      animate: { x: `${-activeIndex * 100 / ASSETS.length}%` },
      transition: { type: 'spring', bounce: 0.2, duration: 0.8 } },


    ASSETS.map((item, i) => {
      const isActive = activeIndex === i;
      {/* slide */}
      return /*#__PURE__*/(
        React.createElement("div", { className: "perspective-midrange", key: i }, /*#__PURE__*/
        React.createElement(motion.div, {
          className: "w-30 md:w-50 aspect-3/4 flex flex-col items-center gap-2 will-change-[transform,scale]",
          animate: { rotateY: (activeIndex - i) * 60, scale: isActive ? 1 : 0.85 },
          transition: { type: 'spring', bounce: 0.1, duration: 1 } }, /*#__PURE__*/

        React.createElement("img", { src: item.src, alt: item.title, className: "w-full h-full object-cover rounded-lg", onClick: () => toSlide(i) }), /*#__PURE__*/

        React.createElement(motion.div, {
          className: "text-xs md:text-sm whitespace-nowrap will-change-[opacity,filter]",
          animate: { filter: isActive ? 'blur(0)' : 'blur(2px)', opacity: isActive ? 1 : 0 } },

        item.title))));




    }))), /*#__PURE__*/




    React.createElement("div", { className: "fixed bottom-4 left-0 right-0 w-fit px-2 mx-auto flex items-center gap-4 justify-center text-neutral-700 rounded-full bg-neutral-200/50 backdrop-blur-xs border border-neutral-200/80 shadow-sm" }, /*#__PURE__*/

    React.createElement("button", { onClick: toPrev, className: "p-2 cursor-pointer" }, /*#__PURE__*/
    React.createElement(ChevronLeft, null)), /*#__PURE__*/


    React.createElement("div", { className: "w-[180px] flex justify-center items-center gap-2" },
    ASSETS.map((_, i) => /*#__PURE__*/
    React.createElement("div", {
      key: i,
      onClick: () => toSlide(i),
      className: `rounded-full cursor-pointer h-2 transition-[width,background-color] duration-300 ${activeIndex === i ? 'w-7 bg-current' : 'w-2 bg-current/30'}` }))), /*#__PURE__*/




    React.createElement("button", { onClick: toNext, className: "p-2 cursor-pointer" }, /*#__PURE__*/
    React.createElement(ChevronRight, null)))));





};

const root = createRoot(document.getElementById("app"));

root.render( /*#__PURE__*/React.createElement(App, null));