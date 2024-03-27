import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, Text } from 'react-native';
import { DropDownContainer } from '../CalendarComponent/style';

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const placeholder = {
    label: 'Selecionar horário',
    value: null,
  };

  const options = [
    { label: '13:15 PM', value: 'option1' },
    { label: '17:45 PM', value: 'option2' },
    { label: '7:50 AM', value: 'option3' },
  ];

  return (
    <View>
      <Text>Selecione um horário disponível:</Text>
      <DropDownContainer>
        <RNPickerSelect
          placeholder={placeholder}
          items={options}
          onValueChange={(value) => setSelectedValue(value)}
          value={selectedValue}
          useNativeAndroidPickerStyle={false}
        />
      </DropDownContainer>

    </View>
  );
};

export default Dropdown;