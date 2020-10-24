import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import "./About.css";
import { text } from "../../components/texts";
import SettingsContext from "../../SettingContext";

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
  const { settings } = useContext(SettingsContext);
  const [stateSettings, setStateSettings] = settings;
  const classes = useStyles();

  const handleChange = (e) => {
    setStateSettings((prevState) => ({
      ...prevState,
      about: { ...prevState.about, language: e.target.value },
    }));
  };

  return (
    <div className="about-screen">
      <div className="about-title">
        {text.about.about[`${stateSettings.about.language}`]}
      </div>
      <div className="select">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">
            {text.about.language[`${stateSettings.about.language}`]}
          </InputLabel>
          <Select
            native
            value={stateSettings.about.language}
            onChange={handleChange}
            inputProps={{
              name: "age",
              id: "age-native-simple",
            }}
          >
            <option value={"English"}>
              {text.about.english[`${stateSettings.about.language}`]}
            </option>
            <option value={"Portuguese"}>
              {text.about.portuguese[`${stateSettings.about.language}`]}
            </option>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};
