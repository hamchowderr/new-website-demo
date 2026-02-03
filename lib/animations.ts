import { Variants } from "framer-motion";

/**
 * Custom easing curves for animations
 */
export const easings = {
  easeOut: [0.22, 1, 0.36, 1],
  easeInOut: [0.45, 0, 0.55, 1],
  spring: { type: "spring", damping: 20, stiffness: 100 },
};

/**
 * Fade in from below with upward motion
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easings.easeOut
    }
  }
};

/**
 * Fade in without motion
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
};

/**
 * Container for staggered children animations
 */
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

/**
 * Scale on hover for interactive elements
 */
export const scaleOnHover: Variants = {
  rest: {
    scale: 1
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

/**
 * Slide in from the left
 */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: easings.easeOut
    }
  }
};

/**
 * Slide in from the right
 */
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: easings.easeOut
    }
  }
};

/**
 * Breathing animation for CTA buttons
 */
export const breathe: Variants = {
  initial: {
    scale: 1
  },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

/**
 * Card reveal animation
 */
export const cardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: easings.easeOut
    }
  }
};
