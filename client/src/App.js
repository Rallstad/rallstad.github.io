import React from "react";
import logo from "./lawyerhat.svg";
import "./App.css";

function App() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <div className="App">
            <div className="header">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>{!data ? "Er Marit advokat?" : data}</h1>
                    <p><font size="5">Niks</font></p>
                    <p>
                        <a href="https://harmannenfalt.no/"><font size="1">Har mannen falt?</font></a>
                    </p>
                </header>
            </div>
            <div class="body">
                <body>
                <a href="https://github.com/Rallstad">Sjekk ut Haralds Github for massevis av uferdig ræl
                    <img src="github.png" className="Link-image" alt=""></img>
                </a>
                </body>
            </div>
        </div>
    );
}

export default App;
