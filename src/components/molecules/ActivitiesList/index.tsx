import React, { useCallback } from "react";
import Activity from "../../atoms/Activity";
import styles from "./ActivitiesList.module.css";
import Store from "../../../store";
import { observer } from "mobx-react-lite";
import { inject } from "mobx-react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

interface IActivitiesListProps {
  store?: typeof Store;
}

const ActivitiesList: React.FC<IActivitiesListProps> = (props) => {
  const store = props.store!;
  const activities = store.activities;
  const activitiesStatuses = store.activities.map((el) => ({
    id: el.id,
    status: el.status,
  }));

  const { updateOrder } = store;

  const { activitiesList } = styles;

  const onDragEnd = useCallback(
    (context: DropResult) => {
      if (context.destination && !isNaN(context.destination.index))
        updateOrder(context.source.index, context.destination?.index);
    },
    [updateOrder]
  );

  return (
    <div className={activitiesList}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {activities.map((activity, index) => (
                <Activity
                  key={`activity__${activity.id}`}
                  index={index}
                  id={activity.id}
                  title={activity.title}
                  status={Boolean(
                    activitiesStatuses.find((el) => el.id === activity.id)
                      ?.status
                  )}
                  toggleDone={activity.toggleDone}
                  removeItem={store.removeActivity}
                />
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default inject("store")(observer(ActivitiesList));
