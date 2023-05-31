import classes from "./Modal.module.css";

import Card, { CardProps } from "../Card/Card";
import { AnimatePresence, motion } from "framer-motion";

const backdropVariants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

const Modal = ({
  layoutId,
  onClick,
  ...props
}: CardProps & { layoutId: string | null; onClick?: () => void }) => {
  return (
    <AnimatePresence>
      {layoutId && (
        <motion.div
          className={classes.backdrop}
          onClick={onClick}
          initial="closed"
          animate={layoutId ? "open" : "closed"}
          variants={backdropVariants}
        >
          <motion.div layoutId={layoutId} onClick={onClick}>
            <Card {...props} isSkeleton={!layoutId} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
