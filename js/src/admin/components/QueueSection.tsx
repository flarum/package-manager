import app from 'flarum/admin/app';
import Component, {ComponentAttrs} from 'flarum/common/Component';
import LoadingIndicator from "flarum/common/components/LoadingIndicator";
import humanTime from "flarum/common/utils/humanTime";
import type Mithril from "mithril";
import Button from "flarum/common/components/Button";
import QueueState from "../states/QueueState";
import StatusLabel from "./StatusLabel";
import TaskOutputModal from "./TaskOutputModal";

interface QueueSectionAttrs extends ComponentAttrs {
  state: QueueState;
}

export default class QueueSection extends Component<QueueSectionAttrs> {
  oninit(vnode: Mithril.Vnode<QueueSectionAttrs, this>) {
    super.oninit(vnode);

    this.attrs.state.loadTasks().then(m.redraw);
  }

  view() {
    return (
      <div id="PackageManager-queueSection" className="ExtensionPage-permissions PackageManager-queueSection">
        <div className="ExtensionPage-permissions-header PackageManager-queueSection-header">
          <div className="container">
            <h2 className="ExtensionTitle">{app.translator.trans('flarum-package-manager.admin.sections.queue.title')}</h2>
            <Button
              className="Button Button--icon"
              icon='fas fa-sync-alt'
              onclick={() => this.attrs.state.loadTasks().then(m.redraw)}
              aria-label={app.translator.trans('flarum-package-manager.admin.sections.queue.refresh')}/>
          </div>
        </div>
        <div className="container">
          {this.queueTable()}
        </div>
      </div>
    );
  }

  queueTable() {
    if (!this.attrs.state.tasks) {
      return (
        <LoadingIndicator />
      );
    }

    if (this.attrs.state.tasks && !this.attrs.state.tasks.length) {
      return (
        <h3 className="ExtensionPage-subHeader">{app.translator.trans('flarum-package-manager.admin.sections.queue.none')}</h3>
      );
    }

    return (
      <table className="Table">
        <thead>
          <tr>
            <th>{app.translator.trans('flarum-package-manager.admin.sections.queue.columns.operation')}</th>
            <th>{app.translator.trans('flarum-package-manager.admin.sections.queue.columns.package')}</th>
            <th>{app.translator.trans('flarum-package-manager.admin.sections.queue.columns.status')}</th>
            <th>{app.translator.trans('flarum-package-manager.admin.sections.queue.columns.started_at')}</th>
            <th>{app.translator.trans('flarum-package-manager.admin.sections.queue.columns.finished_at')}</th>
            <th>{app.translator.trans('flarum-package-manager.admin.sections.queue.columns.details')}</th>
          </tr>
        </thead>
        <tbody>
          {this.attrs.state.tasks.map((task, index) => (
            <tr key={index}>
              <td>{app.translator.trans(`flarum-package-manager.admin.sections.queue.operations.${task.operation()}`)}</td>
              <td>{task.package()}</td>
              <td>
                <StatusLabel
                  type={task.status()}
                  label={app.translator.trans(`flarum-package-manager.admin.sections.queue.statuses.${task.status()}`)} />
              </td>
              <td>{humanTime(task.startedAt())}</td>
              <td>{humanTime(task.finishedAt())}</td>
              <td className="Table-controls">
                <Button
                  className="Button Button--icon Table-controls-item"
                  icon="fas fa-file-alt"
                  aria-label={app.translator.trans('flarum-package-manager.admin.sections.queue.columns.details')}
                  onclick={() => app.modal.show(TaskOutputModal, { task })}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
