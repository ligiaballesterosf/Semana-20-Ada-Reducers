import React, { useState, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case "changeUser":
      return { ...state, user: action.payload };
    case "changeName":
      return { ...state, name: action.payload };
    case "changeEmail":
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [user, setUser] = useState("ligiaebf");
  const [name, setName] = useState("Ligia");
  const [email, setEmail] = useState("ligia@correo.com");
  const [state, dispatch] = useReducer(reducer, { user, name, email });

  const changeUser = () => dispatch({ type: "changeUser", payload: user });
  const changeName = () => dispatch({ type: "changeName", payload: name });
  const changeEmail = () => dispatch({ type: "changeEmail", payload: email });

  return (
    <div>
      <div>User: {state.user}</div>
      <input type="text" onChange={e => setUser(e.target.value)} />
      <button onClick={changeUser}>Change User</button>

      <div>Name: {state.name}</div>
      <input type="text" onChange={e => setName(e.target.value)} />
      <button onClick={changeName}>Change Name</button>

      <div>Email: {state.email}</div>
      <input type="text" onChange={e => setEmail(e.target.value)} />
      <button onClick={changeEmail}>Change Email</button>



    </div>
  );

}

export default Reducer;
