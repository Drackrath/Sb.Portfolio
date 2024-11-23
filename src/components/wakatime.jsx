import { useEffect, useState } from "react";
import fetchJsonp from "fetch-jsonp";

function Wakatime() {
  const [count, setCount] = useState(() => "loading...");
  useEffect(() => {
    fetchJsonp(
      "",
    )
      .then((response) => response.json())
      .then((data) => {
        setCount(
          data.data.grand_total.human_readable_total_including_other_language,
        );
      });
  }, []);
  return (
    <a
      style={{ textDecoration: "none", color: "white" }}
      href="https://wakatime.com/@Drackrath"
      target="_blank"
    >
      Tracked time coding: <b className="blue">{count}</b>
    </a>
  );
}

export default Wakatime;
