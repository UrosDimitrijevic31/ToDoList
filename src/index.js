import { Dashboard } from "./layout/dashboard";
import { getAllToDo, getToDo, addToDo, deleteToDo } from "./utilities/todo-service";

const app = document.querySelector('#app');
let dashboard = new Dashboard();
app.appendChild(dashboard.getNode());




