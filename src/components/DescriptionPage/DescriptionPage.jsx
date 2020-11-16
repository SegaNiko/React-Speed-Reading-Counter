import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTotalPages } from "../../store/actions";
import ROUTES from "../../consts/routes";

import Container from "../../shared/Container/Container";
import { descriptionText } from "./descriptonText";
import Text from "../../shared/Text/Text";
import Title from "../../shared/Title/Title";
import Button from "../../shared/Button/Button";
import { Link } from "react-router-dom";

const DescriptionPage = () => {
  const [pages, setPages] = useState("");
  const dispatch = useDispatch();

  //handler
  const handleChange = (e) => {
    if (/^[\d.,:]*$/.test(e.target.value)) {
      setPages(e.target.value);
      dispatch(setTotalPages({ bookPages: e.target.value }));
    }
  };

  return (
    <Container>
      <Title text="Description How to use" />
      <Text text={descriptionText}>
        {" "}
        // TODO rewrite component add children {descriptionText}
      </Text>
      <input className="input" onChange={handleChange} value={pages}></input>
      <Link to={ROUTES.READING_PAGE}>
        <Button text="START" />
      </Link>
    </Container>
  );
};

export default DescriptionPage;
