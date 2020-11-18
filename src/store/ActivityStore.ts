import { Instance, types } from "mobx-state-tree";

const ActivityStore = types
  .model({
    title: types.string,
    status: types.boolean,
    id: types.number,
  })
  .actions((self) => ({
    update: (activity: IActivity) => {
      self.status = activity.status;
      self.title = activity.title;
      self.id = activity.id;
    },
    toggleDone: () => {
      self.status = !self.status;
    },
  }))
  .views((self) => ({
    getCopy() {
      return {
        title: self.title,
        status: self.status,
        id: self.id,
      };
    },
  }));

export interface IActivity extends Instance<typeof ActivityStore> {}

export default ActivityStore;
