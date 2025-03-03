import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import styles from './styles';

const CustomDropdown = ({data, customStyle, placeholder}) => {

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  return (
      <Dropdown
          style={[styles.dropdown,customStyle]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={placeholder}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
  )
}

export default CustomDropdown