import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Autocomplete as AutocompleteMUI,
  TextField,
  styled
} from "@mui/material";
import styles from './Autocomplete.module.css';
import { darkCharcoal, cyanGreen } from "../../lib/style/colors";

const CustomTextField = styled(TextField)({
  '& .MuiInputLabel-root': {
    top: -7
  },
  '& label.Mui-focused': {
    top: 0,
    color: cyanGreen
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: cyanGreen
  },
  '& .MuiOutlinedInput-root': {
    padding: '2px 10px',
    borderRadius: 10,
    '& fieldset': {
      borderColor: darkCharcoal
    },
    '&:hover fieldset': {
      border: `2px solid ${cyanGreen}`
    },
    '&.Mui-focused fieldset': {
      borderColor: cyanGreen
    }
  }
});

const Autocomplete = (props) => {
  const [input, setInput] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen] = useState(false);
  const { label, placeholder } = props;
  useEffect(() => {
    if (input) {
      fetch(`api/suggestions?input=${input}`)
        .then((res) => res.json())
        .then(({ suggestions: nextSuggestions }) => setSuggestions(nextSuggestions))
        .catch((error) => console.log(error));
    }
  }, [input]);

  useEffect(() => {
    if (!open) {
      setSuggestions([]);
    }
  }, [open]);

  const onChangeText = (event) => setInput(event.target.value);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const renderInput = (params) => (
    <CustomTextField
      {...params}
      value={input}
      onChange={onChangeText}
      label={label}
      placeholder={placeholder}
    />
  );

  const renderOption = (params, option) => (
    <li {...params}>
      <div className={styles.suggestion}>
        <div className={styles.location}>{option.value}</div>
        <div className={styles.substring}>substr</div>
      </div>
    </li>
  );

  return (
    <AutocompleteMUI
      clearOnBlur
      freeSolo
      options={suggestions}
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      filterOptions={(options) => options}
      getOptionLabel={(option) => option.value}
      renderInput={renderInput}
      renderOption={renderOption}
      {...props}
    />
  );
};

Autocomplete.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string
};

export default Autocomplete;
