import { Header } from '~/components/common/Header';
import { Main } from '~/components/home/Main';
import { Footer } from '~/components/common/Footer';
import styles from '~/styles/home.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
