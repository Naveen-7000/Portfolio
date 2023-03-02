import * as React from "react";
import { motion } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { MobileNavigation } from "./MobileNavigation";
import Link from "next/link";
import Image from "next/image";

const variants = {
  open: {
    left: 0,
    pointerEvent: "none",
    transition: {
      duration: 1,
      ease: [0.6, 0.01, 0, 0.9],
    },
  },
  closed: {
    left: "-100vw",
    pointerEvent: "none",
    transition: {
      delay: 1,
      duration: 1,
      ease: [0.6, 0.01, 0, 0.9],
    },
  },
};

export const Navigation = ({ isOpen, toggleOpen }: any) => {
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="navigation-wrapper"
    >
      <MobileNavigation variants={variants} isOpen={isOpen} />
      <div
        data-scroll
        data-scroll-sticky
        data-scroll-target="#menu-target"
        className="menu-top"
      >
        <Link legacyBehavior href="/">
          <a className="brand-logo">
            <Image
              className="brand-logo__icon"
              src="/svg/naveen-logo-left.svg"
              alt="naveen logo icon"
              width={58}
              height={42}
            />
          </a>
        </Link>
        <MenuToggle toggle={toggleOpen} toggleState={isOpen} />
      </div>
    </motion.div>
  );
};
