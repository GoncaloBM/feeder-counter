import React, { useState, useEffect } from "react";
import { formatDate } from "./formatDate";
import "react-calendar/dist/Calendar.css";
import "./App.css";
import "./components/transitions.css";
import axios from "axios";
import { Home } from "./pages/Home";
import { PastFeeds } from "./pages/PastFeeds";
import { Info } from "./pages/Info";
import { CSSTransition } from "react-transition-group";
import { Navbar } from "./components/navbar/Navbar";
import { url } from "./url";
import { Settings } from "./pages/Settings";
import { text } from "./components/texts";
import SettingsContext from "./SettingContext";

function App() {
  const [fetching, setFetching] = useState(true);
  const [value, onChange] = useState(new Date());
  const [feeds, setFeeds] = useState([]);
  const [time, setTime] = useState({});
  const [page, setPage] = useState("home");
  const [pages, setPages] = useState({
    home: true,
    pastFeed: false,
    info: false,
    settings: false,
    login: false,
    baby: false,
    app: false,
  });
  const [insertManual, setInsertManual] = useState(false);
  const [feedScreenVisible, setFeedVisibleScreen] = useState(false);
  const [settings, setSettings] = useState({
    about: { language: "English" },
    myBaby: {
      vitamin: {
        warning: true,
        vitaminHour: 20,
        vitaminMinute: 0,
        onInfo: false,
      },
      breastFeeding: {
        nextBreastHour: 3,
        nextBreastMinute: 0,
        numberPerDay: 8,
        sameBreastHour: 1,
      },
    },
    user: { loggedIn: false, username: "" },
  });

  const fetchFeeders = () => {
    setFetching(true);
    axios
      .get(url.getAndPostFeeder.online, {
        params: {
          year: formatDate(value)[0],
          month: formatDate(value)[1],
          day: formatDate(value)[2],
          username: settings.user.username,
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

  const plusButton = () => {
    if (page === "home") {
      plusCurrentFeed();
    } else if (page === "pastFeeds") {
      setInsertManual(!insertManual);
    }
  };

  const newFeed = () => {
    const currentHour = new Date();
    const newFeed = {
      year: currentHour.getFullYear(),
      month: currentHour.getMonth(),
      day: currentHour.getDate(),
      hour: currentHour.getHours(),
      minutes: currentHour.getMinutes(),
      mamadas: 1,
      breast: "",
      page: page,
      username: settings.user.username,
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
  };

  const plusCurrentFeed = () => {
    const currentHour = new Date();
    let currentFeed = feeds;
    const lastFeedIndex = currentFeed.length - 1;

    if (currentFeed.length > 0) {
      const sameHour =
        (currentHour.getHours() === currentFeed[lastFeedIndex].hour &&
          currentHour.getMinutes() > currentFeed[lastFeedIndex].minutes) ||
        (currentHour.getHours() === currentFeed[lastFeedIndex].hour &&
          currentHour.getMinutes() === currentFeed[lastFeedIndex].minutes) ||
        (currentHour.getHours() ===
          currentFeed[lastFeedIndex].hour +
            settings.myBaby.breastFeeding.sameBreastHour &&
          currentHour.getMinutes() < currentFeed[lastFeedIndex].minutes);

      // console.log(currentFeed[currentFeed.length-1].hour)
      if (sameHour) {
        // novaMamada(feeds[lastFeedIndex].id, 1);
        newFeed();
      } else {
        newFeed();
      }
    } else {
      newFeed();
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
      username: settings.user.username,
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

  const pageChange = (pageChosen) => {
    if (pageChosen === text.navbar.today[`${settings.about.language}`]) {
      onChange(new Date());
      setPage("home");
      setPages({
        ...pages,
        home: true,
        pastFeed: false,
        info: false,
        settings: false,
        login: false,
        baby: false,
        app: false,
      });
    } else if (pageChosen === text.navbar.info[`${settings.about.language}`]) {
      setPage("info");
      setPages({
        ...pages,
        home: false,
        pastFeed: false,
        info: true,
        settings: false,
        login: false,
        baby: false,
        app: false,
      });
    } else if (pageChosen === text.navbar.past[`${settings.about.language}`]) {
      setPage("pastFeeds");
      setPages({
        ...pages,
        home: false,
        pastFeed: true,
        info: false,
        settings: false,
        login: false,
        baby: false,
        app: false,
      });
    } else if (
      pageChosen === text.navbar.settings[`${settings.about.language}`] ||
      pageChosen === text.navbar.login[`${settings.about.language}`]
    ) {
      setPage("settings");
      setPages({
        ...pages,
        home: false,
        pastFeed: false,
        info: false,
        settings: true,
        login: true,
        baby: false,
        app: false,
      });
    } else if (
      pageChosen === text.navbar.myBaby[`${settings.about.language}`]
    ) {
      setPage("baby");
      setPages({
        ...pages,
        home: false,
        pastFeed: false,
        info: false,
        settings: true,
        login: false,
        baby: true,
        app: false,
      });
    } else if (pageChosen === text.navbar.about[`${settings.about.language}`]) {
      setPage("app");
      setPages({
        ...pages,
        home: false,
        pastFeed: false,
        info: false,
        settings: true,
        login: false,
        baby: false,
        app: true,
      });
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
    // const { loggedIn } = settings.user;
    if (settings.user.loggedIn) {
      fetchFeeders();
    } else {
      pageChange(text.navbar.settings[`${settings.about.language}`]);
    }
  }, [value]);

  return (
    <SettingsContext.Provider value={{ settings: [settings, setSettings] }}>
      <div className="App">
        <CSSTransition
          in={pages.home}
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
            setTime={setTime}
            deleteFeed={deleteFeed}
            plusButton={plusButton}
            setFeedVisibleScreen={setFeedVisibleScreen}
            changeComment={changeComment}
          />
        </CSSTransition>
        <CSSTransition
          in={pages.pastFeed}
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
            time={time}
            setTime={setTime}
            onChangeTime={onChangeTime}
            plusFeed={plusFeed}
            deleteFeed={deleteFeed}
            setInsertManual={setInsertManual}
            plusButton={plusButton}
            setFeedVisibleScreen={setFeedVisibleScreen}
            changeComment={changeComment}
          />
        </CSSTransition>
        <CSSTransition
          in={pages.info}
          timeout={200}
          classNames="past-feed-transition"
          unmountOnExit
        >
          <Info feeds={feeds[feeds.length - 1]} infoPage={pages.info} />
        </CSSTransition>

        <CSSTransition
          in={pages.settings}
          timeout={200}
          classNames="past-feed-transition"
          unmountOnExit
        >
          <Settings pageChange={pageChange} pages={pages} settings={settings} />
        </CSSTransition>

        <Navbar
          pageChange={pageChange}
          page={page}
          plusButton={plusButton}
          feedScreenVisible={feedScreenVisible}
          language={settings.about.language}
        />
      </div>
    </SettingsContext.Provider>
  );
}

export default App;
