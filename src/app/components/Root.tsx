import { Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";

export function Root() {
  const location = useLocation();

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-base)', overflow: 'hidden' }}>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full min-h-screen"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
