import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import store from "../../store/store";
import AppRoutes from "../../router/AppRouter";
import "./App.scss";
import NavBar from "../NavBar/NavBar";
import Modal from "../../components/Modal/Modal";
const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <Provider store={store}>
      <Router>
        <header>
          <NavBar />
        </header>
        <AppRoutes />
        <Modal modal={isModalVisible} setModal={setModalVisible} />
      </Router>
    </Provider>
  );
};

export default App;
