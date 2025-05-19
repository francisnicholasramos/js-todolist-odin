import Todo from "./todo";
import Project from "./Project";

const STORAGE_KEY = 'projects';

export function storeToLocalStorage() {
  localStorage.setItem(STORAGE_KEY)
}
