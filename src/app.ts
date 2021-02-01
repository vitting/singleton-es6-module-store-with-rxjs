import * as infoActions from "./info_actions";
import type { Info } from "./store";
import store from "./store";
const form: HTMLFormElement | null = document.querySelector("#form");
const nameEl: HTMLInputElement | null = document.querySelector("#name");
const ageEl: HTMLInputElement | null = document.querySelector("#age");
const listOfInfosEL = document.querySelector("ul");
form?.addEventListener("submit", handleSubmit);
listOfInfosEL?.addEventListener("click", handleClick);

store.valuesChange.subscribe((infos: Info[]) => {
  updateList(infos);
});

function handleClick(e: Event) {
  const el: HTMLLIElement = e.target as HTMLLIElement;
  infoActions.removeInfo(el.id);
}

function handleSubmit(e: Event) {
  e.preventDefault();
  const name = nameEl?.value;
  const age = ageEl?.value;
  if (nameEl && ageEl && name && age) {
    infoActions.addInfo(name, Number.parseInt(age));
    nameEl.value = "";
    ageEl.value = "";
  }
}

function updateList(infos: Info[]) {
  const listEL = document.querySelector("ul");

  if (infos.length) {
    const liElements = infos.map((item) => {
      const liEl = document.createElement("li");
      liEl.innerText = `${item.name} - ${item.age}`;
      const id = document.createAttribute("id");
      id.value = item.id;
      liEl.attributes.setNamedItem(id);
      const title = document.createAttribute("title");
      title.value = "Click to remove";
      liEl.attributes.setNamedItem(title);
      return liEl;
    });

    if (listEL) {
      listEL.innerHTML = "";
      for (const item of liElements) {
        listEL.appendChild(item);
      }
    }
  } else {
    if (listEL) {
      listEL.innerHTML = "";
      const liEl = document.createElement("li");
      liEl.innerText = "No list items";
      liEl.classList.add("no-cursor");
      listEL.appendChild(liEl);
    }
  }
}

export {};
