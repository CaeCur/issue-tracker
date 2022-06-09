import Layout from "../components/Layout";
import IssueContextProvider from "../contexts/IssueContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <IssueContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IssueContextProvider>
  );
}

export default MyApp;
