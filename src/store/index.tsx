import { cast, types } from "mobx-state-tree";
import TodoStore, { IActivity } from "./ActivityStore";
import mockActivities from "../mockups/mock.json";
import am from "array-move";

const castedActivities = mockActivities as IActivity[];

const RootStore = types
  .model({
    activities: types.array(TodoStore),
  })
  .actions((self) => ({
    addActivity(activityTitle: string) {
      const nextNumber = self.activities.length;

      self.activities.push({
        title: activityTitle,
        status: false,
        id: nextNumber,
      });
    },
    updateOrder(from: number, to: number) {
      const shuffled = am(self.activities, from, to);
      self.activities = cast(shuffled);
    },
    removeActivity(id: number) {
      const newActivities = [
        ...self.activities.filter((activity) => activity.id !== id),
      ];
      self.activities = cast(newActivities);
    },
  }))
  .views((self) => ({
    getNotDone: () => self.activities.slice().filter((el) => !el.status).length,
  }));

const Store = RootStore.create({ activities: castedActivities });
export default Store;
