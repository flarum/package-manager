import app from 'flarum/admin/app';
import Task from "../models/Task";

export default class QueueState {
  tasks?: Task[]|null;

  loadTasks() {
    this.tasks = null;

    app.store
      .find<Task[]>('package-manager-tasks', {})
      .then((data) => {
        this.tasks = data;
        m.redraw();
      });
  }
}
