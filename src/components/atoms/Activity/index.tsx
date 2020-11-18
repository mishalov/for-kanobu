import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Button from "../Button";
import styles from "./Activity.module.css";

interface IActivityProps {
  title: string;
  status: boolean;
  id: number;
  toggleDone: () => void;
  index: number;
}

const Activity: React.FC<IActivityProps> = (props) => {
  const { title, status, toggleDone, index, id } = props;
  const { activity, title: titleStyle, button: buttonStyle, wrapper } = styles;

  return (
    <Draggable draggableId={`draggable-${id}`} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={wrapper}
        >
          <div className={activity}>
            <div className={titleStyle}>{title}</div>
            <div className={buttonStyle}>
              {status ? (
                <Button status="active" onClick={toggleDone}>
                  Сделано!
                </Button>
              ) : (
                <Button status="normal" onClick={toggleDone}>
                  Не сделано
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Activity;
