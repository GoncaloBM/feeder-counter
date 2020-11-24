import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./About.css";
import { text } from "../../components/texts";
import { SettingsContext } from "../../contexts/SettingsContext";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const AboutScreen = () => {
  const [settings, setSettings] = useContext(SettingsContext);
  const classes = useStyles();

  const handleChange = (e) => {
    setSettings((prevState) => ({
      ...prevState,
      about: { ...prevState.about, language: e.target.value },
    }));
  };

  return (
    <div className="about-screen">
      <div className="about-title">
        {text.about.about[`${settings.about.language}`]}
      </div>
      <div className="select">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">
            {text.about.language[`${settings.about.language}`]}
          </InputLabel>
          <Select
            native
            value={settings.about.language}
            onChange={handleChange}
            inputProps={{
              name: "age",
              id: "age-native-simple",
            }}
          >
            <option value={"English"}>
              {text.about.english[`${settings.about.language}`]}
            </option>
            <option value={"Portuguese"}>
              {text.about.portuguese[`${settings.about.language}`]}
            </option>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};
