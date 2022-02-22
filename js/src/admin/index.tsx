import { extend } from 'flarum/common/extend';
import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import Button from 'flarum/common/components/Button';
import LoadingModal from 'flarum/admin/components/LoadingModal';
import isExtensionEnabled from 'flarum/admin/utils/isExtensionEnabled';
import SettingsPage from "./components/SettingsPage";

import Task from './models/Task';

app.initializers.add('flarum-package-manager', (app) => {
  app.store.models['package-manager-tasks'] = Task;

  app.extensionData
    .for('flarum-package-manager')
    .registerSetting({
      setting: 'flarum-package-manager.queue_jobs',
      label: app.translator.trans('flarum-package-manager.admin.settings.queue_jobs'),
      default: false,
      type: 'boolean',
    })
    .registerPage(SettingsPage);

  extend(ExtensionPage.prototype, 'topItems', function (items) {
    if (this.extension.id === 'flarum-package-manager' || isExtensionEnabled(this.extension.id)) {
      return;
    }

    items.add(
      'remove',
      <Button
        className="Button Button--danger"
        icon="fas fa-times"
        onclick={() => {
          app.modal.show(LoadingModal);

          app
            .request({
              url: `${app.forum.attribute('apiUrl')}/package-manager/extensions/${this.extension.id}`,
              method: 'DELETE',
            })
            .then(() => {
              app.alerts.show({ type: 'success' }, app.translator.trans('flarum-package-manager.admin.extensions.successful_remove'));
              window.location = app.forum.attribute('adminUrl');
            })
            .finally(() => {
              app.modal.close();
            });
        }}
      >
        Remove
      </Button>
    );
  });
});
