
declare var gtag: Function;

export abstract class FightOptionsAbstractComponent {
  private readonly actionRef: string;
  constructor(name: string) {
    this.actionRef = name;
  }
  hasRun(): any {
    return localStorage.getItem(this.actionRef) === "run";
  }
  hasUsedSword(): any {
    return localStorage.getItem(this.actionRef) === "sword";
  }
  hasUsedBesta(): any {
    return localStorage.getItem(this.actionRef) === "besta";
  }
  hasDistracted(): any {
    return localStorage.getItem(this.actionRef) === "distract";
  }
  run(event: Event) {
    event.preventDefault();
    localStorage.setItem(this.actionRef, "run");
    gtag('event', 'TRACK_ME_BUTTON_CLICKED', {
    'event_category': 'BUTTON_CLICK',
    'event_label': 'Track Me Click',
    'value': 'run at ' + this.actionRef});
  }
  useSword(event: Event) {
    event.preventDefault();
    localStorage.setItem(this.actionRef, "sword");
    gtag('event', 'TRACK_ME_BUTTON_CLICKED', {
    'event_category': 'BUTTON_CLICK',
    'event_label': 'Track Me Click',
    'value': 'sword at ' + this.actionRef});
  }
  useBesta(event: Event) {
    event.preventDefault();
    localStorage.setItem(this.actionRef, "besta");
    gtag('event', 'TRACK_ME_BUTTON_CLICKED', {
    'event_category': 'BUTTON_CLICK',
    'event_label': 'Track Me Click',
    'value': 'besta at ' + this.actionRef});
  }
  distract(event: Event) {
    event.preventDefault();
    localStorage.setItem(this.actionRef, "distract");
    gtag('event', 'TRACK_ME_BUTTON_CLICKED', {
    'event_category': 'BUTTON_CLICK',
    'event_label': 'Track Me Click',
    'value': 'distract at ' + this.actionRef});
  }
  hasNoDecision(): any {
    return localStorage.getItem(this.actionRef) == undefined;
  }
}