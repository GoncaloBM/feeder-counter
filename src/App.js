import React, { useState, useEffect } from "react";
import { formatDate } from "./formatDate";
import "react-calendar/dist/Calendar.css";
import "./App.css";
import "./components/transitions.css";
import axios from "axios";
import { BottomNavbar } from "./components/bottomNavbar/BottomNavbar";
import { Home } from "./pages/Home";
import { PastFeeds } from "./pages/PastFeeds";
import { Info } from "./pages/Info";
import { CSSTransition } from "react-transition-group";
import { Navbar } from "./components/navbar/Navbar";
import { url } from "./url";

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
  const [infoPage, setInfoPage] = useState(false);
  const [settingsPage, setSetingsPage] = useState(false);
  const [insertManual, setInsertManual] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [feedScreenVisible, setFeedVisibleScreen] = useState(false);

  // const formatDat = () => {
  //   setDateFormated(formatDate(value));
  //   console.log("yay");
  // };

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

  const pageChange = (pageChosen) => {
    if (pageChosen === "Today") {
      onChange(new Date());
      setPage("home");
      setHomePage(true);
      setPastFeedPage(false);
      setInfoPage(false);
      setSetingsPage(false);
    } else if (pageChosen === "Info") {
      setPage("info");
      setHomePage(false);
      setPastFeedPage(false);
      setInfoPage(true);
      setSetingsPage(false);
    } else if (pageChosen === "Past Feeds") {
      setPage("pastFeeds");
      setHomePage(false);
      setPastFeedPage(true);
      setInfoPage(false);
      setSetingsPage(false);
    } else if (pageChosen === "Settings") {
      setPage("settings");
      setHomePage(false);
      setPastFeedPage(false);
      setInfoPage(false);
      setSetingsPage(true);
    }
  };

  const deleteFeed = (i) => {
    const deleteUrl = `${url.online}babyfeeder/feeders/${i}`;
    axios
      .delete(deleteUrl)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        fetchFeeders();
        setFeedVisibleScreen(false);
      });
  };

  const fetchFeeders = () => {
    setFetching(true);
    axios
      .get(url.getAndPostFeeder.online, {
        params: {
          year: formatDate(value)[0],
          month: formatDate(value)[1],
          day: formatDate(value)[2],
        },
      })
      .then((resp) => {
        console.log(resp.data);

        let feedsFromDb = resp.data;
        // feedsFromDb.sort((a, b) => a.hour - b.hour || a.minutes - b.minutes);
        setFeeds(feedsFromDb);
        setFetching(false);
      });
  };

  const postFeeders = (e) => {
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
      .post(url.getAndPostFeeder.online, feeds)
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

    // const sameHour =
    //   (currentHour.getHours() === currentFeed[lastFeedIndex].hour &&
    //     currentHour.getMinutes() > currentFeed[lastFeedIndex].minutes) ||
    //   (currentHour.getHours() === currentFeed[lastFeedIndex].hour &&
    //     currentHour.getMinutes() === currentFeed[lastFeedIndex].minutes) ||
    //   (currentHour.getHours() === currentFeed[lastFeedIndex].hour + 1 &&
    //     currentHour.getMinutes() < currentFeed[lastFeedIndex].minutes);

    // console.log(currentFeed[currentFeed.length-1].hour)
    // if (sameHour) {
    //   novaMamada(feeds[lastFeedIndex].id, 1);
    // } else {
    const newFeed = {
      year: currentHour.getFullYear(),
      month: currentHour.getMonth(),
      day: currentHour.getDate(),
      hour: currentHour.getHours(),
      minutes: currentHour.getMinutes(),
      mamadas: 1,
      breast: "",
      page: page,
    };

    axios
      .post(url.getAndPostFeeder.online, newFeed)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        fetchFeeders();
      });
    // }
    // setFeeds([...feeds, newFeed]);
    // }
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
      page: "past",
    };

    axios
      .post(url.getAndPostFeeder.online, newFeed)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        fetchFeeders();
        setInsertManual(false);
      });
  };

  const novaMamada = (i, numero) => {
    const mamadaUrl = `${url.online}babyfeeder/feeders/${i}/mamada`;

    axios
      .put(mamadaUrl, { numero: numero })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        fetchFeeders();
      });
  };

  const changeBreast = (i, breast) => {
    const mamadaUrl = `${url.online}babyfeeder/feeders/${i}/breast`;

    axios
      .put(mamadaUrl, { breast: breast })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        fetchFeeders();
      });
  };

  const changeComment = (i, comment) => {

    const commentUrl = `${url.online}babyfeeder/feeders/${i}/comments`;

    axios
      .put(commentUrl, { comments: comment })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        fetchFeeders();
      });
  };

  const onChangeTime = (time) => {
    setTime({ hours: time._d.getHours(), minutes: time._d.getMinutes() });
  };

  useEffect(() => {
    if (value && feeds) {
      feedsShowing();
    }

    fetchFeeders();
  }, [value]);

  return (
    <div className="App">
      <CSSTransition
        in={homePage}
        timeout={200}
        classNames="home-transition"
        unmountOnExit
      >
        <Home
          date={formatDate(value)}
          feeds={feeds}
          novaMamada={novaMamada}
          changeBreast={changeBreast}
          page={page}
          deleteFeed={deleteFeed}
          plusButton={plusButton}
          setFeedVisibleScreen={setFeedVisibleScreen}
          changeComment={changeComment}
        />
      </CSSTransition>
      <CSSTransition
        in={pastFeedPage}
        timeout={200}
        classNames="past-feed-transition"
        unmountOnExit
      >
        <PastFeeds
          date={formatDate(value)}
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
          plusButton={plusButton}
          setFeedVisibleScreen={setFeedVisibleScreen}
          changeComment={changeComment}
        />
      </CSSTransition>
      <CSSTransition
        in={infoPage}
        timeout={200}
        classNames="past-feed-transition"
        unmountOnExit
      >
        <Info feeds={feeds[feeds.length - 1]} infoPage={infoPage} />
      </CSSTransition>
      <Navbar
        pageChange={pageChange}
        postFeeders={postFeeders}
        feedsSent={feedsSent}
        setFeedsSent={setFeedsSent}
        page={page}
        plusButton={plusButton}
        feedScreenVisible={feedScreenVisible}
      />
      {/* <BottomNavbar
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
      /> */}
    </div>
  );
}

export default App;
