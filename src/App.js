import React, { useState, useEffect, useContext } from "react";
import { formatDate } from "./formatDate";
import "react-calendar/dist/Calendar.css";
import "./App.css";
import "./components/transitions.css";
import { Home } from "./pages/Home";
import { PastFeeds } from "./pages/PastFeeds";
import { Info } from "./pages/Info";
import { CSSTransition } from "react-transition-group";
import { Navbar } from "./components/navbar/Navbar";
import { Settings } from "./pages/Settings";
import { text } from "./components/texts";
import SettingsContext from "./SettingContext";
import { FeedsContextProvider } from "./contexts/FeedsContext";
import { PageContext } from "./contexts/PageContext";

function App() {
  const [value, onChange] = useState(new Date());
  const [time, setTime] = useState({});
  const [page, setPage] = useState("home");
  const [pages, setPages] = useContext(PageContext);
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

  const onChangeTime = (time) => {
    setTime({ hours: time._d.getHours(), minutes: time._d.getMinutes() });
  };

  useEffect(() => {
    //  const { loggedIn } = settings.user;
    if (!settings.user.loggedIn) {
      //fetchFeeders();
      pageChange(text.navbar.settings[`${settings.about.language}`]);
    }
  }, [value]);

  return (
    <FeedsContextProvider>
      <SettingsContext.Provider value={{ settings: [settings, setSettings] }}>
        <div className="App">
          <CSSTransition
            in={pages.home}
            timeout={200}
            classNames="home-transition"
            unmountOnExit
          >
            <Home date={formatDate(value)} page={page} setTime={setTime} />
          </CSSTransition>
          <CSSTransition
            in={pages.pastFeed}
            timeout={200}
            classNames="past-feed-transition"
            unmountOnExit
          >
            <PastFeeds
              date={formatDate(value)}
              page={page}
              onChange={onChange}
              value={value}
              onChangeTime={onChangeTime}
            />
          </CSSTransition>
          <CSSTransition
            in={pages.info}
            timeout={200}
            classNames="past-feed-transition"
            unmountOnExit
          >
            <Info infoPage={pages.info} />
          </CSSTransition>

          <CSSTransition
            in={pages.settings}
            timeout={200}
            classNames="past-feed-transition"
            unmountOnExit
          >
            <Settings
              pageChange={pageChange}
              pages={pages}
              settings={settings}
            />
          </CSSTransition>

          <Navbar
            pageChange={pageChange}
            page={page}
            language={settings.about.language}
          />
        </div>
      </SettingsContext.Provider>
    </FeedsContextProvider>
  );
}

export default App;
