import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { textReadingPage } from "./textReadingPage"; // TODO constants = textReadingPage
import { setHourToBook, setReadingSpeed } from "../../store/actions";
import ROUTES from "../../consts/routes";
import Button from "../../shared/Button/Button";
import Text from "../../shared/Text/Text";

const ReadingPage = () => {
  const dispatch = useDispatch();
  const { wordsPage, bookPages } = useSelector((state) => state);
  const [startDate, setStartDate] = useState(null);

  useEffect(() => {
    setStartDate(new Date());
  }, []);

  const calcReadingSpeed = () => {
    const time = calcReadingTime(startDate);

    if (time) {
      const readingSpeed = Math.floor(wordsPage / time);
      dispatch(setReadingSpeed({ readingSpeed }));
    }
  };

  const calcReadingHour = () => {
    const time = calcReadingTime(startDate);
    const hoursToReadBook = Math.floor((bookPages * time) / 60); // Hours
    dispatch(setHourToBook({ hoursToReadBook }));
  };

  const calcReadingTime = (start, end = new Date()) => {
    return start && end ? (end - start) / 60000 : 0; //ms => min
  };

  const finishReading = () => {
    calcReadingSpeed();
    calcReadingHour();
  };

  return (
    <div>
      <Text text={textReadingPage.p1}></Text>
      <Text text={textReadingPage.p2}></Text>
      <Link to={ROUTES.READING_COUNTER}>
        <Button text="STOP" onClick={finishReading} />
      </Link>
    </div>
  );
};

export default ReadingPage;
