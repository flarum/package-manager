import app from 'flarum/admin/app';

export default function jumpToQueue(): void {
  app.packageManagerQueue.load();
  document.getElementById('PackageManager-queueSection')?.scrollIntoView({ block: 'nearest' });
}
