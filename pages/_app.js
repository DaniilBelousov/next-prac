import { Wrapper } from '../components';
import '../lib/style/global.css';

export default ({ Component, pageProps }) => {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  )
}
