import app from 'flarum/admin/app';

export default function handleAsyncProcessing(xhr: XMLHttpRequest, refresh: () => Promise<any>): XMLHttpRequest {
  /**
   * The command is being processed asynchronously through the queue.
   * We refresh the queue table and scroll to it.
   */
  xhr.onloadend = function () {
    if (this.status === 202) {
      refresh().then(m.redraw);
      document.getElementById('PackageManager-queueSection')?.scrollIntoView({ block: 'nearest' });
      app.modal.close();
    }
  };

  return xhr;
}
