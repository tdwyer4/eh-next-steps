import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./ParallaxPage.module.css";
import SplineHero from "./SplineHero";

export const TextParallaxContentExample = () => {
  return (
    <div className={styles.bgwhite}>
      <TextParallaxContent
        imgUrl="https://placehold.co/2671x1780/222222/293139?text=Background"
        subheading="You did the hard part."
        heading="We'll take it from here."
      >
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://placehold.co/2671x1780/3E454C/566069?text=Section+2"
        subheading="COPYYYYYYYYY"
        heading="and MORE copyyyyyyyy!"
      >
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://placehold.co/2671x1780/3E454C/566069?text=Section+3"
        subheading="COPYYYYYYYYY"
        heading="and EVEN MORE copyyyyyyyy!"
      >
        <ExampleContent />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 0;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className={styles.parallaxStyling}>
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className={styles.targetRefStyle}
    >
      <p className={styles.sectionSubHeading}>{subheading}</p>
      <p className={styles.sectionHeading}>{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className={styles.contentSectionContainer}>
    <h2 className={styles.contentSectionh2}>
      Additional content explaining the above card here
    </h2>
    <div className={styles.contentSectionDivvy}>
      <p className={styles.contentSectionp}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
        maiores voluptate est ut saepe accusantium maxime doloremque nulla
        consectetur possimus.
      </p>
      <p className={styles.contentSectionp}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        reiciendis blanditiis aliquam aut fugit sint.
      </p>
      <button className={styles.contentSectionButton}>Learn more</button>
    </div>
  </div>
);
