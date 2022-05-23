const SidebarAA = require("../components/sidebarAA");
const SidebarDIP = require("../components/sidebarAA");
const TopBar = require("../components/topBar");
const { useState, useEffect } = require("react");
const Image = require("next/image");

function parseJwt(token) {
  if (!token) {
    return;
  }
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  return JSON.parse(window.atob(base64));
}

module.exports = function areaAmministratoreAziendale() {
  const [jwt, setJwt] = useState("");
  const [rt, setRt] = useState("");
  const [set, setSet] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setJwt(sessionStorage.getItem("jwt"));
      setRt(sessionStorage.getItem("rt"));
      console.log("JWT-->", jwt);
      setSet(0);
    }, 50);
  }, []);
  if (set) {
    return <div></div>;
  } else {
    console.log("JWT-->", jwt);

    if (jwt == undefined) {
      return (
        <div>
          <h1>Devi prima effettuare il login!</h1>
          <a href="/">Vai alla pagina di login</a>
        </div>
      );
    } else if (parseJwt(jwt).role == "AA") {
      return (
        <div>
          <SidebarAA />
          <TopBar />
        </div>
      );
    } else {
      return (
        <div>
          <Image
            layout="fill"
            className="object-center object-cover pointer-events-none"
            src="/../public/404.png"
            alt="title"
          />
        </div>
      );
    }
  }
};
