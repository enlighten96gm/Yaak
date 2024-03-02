import { GridColDef } from "@mui/x-data-grid-pro";
import book from "../../assets/images/book.svg";
import goodSign from "../../assets/images/good.svg";
import arrowSign from "../../assets/images/arrow.svg";
import warningSign from "../../assets/images/warning.svg";
import { useState } from "react";
import styled from "styled-components";
import Progress from "../Progress";

const columns: GridColDef[] = [
  { field: "time", headerName: "Time" },
  { field: "partner", headerName: "Partner", sortable: false },
  { field: "type", headerName: "Type", sortable: false },
  { field: "vehicle", headerName: "Vehicle", sortable: false },
  { field: "kitid", headerName: "Kit ID", sortable: false },
  {
    field: "driver",
    headerName: "Driver",
    sortable: false,
    renderCell: (params) => (
      <div>
        {params.value ? (
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <img
              style={{ width: "15px", height: "15px", borderRadius: "100%" }}
              src={params.value.profileImageURL}
            />
            {params.value.firstname} {params.value.lastname}
          </div>
        ) : (
          "---"
        )}
      </div>
    ),
  },
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

export default columns;

const DataCellWrapper = styled.div``;
