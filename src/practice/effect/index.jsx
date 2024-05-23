import { useEffect, useState } from "react";

const Effect = () => {
  const styles = {
    textAlign: "center",
  };

  const [data, setData] = useState();

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

  //   ex 3 - useEffect

  return (
    <div style={styles}>
      <h1>useEffect</h1>

      {/* exercise 1 - Fetch Data on Mount */}
      <div>
        <h3>Exercise 1</h3>
        {useEffect(() => {
          fetch(`https://jsonplaceholder.typicode.com/posts/1`)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setData(data);
            });
        }, [])}

        {data && (
          <>
            <h3>{data.id}</h3>
            <p>{data.title}</p>
          </>
        )}
      </div>

      {/* exercise 2 - Cleanup with Event Listeners */}
      <div>
        <h3>Exercise 2</h3>
        <p>Width of window: {size.width}</p>
        <p>Height of window: {size.height}</p>
      </div>

      {/* exercise 3 - Conditional Effect */}
      <div>
        <h3>Exercise 3</h3>
      </div>
    </div>
  );
};

export default Effect;
