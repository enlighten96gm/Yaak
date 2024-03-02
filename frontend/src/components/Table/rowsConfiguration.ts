import { GridRowsProp } from "@mui/x-data-grid-pro";
import { DataType } from "../../types";

import { format } from "date-fns";
const configureRows = (filteredData: DataType[]) => {
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
      driver: driver,
      instructor: instructor
        ? `${instructor.firstname} ${instructor.lastname}`
        : "No Data",
      status: videoStatus <= 0,
      data: driverDriveCount <= 189,
      bitrate: bitRateKbps,
    })
  );
  return rows
}

export default configureRows
