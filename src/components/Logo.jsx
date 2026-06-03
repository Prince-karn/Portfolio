import { motion } from "framer-motion";

const Logo = ({ className = "", size = "medium", animated = true }) => {
  // Dimensions based on size prop
  const dimensions = {
    small: { width: "78px", height: "65px", viewBox: "0 0 500 420" },
    medium: { width: "240px", height: "200px", viewBox: "0 0 500 420" },
    large: { width: "420px", height: "350px", viewBox: "0 0 500 420" },
  };

  const currentDim = dimensions[size] || dimensions.medium;

  // Animation variants
  const drawAnimation = animated
    ? {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (custom) => ({
          pathLength: 1,
          opacity: 1,
          transition: {
            pathLength: { delay: custom * 0.2, type: "spring", duration: 1.5, bounce: 0 },
            opacity: { delay: custom * 0.2, duration: 0.3 },
          },
        }),
      }
    : {};

  const fadeUpAnimation = animated
    ? {
        hidden: { opacity: 0, y: 15 },
        visible: (custom) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: custom * 0.2,
            duration: 0.8,
            ease: "easeOut",
          },
        }),
      }
    : {};

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      <svg
        width={currentDim.width}
        height={currentDim.height}
        viewBox={currentDim.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_15px_rgba(255,107,0,0.15)]"
      >
        {/* Left '4' Path (Blocky futuristic number 4) */}
        <motion.path
          d="M 90,290 L 150,290 L 150,310 L 170,310 L 170,290 L 185,290 L 185,270 L 170,270 L 170,180 L 140,180 L 80,270 L 80,290 Z"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinejoin="miter"
          variants={drawAnimation}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          custom={0.5}
        />
        {/* Inner orange </> code tag inside left '4' */}
        <motion.path
          d="M 125,245 L 120,250 L 125,255 M 135,245 L 140,250 L 135,255 M 132,243 L 128,257"
          stroke="#FF6B00"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={drawAnimation}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          custom={1.5}
        />

        {/* Orange paint-stroke circle container representing '0' */}
        {/* Double-layered path for rough brush swirl look */}
        <motion.path
          d="M 250,195 C 291.4,195 325,228.6 325,270 C 325,311.4 291.4,345 250,345 C 208.6,345 175,311.4 175,270 C 175,232 203.2,200.7 239.5,195.8"
          stroke="#FF6B00"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={drawAnimation}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          custom={0.8}
        />
        <motion.path
          d="M 230,198 C 218,202 207,209 198,218 C 180,236 170,260 170,285 C 170,320 198,348 233,350 C 268,352 305,338 322,310 C 328,300 331,288 330,275 C 329,255 318,235 300,220"
          stroke="#FF6B00"
          strokeWidth="4"
          strokeLinecap="round"
          variants={drawAnimation}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          custom={1.0}
        />

        {/* Code symbol < / > with horizontal line inside the '0' circle */}
        <motion.path
          d="M 210,260 L 200,270 L 210,280 M 245,260 L 255,270 L 245,280"
          stroke="#FFFFFF"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={drawAnimation}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          custom={1.3}
        />
        <motion.path
          d="M 233,257 L 222,283"
          stroke="#FFFFFF"
          strokeWidth="5"
          strokeLinecap="round"
          variants={drawAnimation}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          custom={1.4}
        />
        <motion.line
          x1="220"
          y1="292"
          x2="235"
          y2="292"
          stroke="#FF6B00"
          strokeWidth="5"
          strokeLinecap="round"
          variants={drawAnimation}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          custom={1.6}
        />

        {/* Right '4' Path */}
        <motion.path
          d="M 330,290 L 390,290 L 390,310 L 410,310 L 410,290 L 425,290 L 425,270 L 410,270 L 410,180 L 380,180 L 320,270 L 320,290 Z"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinejoin="miter"
          variants={drawAnimation}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          custom={0.6}
        />
        {/* Right '4' Orange bottom accent block */}
        <motion.rect
          x="396"
          y="298"
          width="10"
          height="15"
          fill="#FF6B00"
          variants={fadeUpAnimation}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          custom={1.8}
        />

        {/* Wavy rising smoke curve from '0' to Taj Mahal */}
        <motion.path
          d="M 312,238 C 322,205 305,178 340,140 C 352,126 370,118 368,96"
          stroke="#FF6B00"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          variants={drawAnimation}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          custom={1.2}
        />
        <motion.path
          d="M 330,205 C 338,185 324,165 352,130 C 362,118 382,102 380,85"
          stroke="#FF6B00"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          variants={drawAnimation}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          custom={1.3}
        />

        {/* Taj Mahal Silhouette centered around X=380, Y=58 */}
        {/* Base */}
        <motion.path
          d="M 350,85 L 410,85 L 410,81 L 350,81 Z"
          fill="#FF6B00"
          variants={fadeUpAnimation}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          custom={1.5}
        />
        {/* Main Building Body */}
        <motion.path
          d="M 358,81 L 358,68 L 366,68 L 366,61 L 394,61 L 394,68 L 402,68 L 402,81 Z"
          fill="#FF6B00"
          variants={fadeUpAnimation}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          custom={1.6}
        />
        {/* Main Central Dome */}
        <motion.path
          d="M 373,61 C 373,50 376,46 380,46 C 384,46 387,50 387,61 Z"
          fill="#FF6B00"
          variants={fadeUpAnimation}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          custom={1.7}
        />
        {/* Flame/Drop on top of Main Dome */}
        <motion.path
          d="M 380,46 C 380,43 381.5,41 380,38 C 378.5,41 380,43 380,46 Z"
          fill="#FF6B00"
          variants={fadeUpAnimation}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          custom={1.9}
        />
        {/* Left Side Dome */}
        <motion.path
          d="M 361,68 C 361,62 362,59 364.5,59 C 367,59 368,62 368,68 Z"
          fill="#FF6B00"
          variants={fadeUpAnimation}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          custom={1.8}
        />
        {/* Right Side Dome */}
        <motion.path
          d="M 392,68 C 392,62 393,59 395.5,59 C 398,59 399,62 399,68 Z"
          fill="#FF6B00"
          variants={fadeUpAnimation}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          custom={1.8}
        />
        {/* Minarets (4 Pillars) */}
        {/* Outer Left Minaret */}
        <motion.path
          d="M 351,81 L 353,81 L 353,49 L 351,49 Z"
          fill="#FF6B00"
          variants={fadeUpAnimation}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          custom={1.7}
        />
        <motion.path
          d="M 350,49 L 354,49 L 352,46 Z"
          fill="#FF6B00"
          variants={fadeUpAnimation}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          custom={1.8}
        />
        {/* Inner Left Minaret */}
        <motion.path
          d="M 355,81 L 356.5,81 L 356.5,62 L 355,62 Z"
          fill="#FF6B00"
          variants={fadeUpAnimation}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          custom={1.7}
        />
        {/* Inner Right Minaret */}
        <motion.path
          d="M 403.5,81 L 405,81 L 405,62 L 403.5,62 Z"
          fill="#FF6B00"
          variants={fadeUpAnimation}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          custom={1.7}
        />
        {/* Outer Right Minaret */}
        <motion.path
          d="M 407,81 L 409,81 L 409,49 L 407,49 Z"
          fill="#FF6B00"
          variants={fadeUpAnimation}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          custom={1.7}
        />
        <motion.path
          d="M 406,49 L 410,49 L 408,46 Z"
          fill="#FF6B00"
          variants={fadeUpAnimation}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          custom={1.8}
        />
      </svg>

      {/* Slogans and Branding Text underneath SVG graphic - Hidden in small/navbar mode to collapse height layout flow */}
      {size !== "small" && (
        <div className="flex flex-col items-center mt-3 text-center">
          {/* "404 CURRY NOT FOUND" */}
          <motion.div
            className="font-extrabold tracking-wider text-xl md:text-2xl uppercase flex gap-2 select-none"
            variants={fadeUpAnimation}
            initial={animated ? "hidden" : "visible"}
            animate="visible"
            custom={1.2}
          >
            <span className="text-[#FF6B00] glow-text-orange font-mono">CURRY</span>
            <span className="text-white font-mono">NOT FOUND</span>
          </motion.div>

          {/* "< WEB DEVELOPMENT TEAM />" */}
          <motion.div
            className="text-[#22C55E] glow-text-green text-xs md:text-sm font-mono tracking-widest mt-1.5 select-none"
            variants={fadeUpAnimation}
            initial={animated ? "hidden" : "visible"}
            animate="visible"
            custom={1.4}
          >
            &lt; WEB &amp; MOBILE DEVELOPMENT TEAM /&gt;
          </motion.div>

          {/* "{ WE CODE. YOU GROW. }" */}
          <motion.div
            className="text-[#FF6B00]/90 text-xs tracking-wide mt-2 font-light select-none"
            variants={fadeUpAnimation}
            initial={animated ? "hidden" : "visible"}
            animate="visible"
            custom={1.6}
          >
            &#123; WE CODE. YOU GROW. &#125;
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Logo;
