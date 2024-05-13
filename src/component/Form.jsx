import { useState, useEffect } from "react";
// eslint-disable-next-line react/prop-types
const MyForm = ({ setShowForm }) => {
  const [action, setAction] = useState("");
  const [url, setUrl] = useState("");
  const [param1, setParam1] = useState("");
  const [param2, setParam2] = useState("");

  const handleSubmit = () => {
    localStorage.setItem(
      "trigger",
      JSON.stringify({ action, url, param1, param2 })
    );
  };

  useEffect(() => {
    if (action || url || param1 || param2) handleSubmit();
  }, [action, url, param1, param2]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("trigger"));
    console.log(data);
    setAction(data.action || "");
    setUrl(data.url || "");
    setParam1(data.param1 || "");
    setParam2(data.param2 || "");
  }, []);

  return (
    <div
      style={{
        border: "1px solid black",
        backgroundColor: "white",
        width: "400px",
        borderRadius: "20px",
      }}
      className="form-container"
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "end",
          padding: "5px 15px",
        }}
      >
        <button onClick={() => setShowForm(false)}>X</button>
      </div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          padding: "20px 30px",
        }}
      >
        <label style={{ fontWeight: "bold" }} htmlFor="action">
          Action:
        </label>
        <select
          id="action"
          name="action"
          value={action}
          onChange={(e) => setAction(e.target.value)}
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
        </select>

        <label style={{ fontWeight: "bold" }} htmlFor="url">
          URL:
        </label>
        <input
          type="url"
          id="url"
          name="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{ width: "100%", padding: "5px", border: "1px solid gray" }}
        />

        <label style={{ fontWeight: "bold" }}>Query Parameters:</label>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="key"
            value={param1}
            onChange={(e) => setParam1(e.target.value)}
            style={{
              width: "50%",
              padding: "5px",
              marginRight: "5px",
              border: "1px solid gray",
            }}
          />
          <input
            type="text"
            placeholder="value"
            value={param2}
            onChange={(e) => setParam2(e.target.value)}
            style={{ width: "50%", padding: "5px", border: "1px solid gray" }}
          />
        </div>
      </form>
    </div>
  );
};

export default MyForm;
