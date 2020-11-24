import React, { useState, createContext } from "react";

export const SettingsContext = createContext(null);

export const SettingsContextProvider = (props) => {
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

  return (
    <SettingsContext.Provider value={[settings, setSettings]}>
      {props.children}
    </SettingsContext.Provider>
  );
};
