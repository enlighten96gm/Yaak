import React from "react";
import styled from "styled-components";
import useFetch from "../../customHooks/useFetch";
import { format } from "date-fns";
import book from "../../assets/images/book.svg";

export interface DriveData {
  time: string;
  partner: string;
  type: string;
  vehicle: string;
  kitID: string;
  driver: string;
  instructor: string;
  status: JSX.Element;
  data: string;
  bitrate: string;
}

const Table = () => {
  const { data, error, isFetching } = useFetch();
  console.log(data, "data");

  return (
    <StyledTable>
      <thead>
        <TableRow>
          <TableHead>Time</TableHead>
          <TableHead>Partner</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Vehicle</TableHead>
          <TableHead>Kit ID</TableHead>
          <TableHead>Driver</TableHead>
          <TableHead>Instructor</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Data</TableHead>
          <TableHead>Bitrate</TableHead>
          <TableHead />
        </TableRow>
      </thead>
      <tbody>
        {data.map((drive: any, index) => (
          <TableRow key={index}>
            <TableData>
              {format(new Date(drive.endTimestamp), "dd MMM yyyy, HH:mm:ss")}
            </TableData>
            <TableData>{drive.partner ? drive.partner.name : "None"}</TableData>
            <TableData>Type</TableData>
            <TableData>Vehicle</TableData>
            <TableData>{drive.dongleId}</TableData>
            <TableData>
              {drive.driver
                ? `${drive.driver.firstname} ${drive.driver.lastname}`
                : "None"}
            </TableData>
            <TableData>
              {drive.instructor
                ? `${drive.instructor.firstname} ${drive.instructor.lastname}`
                : "None"}
            </TableData>
            <TableData>Status</TableData>
            <TableData>Data</TableData>
            <TableData>{drive.bitRateKbps}</TableData>
            <TableData>
              <Image src={book} />
            </TableData>
          </TableRow>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableRow = styled.tr``;

const StatusIndicator = styled.span`
  display: inline-block;
  height: 15px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${(props) => props.color};
`;

const TableData = styled.td`
  height: 56px;
  overflow: auto;
  padding: 18px 16px;
  text-align: left;
  font-size: 14px;
  border-bottom: 1px solid #e3e8e5;
`;

const TableHead = styled.th`
  text-align: left;
  padding: 12px 16px;
  background-color: #e3e8e5;
  color: #7d8781;
  font-size: 14px;
  font-weight: 500;
`;

const Image = styled.img`
  cursor: pointer;
`;
