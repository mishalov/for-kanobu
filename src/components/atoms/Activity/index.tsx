import React, { useCallback } from "react";
import { Draggable } from "react-beautiful-dnd";
import Button from "../Button";
import styles from "./Activity.module.css";

interface IActivityProps {
  title: string;
  status: boolean;
  id: number;
  toggleDone: () => void;
  removeItem: (id: number) => void;
  index: number;
}

const Activity: React.FC<IActivityProps> = (props) => {
  const { title, status, toggleDone, index, id, removeItem } = props;
  const {
    activity,
    title: titleStyle,
    button: buttonStyle,
    wrapper,
    removeIcon,
  } = styles;

  const handleRemove = useCallback(() => {
    removeItem(id);
  }, [id, removeItem]);

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
                <Button
                  status="active"
                  onClick={toggleDone}
                  title="Тыкните если недоделали"
                >
                  Сделано!
                </Button>
              ) : (
                <Button
                  status="normal"
                  onClick={toggleDone}
                  title="Тыкните если сделали"
                >
                  Не сделано
                </Button>
              )}
            </div>
            <div
              className={removeIcon}
              onClick={handleRemove}
              title="Удалить элемент"
            >
              🗑️
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Activity;
