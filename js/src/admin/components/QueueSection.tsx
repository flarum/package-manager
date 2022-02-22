import app from 'flarum/admin/app';
import Component, {ComponentAttrs} from 'flarum/common/Component';
import Task from "../models/Task";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";
import humanTime from "flarum/common/utils/humanTime";
import type Mithril from "mithril";

export default class QueueSection extends Component {
  protected tasks: Task[]|null = null;

  oninit(vnode: Mithril.Vnode<ComponentAttrs, this>) {
    super.oninit(vnode);

    this.loadTasks();
  }

  view() {
    return (
      <div id="PackageManager-queueSection" className="ExtensionPage-permissions PackageManager-queueSection">
        <div className="ExtensionPage-permissions-header">
          <div className="container">
            <h2 className="ExtensionTitle">{app.translator.trans('flarum-package-manager.admin.sections.queue.title')}</h2>
          </div>
        </div>
        <div className="container">
          {this.queueTable()}
        </div>
      </div>
    );
  }

  queueTable() {
    if (!this.tasks) {
      return (
        <LoadingIndicator />
      );
    }

    if (this.tasks && !this.tasks.length) {
      return (
        <h3 className="ExtensionPage-subHeader">{app.translator.trans('flarum-package-manager.admin.sections.queue.none')}</h3>
      );
    }

    return (
      <table className="Table">
        <thead>
          <tr>
            <th>{app.translator.trans('flarum-package-manager.admin.sections.queue.columns.operation')}</th>
            <th>{app.translator.trans('flarum-package-manager.admin.sections.queue.columns.status')}</th>
            <th>{app.translator.trans('flarum-package-manager.admin.sections.queue.columns.started_at')}</th>
            <th>{app.translator.trans('flarum-package-manager.admin.sections.queue.columns.finished_at')}</th>
            <th>{app.translator.trans('flarum-package-manager.admin.sections.queue.columns.details')}</th>
          </tr>
        </thead>
        <tbody>
          {this.tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.operation()}</td>
              <td>{task.status()}</td>
              <td>{humanTime(task.startedAt())}</td>
              <td>{humanTime(task.finishedAt())}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  loadTasks() {
    app.store
      .find<Task[]>('package-manager-tasks', {})
      .then((data) => {
        this.tasks = data;
        m.redraw();
      });
  }
}
