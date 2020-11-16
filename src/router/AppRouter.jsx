import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ROUTES from "../consts/routes";

import HomePage from "../components/Home/HomePage";
import NotFound from "../components/NotFound/NotFound";
import DescriptionPage from "../components/DescriptionPage/DescriptionPage";
import ReadingPage from "../components/ReadingPage/ReadingPage";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.ROOT}>
        <HomePage />
      </Route>
      <Route exact path={ROUTES.READING_COUNTER}>
        <DescriptionPage />
      </Route>
      <Route exact path={ROUTES.READING_PAGE}>
        <ReadingPage />
      </Route>
      <Route exact path={ROUTES.NOT_FOUND}>
        <NotFound />
      </Route>
      <Route exact path="*">
        <Redirect to={ROUTES.NOT_FOUND}></Redirect>
      </Route>
    </Switch>
  );
};

export default AppRouter;
