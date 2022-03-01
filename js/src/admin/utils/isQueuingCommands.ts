import app from 'flarum/admin/app';

/*
 * Initially, response status code was supposed to be checked for a 202
 * in order to determine if a command was pushed to the queue,
 * but since reading status code from the response is more tedious than it seems,
 * we'll stick to just checking settings, assuming *all* commands are queued or none.
 */
export default function isQueuingCommands(): boolean {
  return Boolean(app.data.settings['flarum-package-manager.queue_jobs']) && Boolean(app.data['flarum-package-manager.using_sync_queue']);
}
