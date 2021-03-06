import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

export const ButtonReset = styled.TouchableOpacity`
  background-color: orange;
  height: 40px;
  width: 25%;
  flex-direction: row;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const BoxEmpty = styled.View`
  background-color: white;
  justify-content: center;
  align-items: center;
  padding-horizontal: 100px;
  padding-vertical: 50px;
  margin-vertical: 10px;
  border-radius: 4px;
`;
