import React, { useState, useEffect } from "react";
import { formatDate } from "./formatDate";
import "react-calendar/dist/Calendar.css";
import "./App.css";
import "./components/transitions.css";
import axios from "axios";
import { BottomNavbar } from "./components/bottomNavbar/BottomNavbar";
import { Home } from "./pages/Home";
import { PastFeeds } from "./pages/PastFeeds";
import { CSSTransition } from "react-transition-group";

function App() {
  const [fetching, setFetching] = useState(true);
  const [value, onChange] = useState(new Date());
  const [dateFormated, setDateFormated] = useState("");
  const [feeds, setFeeds] = useState([]);
  const [feedsToShow, setFeedsToShow] = useState([]);
  const [feedsSent, setFeedsSent] = useState(false);
  const [time, setTime] = useState({});
  const [page, setPage] = useState("home");
  const [homePage, setHomePage] = useState(true);
  const [pastFeedPage, setPastFeedPage] = useState(false);
  const [insertManual, setInsertManual] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);

  const formatDat = () => {
    setDateFormated(formatDate(value));
  };

  const feedsShowing = () => {
    if (dateFormated && feeds) {
      let feedsByDay = [];
      const feedsArr = [...feeds];

      for (let i = 0; i < feeds.length; i++) {
        if (
          feedsArr[i].year === dateFormated[0] &&
          feedsArr[i].month + 1 === dateFormated[1] &&
          feedsArr[i].day === dateFormated[2]
        ) {
          feedsByDay = [...feedsByDay, feedsArr[i]];
        }
      }
      setFeedsToShow(feedsByDay);
    }
  };

  const changePage = () => {
    if (page === "home") {
      setPage("pastFeeds");
      setPastFeedPage(true);
      setHomePage(false);
    } else if (page === "pastFeeds") {
      onChange(new Date());
      setPage("home");
      setPastFeedPage(false);
      setHomePage(true);
    }
  };

  const deleteFeed = (i) => {
    let newFeeds = [...feeds];

    newFeeds.splice(i, 1);

    setFeeds(newFeeds);
  };

  const serverUrl = "http://localhost:3001/baby";
  const onlineUrl = "https://goncalobmira.online/baby";

  const fetchFeeders = () => {
    setFetching(true);
    axios.get(onlineUrl).then((resp) => {
      console.log(resp);

      let feedsFromDb = resp.data;
      // feedsFromDb.sort((a, b) => a.hour - b.hour || a.minutes - b.minutes);
      setFeeds(feedsFromDb);
      setFetching(false);
    });
  };

  const postFeeders = (e) => {
    e.preventDefault();

    let currentFeeds = feeds;
    currentFeeds.sort(
      (a, b) =>
        a.year - b.year ||
        a.month - b.month ||
        a.day - b.day ||
        a.hour - b.hour ||
        a.minutes - b.minutes
    );
    axios
      .post(onlineUrl, feeds)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        fetchFeeders();
        setFeedsSent(true);
      });
  };

  const plusCurrentFeed = () => {
    const currentHour = new Date();
    let currentFeed = feeds;
    const lastFeedIndex = currentFeed.length - 1;

    const sameHour =
      (currentHour.getHours() === currentFeed[lastFeedIndex].hour &&
        currentHour.getMinutes() > currentFeed[lastFeedIndex].minutes) ||
      (currentHour.getHours() === currentFeed[lastFeedIndex].hour &&
        currentHour.getMinutes() === currentFeed[lastFeedIndex].minutes) ||
      (currentHour.getHours() === currentFeed[lastFeedIndex].hour + 1 &&
        currentHour.getMinutes() < currentFeed[lastFeedIndex].minutes);

    // console.log(currentFeed[currentFeed.length-1].hour)
    if (sameHour) {
      novaMamada(lastFeedIndex, 1);
    } else {
      const newFeed = {
        year: currentHour.getFullYear(),
        month: currentHour.getMonth(),
        day: currentHour.getDate(),
        hour: currentHour.getHours(),
        minutes: currentHour.getMinutes(),
        mamadas: 1,
        breast: "",
      };

      setFeeds([...feeds, newFeed]);
    }
  };

  const plusButton = () => {
    if (page === "home") {
      plusCurrentFeed();
    } else if (page === "pastFeeds") {
      setInsertManual(!insertManual);
    }
  };

  const plusFeed = () => {
    const newFeed = {
      year: value.getFullYear(),
      month: value.getMonth(),
      day: value.getDate(),
      hour: time.hours,
      minutes: time.minutes,
      mamadas: 1,
      breast: "",
    };
    setInsertManual(false);
    setFeeds([...feeds, newFeed]);
  };

  const novaMamada = (i, numero) => {
    let newArr = [...feeds];

    if (newArr[i].mamadas + numero < 0) {
      return;
    } else {
      newArr[i].mamadas = newArr[i].mamadas + numero;

      console.log(newArr);
      setFeeds(newArr);
    }
  };

  const changeBreast = (i, breast) => {
    let newArr = [...feeds];

    newArr[i].breast = breast;

    setFeeds(newArr);
  };

  const onChangeTime = (time) => {
    setTime({ hours: time._d.getHours(), minutes: time._d.getMinutes() });
  };

  useEffect(() => {
    formatDat();
    if (value && feeds) {
      feedsShowing();
    }
    if (fetching) {
      fetchFeeders();
    }
  }, [value, fetching]);

  return (
    <div className="App">
      <CSSTransition
        in={homePage}
        timeout={300}
        classNames="home-transition"
        unmountOnExit
      >
        <Home
          dateFormated={dateFormated}
          feeds={feeds}
          novaMamada={novaMamada}
          changeBreast={changeBreast}
          page={page}
          deleteFeed={deleteFeed}
        />
      </CSSTransition>
      <CSSTransition
        in={pastFeedPage}
        timeout={300}
        classNames="past-feed-transition"
        unmountOnExit
      >
        <PastFeeds
          dateFormated={dateFormated}
          feeds={feeds}
          novaMamada={novaMamada}
          changeBreast={changeBreast}
          page={page}
          onChange={onChange}
          value={value}
          insertManual={insertManual}
          onChangeTime={onChangeTime}
          plusFeed={plusFeed}
          deleteFeed={deleteFeed}
          setInsertManual={setInsertManual}
          setHideNavbar={setHideNavbar}
        />
      </CSSTransition>

      <BottomNavbar
        onChangeTime={onChangeTime}
        plusFeed={plusFeed}
        value={value}
        postFeeders={postFeeders}
        plusCurrentFeed={plusCurrentFeed}
        feedsSent={feedsSent}
        setFeedsSent={setFeedsSent}
        changePage={changePage}
        plusButton={plusButton}
        page={page}
      />
    </div>
  );
}

export default App;
