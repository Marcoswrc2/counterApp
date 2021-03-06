import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Box} from './styles';
import {useTheme} from 'styled-components';
import {TextBold, TextSemiBold} from '../../styles/components';

const CounterBox = ({
  value = 0,
  selected = false,
  index = 1,
  onPress = () => {},
  id,
}) => {
  return (
    <Box selected={selected} onPress={onPress}>
      <View
        style={{
          height: '30%',
          width: '100%',
          justifyContent: 'center',
          padding: 8,
        }}>
        <TextBold fontSize={20} style={{color: selected ? 'black' : '#BEBEBE'}}>
          Counter {id}
        </TextBold>
      </View>
      <View
        style={{
          height: '70%',
          width: '100%',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          padding: 15,
        }}>
        <TextBold fontSize={70} style={{color: selected ? 'black' : '#BEBEBE'}}>
          {value}
        </TextBold>
      </View>
    </Box>
  );
};

export default CounterBox;
