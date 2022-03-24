import { makeAutoObservable } from "mobx";

export class MaintenanceItemStore {
  constructor() {
    makeAutoObservable(this);
  }
}
