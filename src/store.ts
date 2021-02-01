import { BehaviorSubject } from "rxjs";

export interface Info {
  id: string;
  name: string;
  age: number;
}

class Store {
  private infos: Info[] = [];
  private bs$ = new BehaviorSubject<Info[]>([]);

  get valuesChange() {
    return this.bs$;
  }

  add(info: Info): void {
    this.infos.push(info);
    this.bs$.next(this.infos);
  }

  get values(): Info[] {
    return this.infos;
  }

  set(infos: Info[]): void {
    this.infos = infos;
    this.bs$.next(this.infos);
  }

  update(info: Info): void {
    this.infos = this.infos.map((item) => {
      if (item.id === info.id) {
        return info;
      } else {
        return item;
      }
    });

    this.bs$.next(this.infos);
  }

  remove(id: string) {
    this.infos = this.infos.filter((item) => id !== item.id);
    this.bs$.next(this.infos);
  }
}

const store = new Store();
export default store;
