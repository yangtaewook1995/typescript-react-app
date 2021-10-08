import { count } from "console";
import React, { Component } from "react";
import Number from "./Number";
import { Form, Input } from "./Input";

interface IState {
  counter: number;
  name: string;
}

class App extends Component<{}, IState> {
  state = {
    counter: 0,
    name: "",
  };

  add = () => {
    this.setState((prev) => {
      return { counter: prev.counter + 1 };
    });
  };

  onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    console.log(event.target);
  };

  render() {
    const { counter, name } = this.state;
    return (
      <div>
        <Form>
          <Input value={name} onChange={this.onChange}></Input>
        </Form>
        <Number count={counter}></Number>
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

export default App;
