import React, { useState } from "react";
import { Autocomplete } from "../components";
import styles from './index.module.css';

export default () => {
  const [fromLocation, setFromLocation] = useState(null);
  const [toLocation, setToLocation] = useState(null);

  const onChangeFromLocation = (_, option) => setFromLocation(option);
  const onChangeToLocation = (_, option) => setToLocation(option);

  return (
    <div className={styles.search} >
      <div className={styles.autocomplete}>
        <Autocomplete
          value={fromLocation}
          onChange={onChangeFromLocation}
          label="Откуда"
          placeholder="Москва"
        />
      </div>
      <div className={styles.autocomplete}>
        <Autocomplete
          value={toLocation}
          onChange={onChangeToLocation}
          label="Куда"
          placeholder="Санкт-Петербург"
        />
      </div>
    </div>
  );
};
