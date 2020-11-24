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
import { FeedsContextProvider } from "./contexts/FeedsContext";
import { PageContext } from "./contexts/PageContext";
import { SettingsContext } from "./contexts/SettingsContext";

function App() {
  const [value, onChange] = useState(new Date());
  const [page, setPage] = useState("home");
  const [pages, setPages] = useContext(PageContext);
  const [settings] = useContext(SettingsContext);

  const pageChange = (chosen) => {
    const currentPage = { ...pages };
    for (let prop in currentPage) {
      if (chosen === prop) {
        currentPage[`${prop}`] = true;
      } else {
        currentPage[`${prop}`] = false;
      }
    }
    if (chosen === "login" || chosen === "app" || chosen === "baby") {
      currentPage["settings"] = true;
    }
    onChange(new Date());
    setPage(chosen);
    setPages(currentPage);
  };

  useEffect(() => {
    if (!settings.user.loggedIn) {
      pageChange("login");
    }
  }, [value]);

  return (
    <FeedsContextProvider>
      <div className="App">
        <CSSTransition
          in={pages.home}
          timeout={200}
          classNames="home-transition"
          unmountOnExit
        >
          <Home date={formatDate(value)} page={page} />
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
          <Settings pageChange={pageChange} pages={pages} settings={settings} />
        </CSSTransition>

        <Navbar
          pageChange={pageChange}
          page={page}
          language={settings.about.language}
        />
      </div>
    </FeedsContextProvider>
  );
}

export default App;
