export interface DataType {
  id: string;
  startTimestamp: string;
  partner: {
    name: string;
  };
  driverDriveCount: number;
  vehicle: string;
  dongleId: string;
  driver: {
    firstname: string;
    lastname: string;
  };
  instructor: {
    firstname: string;
    lastname: string;
  };
  videoStatus: number;
  data: number;
  bitRateKbps: string;
}
