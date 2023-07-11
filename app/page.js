"use client";
import { Button } from "./components/Button";
import { DisplayBox } from "./components/DisplayBox";
import { useState } from "react";
import { message } from "antd";

export default function Home() {
  const [str, setStr] = useState("");

  const [messageApi, contextHolder] = message.useMessage();

  const error = () => {
    messageApi.open({
      type: "error",
      duration: 1.5,
      content: "Cannot enter more than 15 numbers",
    });
  };

  function btnClick(val) {
    if (str.length < 15) {
      setStr(str + val);
    } else {
      error();
    }
  }

  function onEqual() {
    try {
      const result = eval(str);
      const numberLength = result.toString().length;
      if (numberLength > 10) {
        setStr(result.toFixed(10));
      } else {
        setStr(result);
      }
    } catch (error) {
      setStr("ERROR");
    }
  }

  function onClear() {
    setStr(str.slice(0, -1));
  }

  function onAllClear() {
    setStr("");
  }

  return (
    <div className="row">
      {contextHolder}
      <DisplayBox value={str} />

      <br />

      <Button btnClick={btnClick} onAllClear={onAllClear} value={"AC"} />
      <Button btnClick={btnClick} onClear={onClear} value={"C"} />
      <Button btnClick={btnClick} value={"%"} />
      <Button btnClick={btnClick} value={"/"} />

      <br />
      <Button btnClick={btnClick} value={9} />
      <Button btnClick={btnClick} value={8} />
      <Button btnClick={btnClick} value={7} />
      <Button btnClick={btnClick} value={"+"} />

      <br />
      <Button btnClick={btnClick} value={4} />
      <Button btnClick={btnClick} value={5} />
      <Button btnClick={btnClick} value={6} />
      <Button btnClick={btnClick} value={"-"} />

      <br />
      <Button btnClick={btnClick} value={1} />
      <Button btnClick={btnClick} value={2} />
      <Button btnClick={btnClick} value={3} />
      <Button btnClick={btnClick} value={"*"} />

      <br />
      <Button btnClick={btnClick} value={"00"} />
      <Button btnClick={btnClick} value={0} />
      <Button btnClick={btnClick} value={"."} />
      <Button btnClick={btnClick} onEqual={onEqual} value={"="} />
    </div>
  );
}
