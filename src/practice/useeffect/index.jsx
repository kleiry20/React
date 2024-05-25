import { useEffect, useState } from "react";

const Effect = () => {
  const styles = {
    textAlign: "center",
  };

  const [apiData, setApiData] = useState();
  const [loading, setLoading] = useState(true);

  const [timerCount, setTimerCount] = useState(0);
  const [userData, setUserData] = useState(null);
  const [data, setData] = useState();

  //  exercise 1
  //   useEffect(() => {
  //     fetch(`https://jsonplaceholder.typicode.com/posts/1`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  //   exercise 2 - useEffect
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    //  cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={styles}>
      <h1>useEffect</h1>

      {/* exercise 1 - Fetch Data on Mount */}
      {/* <div>
        <h3>Exercise 1</h3>
        {data && (
          <>
            <h3>{data.id}</h3>
            <p>{data.title}</p>
          </>
        )}
      </div> */}

      {/* exercise 2 - Cleanup with Event Listeners */}
      {/* <div>
        <h3>Exercise 2</h3>
        <p>Width of window: {size.width}</p>
        <p>Height of window: {size.height}</p>
      </div> */}

      {/* exercise 3 - Conditional Effect */}
      {/* <UserData userId={9} userData={userData} setUserData={setUserData} /> */}

      {/* exercise 4 - Interval with Cleanup */}
      <Timer timerCount={timerCount} setTimerCount={setTimerCount} />

      {/* exercise 5 - Fetch Data with Cleanup */}
      <FetchApiData
        setApiData={setApiData}
        apiData={apiData}
        setLoading={setLoading}
      />
    </div>
  );
};

export default Effect;

const UserData = (props) => {
  const { userId, userData, setUserData } = props;

  //   ex 3 - useEffect
  useEffect(() => {
    if (userId) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
          console.log(userData);
        });
    }
  }, [userId]);

  return (
    <div>
      <h3>Exercise 3</h3>
      {userData && (
        <>
          <h3>user id: {userData.id}</h3>
          <p>
            <strong>user title:</strong> {userData.title}
          </p>
        </>
      )}
    </div>
  );
};

const Timer = (props) => {
  const { timerCount, setTimerCount } = props;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimerCount((prevCount) => prevCount + 1);
    }, 1000);

    // cleanup function when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <h2>your timer app count: {timerCount}</h2>
    </>
  );
};

const FetchApiData = (props) => {
  const { setApiData, apiData, setLoading, loading } = props;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`https://jsonplaceholder.typicode.com/posts/1`, { signal })
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
        setLoading(false);
        console.log("signal", signal);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
        }
      });

    // Cleanup function to abort fetch on unmount
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <>
      {loading ? "Loading..." : <pre>{JSON.stringify(apiData, null, 2)}</pre>}
    </>
  );
};
