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
  run() {
    localStorage.setItem(this.actionRef, "run");
  }
  useSword() {
    localStorage.setItem(this.actionRef, "sword");
  }
  useBesta() {
    localStorage.setItem(this.actionRef, "besta");
  }
  distract() {
    localStorage.setItem(this.actionRef, "distract");
  }
  hasNoDecision(): any {
    return localStorage.getItem(this.actionRef) == undefined;
  }
}