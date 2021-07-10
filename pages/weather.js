import Head from "next/head";
import { useState } from "react";
import Header from "./components/Header";
import styles from "../styles/Home.module.scss";

import { connect } from "react-redux";
import { setInfo } from "../redux/actions/main";

function Weather(props) {
  const { userInfo, setInfo } = props;
  const [name, setName] = useState(userInfo.name);

  return (
    <div className="xcontainer">
      <Head>
        <title>The Weather</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <h1 className={styles.title}>Today is looking good {userInfo.name}</h1>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => setInfo(name)}>Submit</button>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userInfo: state.main,
});

const mapDispatchToProps = {
  setInfo: setInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
