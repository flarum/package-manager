import type Mithril from 'mithril';
import app from 'flarum/admin/app';
import Component, { ComponentAttrs } from 'flarum/common/Component';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import Button from 'flarum/common/components/Button';
import Tooltip from 'flarum/common/components/Tooltip';
import { Extension } from 'flarum/admin/AdminApplication';
import icon from 'flarum/common/helpers/icon';

import QueueState from '../states/QueueState';
import Label from './Label';
import TaskOutputModal from './TaskOutputModal';
import humanDuration from '../utils/humanDuration';
import Task from '../models/Task';

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
              icon="fas fa-sync-alt"
              onclick={() => this.attrs.state.loadTasks().then(m.redraw)}
              aria-label={app.translator.trans('flarum-package-manager.admin.sections.queue.refresh')}
            />
          </div>
        </div>
        <div className="container">{this.queueTable()}</div>
      </div>
    );
  }

  queueTable() {
    if (!this.attrs.state.tasks) {
      return <LoadingIndicator />;
    }

    if (this.attrs.state.tasks && !this.attrs.state.tasks.length) {
      return <h3 className="ExtensionPage-subHeader">{app.translator.trans('flarum-package-manager.admin.sections.queue.none')}</h3>;
    }

    return (
      <table className="Table PackageManager-queueTable">
        <thead>
          <tr>
            <th>{app.translator.trans('flarum-package-manager.admin.sections.queue.columns.operation')}</th>
            <th>{app.translator.trans('flarum-package-manager.admin.sections.queue.columns.package')}</th>
            <th>{app.translator.trans('flarum-package-manager.admin.sections.queue.columns.status')}</th>
            <th>{app.translator.trans('flarum-package-manager.admin.sections.queue.columns.elapsed_time')}</th>
            <th>{app.translator.trans('flarum-package-manager.admin.sections.queue.columns.details')}</th>
          </tr>
        </thead>
        <tbody>{this.attrs.state.tasks.map(this.taskRow.bind(this))}</tbody>
      </table>
    );
  }

  taskRow(task: Task, index: number) {
    const extension: Extension | null = app.data.extensions[task.package()?.replace(/(\/flarum-|\/flarum-ext-|\/)/g, '-')];

    return (
      <tr key={index}>
        <td>{app.translator.trans(`flarum-package-manager.admin.sections.queue.operations.${task.operation()}`)}</td>
        <td>
          {extension ? (
            <div className="PackageManager-queueTable-package">
              <div className="PackageManager-queueTable-package-icon ExtensionIcon" style={extension.icon}>
                {extension.icon ? icon(extension.icon.name) : ''}
              </div>
              <div className="PackageManager-queueTable-package-details">
                <span className="PackageManager-queueTable-package-title">{extension.extra['flarum-extension'].title}</span>
                <span className="PackageManager-queueTable-package-name">{task.package()}</span>
              </div>
            </div>
          ) : (
            task.package()
          )}
        </td>
        <td>
          <Label
            className="PackageManager-queueTable-status"
            type={{ running: 'neutral', failure: 'error', pending: 'warning', success: 'success' }[task.status()]}
          >
            {app.translator.trans(`flarum-package-manager.admin.sections.queue.statuses.${task.status()}`)}
          </Label>
        </td>
        <td>
          <Tooltip text={`${dayjs(task.startedAt()).format('LL LTS')}  ${dayjs(task.finishedAt()).format('LL LTS')}`}>
            <span>{humanDuration(task.startedAt(), task.finishedAt())}</span>
          </Tooltip>
        </td>
        <td className="Table-controls">
          <Button
            className="Button Button--icon Table-controls-item"
            icon="fas fa-file-alt"
            aria-label={app.translator.trans('flarum-package-manager.admin.sections.queue.columns.details')}
            // @todo fix in core
            // @ts-ignore
            onclick={() => app.modal.show(TaskOutputModal, { task })}
          />
        </td>
      </tr>
    );
  }
}
