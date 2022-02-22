import Component, {ComponentAttrs} from 'flarum/common/Component';
import classList from "flarum/common/utils/classList";

interface StatusLabelAttrs extends ComponentAttrs {
  type: 'success'|'failure'|'running'|'pending';
  label: string;
}

export default class StatusLabel extends Component<StatusLabelAttrs> {
  view() {
    return (
      <span className={classList([
        'StatusLabel', `StatusLabel--${this.attrs.type}`
      ])}>
        {this.attrs.label}
      </span>
    );
  }
}
