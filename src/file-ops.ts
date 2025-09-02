import { readFileSync, writeFileSync } from "fs";  //FS = Modulo interno de node
import { Task } from "src/types";
const tasksFile = "db/tasks.json";

export function readTasks(): Array<Task> {
  const data = readFileSync(tasksFile, "utf-8");

  const tasks = JSON.parse(data) as Array<Task>; //El tipado de arrays puede escribirse tambien como : Task[] en este caso

  return tasks;
}

export function writeTasks(tasks: Array<Task>): void {
  const tasksJson = JSON.stringify(tasks, null, 2);

  writeFileSync(tasksFile, tasksJson);
}



//Este seria el funcionamiento de estas funciones 
/*
const tareas = readTasks();      // obtenemos las tareas
tareas.push({ name: "Nueva", description: "Prueba" }); // modificamos el array
writeTasks(tareas);             // pasamos el array modificado a writeTasks
*/
