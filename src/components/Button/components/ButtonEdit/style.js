import styled from 'styled-components';
import { Button } from '../..';

const Btn = styled(Button)`
  background-color: ${(props) => props.type || 'yellow'}
  border-radius: 0px;
`;

export default Btn;
