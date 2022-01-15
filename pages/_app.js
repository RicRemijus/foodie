
import  '../styles/globals.css'
import Layout from '../components/Layout';
import store from '../redux/store';
import { Provider } from 'react-redux';

const contentStyle={
  flex : 1,
  display: 'flex',
  flexDirection : 'column',
};

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <Layout>
      
      <Component {...pageProps} />
    
      </Layout>
    </Provider>
  )
}

export default MyApp;
