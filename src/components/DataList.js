import React, { useEffect, useReducer } from "react";
import { bindActionCreators } from "redux";
const inititalState = [];
const reducer = (state, action) => {
  if (action.type === "dispatch") {
    console.log("running");
    return {
      ...state,
      data: action.data,
    };
  }
};

const DataList = () => {
  const [state, dispatch] = useReducer(reducer, inititalState);
  useEffect(() => {
    const helper = async function () {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      dispatch({ type: "dispatch", data: data });
    };
    helper();
  }, []);
  //   console.log(state.data);
  const deleteHandler = (id) => {
    const newData = state.data.filter((item) => item.id !== id);
    dispatch({ type: "dispatch", data: newData });
  };

  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Body</th>
        <th>Title</th>
        <th></th>
      </tr>
      {state?.data?.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.body}</td>
          <td>
            <button onClick={deleteHandler.bind(null, item.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default DataList;
