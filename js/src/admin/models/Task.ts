import Model from 'flarum/common/Model';

export default class Task extends Model {
  status() {
    return Model.attribute<'pending'|'running'|'failure'|'success'>('status').call(this);
  }

  operation() {
    return Model.attribute<string>('operation').call(this);
  }

  command() {
    return Model.attribute<string>('command').call(this);
  }

  package() {
    return Model.attribute<string>('package').call(this);
  }

  output() {
    return Model.attribute<string>('output').call(this);
  }

  createdAt() {
    return Model.attribute('createdAt', Model.transformDate).call(this);
  }

  startedAt() {
    return Model.attribute('startedAt', Model.transformDate).call(this);
  }

  finishedAt() {
    return Model.attribute('finishedAt', Model.transformDate).call(this);
  }
}
