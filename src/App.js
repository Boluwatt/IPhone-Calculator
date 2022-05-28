import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import commafy from "./utils/commafy";

const App = () => {
  const [time, setTime] = useState(new Date())
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

    useEffect(() => {
      setInterval(() => {
        setTime(new Date());
      }, 5000);
    });

  const handleButtonPress = (content) => () => {
    const num = parseFloat(value);
    if (content === "AC") {
      setValue("0");
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === "±") {
      setValue((num * -1).toString());
      return;
    }

    if (content === "%") {
      setValue((num / 100).toString());
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === ".") {
      if (value.includes(".")) return;

      setValue(value + ".");
      return;
    }

    if (content === "÷") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + num);
        } else if (operator === "−") {
          setMemory(memory - num);
        } else if (operator === "×") {
          setMemory(memory * num);
        } else if (operator === "÷") {
          setMemory(memory / num);
        }
      } else {
        setMemory(num);
      }
      setOperator("÷");
      setValue("0");
      return;
    }

    if (content === "×") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + num);
        } else if (operator === "−") {
          setMemory(memory - num);
        } else if (operator === "×") {
          setMemory(memory * num);
        } else if (operator === "÷") {
          setMemory(memory / num);
        }
      } else {
        setMemory(num);
      }
      setOperator("×");
      setValue("0");
      return;
    }
    if (content === "−") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + num);
        } else if (operator === "−") {
          setMemory(memory - num);
        } else if (operator === "×") {
          setMemory(memory * num);
        } else if (operator === "÷") {
          setMemory(memory / num);
        }
      } else {
        setMemory(num);
      }
      setOperator("−");
      setValue("0");
      return;
    }
    if (content === "+") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + num);
        } else if (operator === "−") {
          setMemory(memory - num);
        } else if (operator === "×") {
          setMemory(memory * num);
        } else if (operator === "÷") {
          setMemory(memory / num);
        }
      } else {
        setMemory(parseFloat(value));
      }
      setOperator("+");
      setValue("0");
      return;
    }
    if (content === "=") {
      if (!operator) return;

      if (operator === "+") {
        setValue((memory + num).toString());
      } else if (operator === "−") {
        setValue((memory - num).toString());
      } else if (operator === "×") {
        setValue((memory * num).toString());
      } else if (operator === "÷") {
        setValue((memory / num).toString());
      }
      setMemory(null);
      setOperator(null);
      return;
    }

    if (value[value.length - 1] === ".") {
      setValue(value + content);
    } else {
      setValue(parseFloat(num + content).toString());
    }
  };
  // const [value, setValue] = useState("0")
  // const [value, setValue] = useState("0")
  return (
    <div className="container">
      <div className="App">
        <div className="top">
          {time.getHours().toString().padStart(2, 0)}:
          {time.getMinutes().toString().padStart(2, 0)}
        </div>
        <div className="display">{commafy(value)}</div>
        <div className="button">
          <Button
            onButtonClick={handleButtonPress}
            content="AC"
            type="function"
          />
          <Button
            onButtonClick={handleButtonPress}
            content="±"
            type="function"
          />
          <Button
            onButtonClick={handleButtonPress}
            content="%"
            type="function"
          />
          <Button
            onButtonClick={handleButtonPress}
            content="÷"
            type="operator"
          />
          <Button onButtonClick={handleButtonPress} content="7" />
          <Button onButtonClick={handleButtonPress} content="8" />
          <Button onButtonClick={handleButtonPress} content="9" />
          <Button
            onButtonClick={handleButtonPress}
            content="×"
            type="operator"
          />
          <Button onButtonClick={handleButtonPress} content="4" />
          <Button onButtonClick={handleButtonPress} content="5" />
          <Button onButtonClick={handleButtonPress} content="6" />
          <Button
            onButtonClick={handleButtonPress}
            content="−"
            type="operator"
          />
          <Button onButtonClick={handleButtonPress} content="1" />
          <Button onButtonClick={handleButtonPress} content="2" />
          <Button onButtonClick={handleButtonPress} content="3" />
          <Button
            onButtonClick={handleButtonPress}
            content="+"
            type="operator"
          />
          <Button onButtonClick={handleButtonPress} content="0" />
          <Button onButtonClick={handleButtonPress} content="." />
          <Button
            onButtonClick={handleButtonPress}
            content="="
            type="operator"
          />
        </div>
        <div className="bottom" />
      </div>
    </div>
  );
};

export default App;
