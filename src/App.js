import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import { NavBar } from "./components/navbar/index.js";
import { TextInput } from "./components/text-input/index.js";
import { Btn } from "./components/button/index.js";
import { CurrencySelect } from "./components/select/index.js";
import { AlertModal } from "./components/modal/index.js";
import { Container } from "@mui/material";

function App() {
  const [countryCodes, setCountryCodes] = useState([]);
  const [currentCurrency, setCurrentCurrency] = useState("");
  const [changingCurrency, setChangingCurrency] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [amount, setAmount] = useState("");
  const [lastUpdated, setLastUpdated] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get("https://open.er-api.com/v6/latest/PKR")
      .then((res) => {
        setCountryCodes(Object.keys(res?.data?.rates));
        setLastUpdated(res?.data?.time_last_update_utc);
      })
      .catch((err) => {
        console.log("err ===> ", err);
      });
  }, []);

  const calcFare = () => {
    if (currentCurrency && changingCurrency && amount) {
      axios
        .get(`https://open.er-api.com/v6/latest/${currentCurrency}`)
        .then((res) => {
          setConvertedAmount(
            Number(amount) * Number(res.data.rates[changingCurrency])
          );
          setOpen(true);
        })
        .catch((err) => {
          console.log("err ===> ", err);
        });
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <NavBar lastUpdated={lastUpdated} />
      <Container>
        <div className="main">
          <div className="card">
            <h3>Currency Exchange Rates</h3>

            <CurrencySelect
              currentCurrency={currentCurrency}
              setCurrentCurrency={setCurrentCurrency}
              changingCurrency={changingCurrency}
              setChangingCurrency={setChangingCurrency}
              data={countryCodes}
            />
            {currentCurrency ? (
              <div className="w-100">
                <div className="w-100 mt-5">
                  <TextInput setAmount={setAmount} amount={amount} />
                </div>
                <div className="mt-5">
                  <Btn value={"Calculate"} onClick={() => calcFare()} />
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Container>
      <AlertModal
        open={open}
        heading="Currency Exchange Rate"
        description={`${amount} ${currentCurrency} = ${convertedAmount} ${changingCurrency}`}
        handleClose={() => {
          setCurrentCurrency("");
          setChangingCurrency("");
          setConvertedAmount("");
          setAmount("");
          setOpen(false);
        }}
      />
      <AlertModal
        open={error}
        heading="Error"
        description="Please Fill The Requirements Properly"
        handleClose={() => {
          setError(false);
        }}
      />
    </div>
  );
}

export default App;
