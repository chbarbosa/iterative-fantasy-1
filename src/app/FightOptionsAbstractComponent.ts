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
  }
  useSword(event: Event) {
    event.preventDefault();
    localStorage.setItem(this.actionRef, "sword");
  }
  useBesta(event: Event) {
    event.preventDefault();
    localStorage.setItem(this.actionRef, "besta");
  }
  distract(event: Event) {
    event.preventDefault();
    localStorage.setItem(this.actionRef, "distract");
  }
  hasNoDecision(): any {
    return localStorage.getItem(this.actionRef) == undefined;
  }
}