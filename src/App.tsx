import React from "react";
import "./styles/index.scss";
import Hello from "./components/Hello";
import Menu from "./components/menu/menu";
import MenuItem from "./components/menu/menuItem";
import SubMenu from "./components/menu/subMenu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello message="nihao" />
        <Menu mode="vertical">
          <MenuItem>cool link</MenuItem>
          <MenuItem disabled>cool link 2</MenuItem>
          <MenuItem>cool link 3</MenuItem>
          <SubMenu title="test">
            <MenuItem>cool link 22</MenuItem>
            <MenuItem>cool link 33</MenuItem>
            <SubMenu title="test111">
              <MenuItem>cool link 22</MenuItem>
              <MenuItem>cool link 33</MenuItem>
            </SubMenu>
          </SubMenu>
        </Menu>
      </header>
    </div>
  );
}

export default App;
