import styled from "styled-components";
import { useState, useEffect } from "react";
import { DatePicker } from "@mui/x-date-pickers";

const MyDataPicker = () => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    console.log("MyDataPicker value", value);
  }, [value]);

  return (
    <DatePickerContainer>
      <DatePicker
        label=""
        value={value}
        onChange={(newValue) => setValue(newValue)}
        slotProps={{
          inputAdornment: {
            position: "start",
          },
        }}
      />
    </DatePickerContainer>
  );
};
export default MyDataPicker;

const DatePickerContainer = styled.div`
  .MuiInputBase-root {
    height: 48px;
  }
`;