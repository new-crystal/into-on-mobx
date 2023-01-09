import { observable, runInAction } from "mobx";
import axios from "axios";

const listStore = observable({
  todoList: [],
  add(todo) {
    this.todoList = [...this.todoList, todo];
  },
  remove(id) {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
  },
  async getList() {
    const res = await axios.get("http://localhost:3001/posts");

    runInAction(() => {
      this.todoList = res.data;
    });
  },
  async postList(todo) {
    const res = await axios.post("http://localhost:3001/posts", todo);
    runInAction(() => {
      this.todoList = [...this.todoList, res.data];
    });
  },
});

export default listStore;
