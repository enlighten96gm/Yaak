import React, { useState } from "react";
import styled from "styled-components";
import useFetch from "../../customHooks/useFetch";
import { format } from "date-fns";
import book from "../../assets/images/book.svg";
import goodSign from "../../assets/images/good.svg";
import arrowSign from "../../assets/images/arrow.svg";
import warningSign from "../../assets/images/warning.svg";
import {
  DataGridPro,
  GridColDef,
  GridCellParams,
  GridRowsProp,
} from "@mui/x-data-grid-pro";
import { DataType } from "../../types";
import Progress from "../Progress";

const columns: GridColDef[] = [
  { field: "time", headerName: "Time" },
  { field: "partner", headerName: "Partner", sortable: false },
  { field: "type", headerName: "Type", sortable: false },
  { field: "vehicle", headerName: "Vehicle", sortable: false },
  { field: "kitid", headerName: "Kit ID", sortable: false },
  { field: "driver", headerName: "Driver", sortable: false },
  { field: "instructor", headerName: "Instructor", sortable: false },
  {
    field: "status",
    headerName: "Status",
    renderCell: (params) => (
      <>{params.value ? <img src={goodSign} /> : <img src={arrowSign} />}</>
    ),
    sortable: false,
    width: 95,
  },
  {
    field: "data",
    headerName: "Data",
    renderCell: (params) => {
      const [isCellHovered, setCellHovered] = useState(false);
      const randomValue = Math.floor(Math.random() * 100) + 1;
      // I didn't quite understand what value to put in the "date" column. So Yolo =)
      return (
        <DataCellWrapper
          onMouseEnter={() => setCellHovered(true)}
          onMouseLeave={() => setCellHovered(false)}
        >
          {params.value ? (
            <>
              {isCellHovered ? (
                <Progress percentage={randomValue} />
              ) : (
                <img src={goodSign} />
              )}
            </>
          ) : (
            <>
              {isCellHovered ? (
                <Progress percentage={randomValue} />
              ) : (
                <img src={warningSign} />
              )}
            </>
          )}
        </DataCellWrapper>
      );
    },
    sortable: false,
    width: 95,
  },
  {
    field: "bitrate",
    headerName: "Bitrate",
    renderCell: (params) => {
      const [isCellHovered, setCellHovered] = useState(false);
      return (
        <div
          style={{ cursor: "pointer" }}
          onMouseEnter={() => setCellHovered(true)}
          onMouseLeave={() => setCellHovered(false)}
        >
          {params.value ? (
            <div
              style={{
                backgroundColor: params.value >= 9500 ? "#EAFFE9" : "#FFFAE5",
                padding: "4px 6px",
                borderRadius: "8px",
              }}
            >
              {isCellHovered
                ? params.value
                : params.value.toString().split("")[0]}{" "}
              Mbps
            </div>
          ) : (
            "---"
          )}
        </div>
      );
    },
    sortable: false,
    width: 95,
  },
  {
    field: "action",
    type: "actions",
    getActions: () => [<img src={book} style={{ cursor: "pointer" }} />],
    sortable: false,
    width: 95,
  },
];

interface TableProps {
  setSearchValue: (arg: string) => void;
  searchValue: string;
}

const Table: React.FC<TableProps> = ({ setSearchValue, searchValue }) => {
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

  const filteredData = data.filter(({ id, partner, dongleId }: DataType) => {
    const filterTypes = [String(id), String(partner?.name), String(dongleId)];

    const isMatch = filterTypes.some((fieldValue) =>
      fieldValue.toLowerCase().includes(searchValue.toLowerCase())
    );

    return isMatch;
  });

  const rows: GridRowsProp = filteredData.map(
    ({
      id,
      startTimestamp,
      partner,
      driverDriveCount,
      dongleId,
      driver,
      instructor,
      videoStatus,
      bitRateKbps,
    }: DataType) => ({
      id: id,
      time: format(new Date(startTimestamp), "dd MMM yyyy, HH:mm:ss"),
      partner: partner ? partner.name : "No Data",
      type: driverDriveCount >= 189 ? "Expert" : "Student",
      vehicle: "A-BC 123D",
      kitid: dongleId,
      driver: driver ? `${driver.firstname} ${driver.lastname}` : "No Data",
      instructor: instructor
        ? `${instructor.firstname} ${instructor.lastname}`
        : "No Data",
      status: videoStatus <= 0,
      data: driverDriveCount <= 189,
      bitrate: bitRateKbps,
    })
  );

  return (
    <Wrapper>
      <DataGridPro
        rows={rows}
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

const DataCellWrapper = styled.div``;
