import Modal from "../../Modal";
import { TimeLineItem } from "../types";

import classes from "./EmployerModal.module.css";

type EmployerModalProps = {
  item?: TimeLineItem;
  onClose: () => void;
};

export const EmployerDetail = ({
  item,
}: Omit<EmployerModalProps, "onClose">) => (
  <>
    <p>{item?.description}</p>

    {item?.achievements?.length && (
      <ul>
        {item.achievements.map((achievement) => (
          <li>{achievement}</li>
        ))}
      </ul>
    )}

    {item?.skills?.length && (
      <ul className={classes.skills}>
        {item.skills.map((skill) => (
          <li className={classes["skills-list-item"]}>
            <span className={classes["skills-item"]}>
              {skill.icon}
              <span className="small">{skill.name}</span>
            </span>
          </li>
        ))}
      </ul>
    )}
  </>
);

const EmployerModal = ({ item, onClose }: EmployerModalProps) => {
  return (
    <Modal
      layoutId={item?.id || null}
      onClick={onClose}
      header={item?.title}
      subheader={`${item?.date?.start} - ${item?.date?.end}`}
    >
      <EmployerDetail item={item} />
    </Modal>
  );
};

export default EmployerModal;
