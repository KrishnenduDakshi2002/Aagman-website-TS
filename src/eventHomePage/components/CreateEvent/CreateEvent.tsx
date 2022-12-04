
import React, { useState } from "react";
import {Clock} from "../../../components/Clock/Clock";
import { DatePicker } from "../../../components/DatePicker/DatePicker";

export default function CreateEvent() {
  const [value, setValue] = useState(new Date());
  return (
    <>
      <DatePicker value={value} onChange={setValue}/>
      <Clock value={value} onChange={setValue}/>
    </>
  );
}
