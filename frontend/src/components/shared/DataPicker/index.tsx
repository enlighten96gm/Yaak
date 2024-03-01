import styled from "styled-components";
import { DatePicker } from "@mui/x-date-pickers";
import { DataPickerProps } from "../../../types";
import { memo } from "react";

const DatePickerComponent: React.FC<DataPickerProps> = memo(
  ({ dataPickerValue, setDataPickerValue }) => {
    console.log("data");
    return (
      <DatePickerContainer>
        <DatePicker
          label=""
          value={dataPickerValue}
          onChange={(newValue) => newValue && setDataPickerValue(newValue)}
          slotProps={{
            inputAdornment: {
              position: "start",
            },
          }}
        />
      </DatePickerContainer>
    );
  }
);
export default DatePickerComponent;

const DatePickerContainer = styled.div`
  .MuiInputBase-root {
    height: 48px;
  }
`;
