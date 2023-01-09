import { useObserver } from "mobx-react";
import { useEffect, useRef, useState } from "react";
import Store from "./store";

const List = () => {
  const [id, setId] = useState(3);
  const { listStore } = Store();
  const inputRef = useRef(null);

  const onClickAddBtn = () => {
    if (inputRef.current.value === "") {
      return;
    }
    const data = {
      id: id,
      content: inputRef.current.value,
    };
    //listStore.add(data);
    listStore.postList(data);
    setId(id + 1);
    inputRef.current.value = "";
  };

  const onClickRemoveBtn = (id) => {
    listStore.remove(id);
  };

  useEffect(() => {
    listStore.getList();
  }, []);
  console.log(listStore.todoList);
  return useObserver(() => (
    <div>
      {listStore.todoList.map((todo, i) => {
        return (
          <div key={i}>
            <h1>{todo.content}</h1>{" "}
            <button onClick={() => onClickRemoveBtn(todo.id)}>-</button>
          </div>
        );
      })}

      <input ref={inputRef} />
      <button onClick={onClickAddBtn}>+</button>
    </div>
  ));
};

export default List;
