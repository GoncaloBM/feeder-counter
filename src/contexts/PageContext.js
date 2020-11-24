import React, { useState, createContext } from "react";

export const PageContext = createContext(null);

export const PageContextProvider = (props) => {
  const [page, setPages] = useState({
    home: true,
    pastFeed: false,
    info: false,
    settings: false,
    login: false,
    baby: false,
    app: false,
  });

  return (
    <PageContext.Provider value={[page, setPages]}>
      {props.children}
    </PageContext.Provider>
  );
};
