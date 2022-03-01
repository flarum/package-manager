import QueueState from './states/QueueState';

declare module 'flarum/admin/AdminApplication' {
  export default interface AdminApplication {
    packageManagerQueue: QueueState;
  }
}
