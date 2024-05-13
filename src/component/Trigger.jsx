import { useEffect, useState } from "react";

const Trigger = () => {
  const [response, setResponse] = useState(null);
  const action = (type, url, key, value) => {
    console.log(type, url, key, value);
    if (type === "GET") {
      fetch(`${url}?${key}=${value}`)
        .then((res) => res.json())
        .then((res) => setResponse(res));
    } else if (type === "POST") {
      fetch(`${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          key,
          value,
        }),
      })
        .then((res) => res.json())
        .then((res) => setResponse(res));
    }
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("trigger"));
    console.log(data);
    action(data.action.trim() || "GET", data.url, data.param1, data.param2);
  }, []);

  return <div>Trigger:- {response}</div>;
};

export default Trigger;
