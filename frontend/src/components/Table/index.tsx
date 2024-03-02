import React from "react";
import styled from "styled-components";
import useFetch from "../../customHooks/useFetch";
import { parseISO } from "date-fns";
import { DataGridPro, GridCellParams } from "@mui/x-data-grid-pro";
import { DataType } from "../../types";
import columns from "./columnsConfiguration";
import configureRows from "./rowsConfiguration";

interface TableProps {
  setSearchValue: (arg: string) => void;
  searchValue: string;
  dataPickerValue: null | string;
}

const Table: React.FC<TableProps> = ({
  setSearchValue,
  searchValue,
  dataPickerValue,
}) => {
  const { data, error, isFetching } = useFetch();

  const handleCellClick = (params: GridCellParams) => {
    if (params.field === "action") {
      const clickedRowId = params.id.toString();
      setSearchValue(clickedRowId);
    }
  };

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredData = data.filter(
    ({ id, partner, dongleId, startTimestamp }: DataType) => {
      const filterTypes = [String(id), String(partner?.name), String(dongleId)];

      const isSearchMatch =
        searchValue &&
        filterTypes.some((fieldValue) =>
          fieldValue.toLowerCase().includes(searchValue.toLowerCase())
        );

      const isDateMatch =
        dataPickerValue &&
        new Date(dataPickerValue).getDate() ===
          new Date(parseISO(startTimestamp)).getDate();

      return (
        (searchValue ? isSearchMatch : true) &&
        (dataPickerValue ? isDateMatch : true)
      );
    }
  );

  return (
    <Wrapper>
      <DataGridPro
        rows={configureRows(filteredData)}
        columns={columns}
        initialState={{
          pinnedColumns: { right: ["status", "data", "bitrate", "action"] },
        }}
        onCellClick={handleCellClick}
        hideFooter
      />
    </Wrapper>
  );
};

export default Table;

const Wrapper = styled.div`
  width: 100%;
  height: 80%;
`;
