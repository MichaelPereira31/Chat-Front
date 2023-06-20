import { Container } from './styles';
import { Title } from '../Title';


export function Video() {
  return (
    <Container>
      <Title title="Video"/>
      <video src='http://localhost:4444/video' controls></video>
    </Container>
  );
}
