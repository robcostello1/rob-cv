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
          <motion.div
            className={classes.modal}
            layoutId={layoutId}
            onClick={onClick}
          >
            <Card
              {...props}
              isSkeleton={!layoutId}
              footer={
                <div className="right">
                  <button className={classes.button} onClick={onClick}>
                    Close
                  </button>
                </div>
              }
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
