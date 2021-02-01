import cuid from "cuid";
import type { Info } from "./store";
import store from "./store";

const addInfo = (name: string, age: number): void => {
  const item: Info = {
    id: cuid(),
    name,
    age,
  };

  store.add(item);
};

const updateInfo = (info: Info): void => {
  store.update(info);
};

const removeInfo = (id: string): void => {
  store.remove(id);
};

export { addInfo, updateInfo, removeInfo };
