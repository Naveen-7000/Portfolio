import * as React from "react";
import { motion } from "framer-motion";

const openTransition = {
  duration: 1.1,
  delay: 1.2,
  ease: [0.6, 0.01, 0, 0.9],
};

const openTopTransition = {
  duration: 1.1,
  delay: 1.3,
  ease: [0.6, 0.01, 0, 0.9],
};

const openBottomTransition = {
  duration: 1.1,
  delay: 1.7,
  ease: [0.6, 0.01, 0, 0.9],
};

const closedTansition = {
  duration: 1,
  ease: [0.6, 0.01, 0, 0.9],
};

export const MobileNavigation = ({ variants, isOpen }: any) => (
  <motion.div
    data-scroll
    data-scroll-sticky
    data-scroll-target="#menu-target"
    variants={variants}
    className="menu-wrapper"
  >
    <motion.div
      animate={
        isOpen
          ? { opacity: 1, transition: openTransition }
          : { opacity: 0, transition: closedTansition }
      }
    >
      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openTopTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-top"
      >
        <div className="navigation-top__left">
          <h4 className="navigation-h4">DONT BE A STRANGER</h4>
          <div className="navigation-top__left--links">
            <a
              href="https://github.com/Naveen-7000"
              rel="noopener"
              target="_blank"
            >
              👾 GH
            </a>
            <a
              href="https://twitter.com/navin_bhusare"
              rel="noopener"
              target="_blank"
            >
              🐦 TW
            </a>
            <a
              href="https://www.linkedin.com/in/naveen-bhusare-337454191/"
              rel="noopener"
              target="_blank"
            >
              💼 LD
            </a>
          </div>
        </div>
        <div className="navigation-top__right">
          <h4 className="navigation-h4">HAVE AN IDEA?</h4>
          <a
            href="mailto:navinbhusare89@gmail.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Tell me about it
          </a>
        </div>
      </motion.div>

      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openBottomTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-bottom"
      >
        <h4 className="navigation-h4">FEATURED PROJECTS</h4>
        <div className="navigation-bottom__projects">
          <a
            target="_blank"
            rel="noopener"
            href="https://horizon-ui.com/horizon-tailwind-react/admin/default"
            className="navigation-bottom__projects-card"
          >
            <img src="webp/Horizon-1.png" alt="Horizon" />
            <h2>
              HORIZON UI
            </h2>
          </a>
          <a
            href="https://metropolis-nb.vercel.app/"
            target="_blank"
            rel="noopener"
            className="navigation-bottom__projects-card"
          >
            <img src="webp/Metropolis.png" alt="Metropolis" />
            <h2>METROPOLIS</h2>
          </a>
          <a
            href="https://phanison-linkedin-clone.web.app/"
            target="_blank"
            rel="noopener"
            className="navigation-bottom__projects-card"
          >
            <img src="webp/linkedin-landing.png" alt="linkedin" />
            <h2>
              LINKEDIN
              <br />
              CLONE
            </h2>
          </a>
        </div>
      </motion.div>
    </motion.div>
  </motion.div>
);
