import BasicTable from "./component/BasicTable";
import mData from "./MOCK_DATA.json";
import { useMemo } from "react";
const App = () => {
  const data = useMemo(() => mData, []);

  const columns = [
    {
      header: "ID",
      accessorKey: "id",
      footer: "ID",
    },

    // For Combining first name and last name in Single Name Column
    // {
    //   header: "Name",
    //   accessorFn: (row) => `${row.first_name} ${row.last_name}`,
    //   footer: "ID",
    // },

    // For Rendering First Name and Last Name as Child row for the Name Row
    {
      header: "Name",
      columns: [
        {
          header: "First Name",
          accessorKey: "first_name",
          footer: "First Name",
        },
        {
          header: "Last Name",
          accessorKey: "last_name",
          footer: "Last Name",
        },
      ],
    },
    // For Rendering First Name and Last Name as it is
    // {
    //   header: "First Name",
    //   accessorKey: "first_name",
    //   footer: "First Name",
    // },
    // {
    //   header: "Last Name",
    //   accessorKey: "last_name",
    //   footer: "Last Name",
    // },
    {
      header: "Email",
      accessorKey: "email",
      footer: "Email",
    },
    {
      header: "Gender",
      accessorKey: "gender",
      footer: "Gender",
    },
    {
      header: "Date of Birth",
      accessorKey: "date_of_birth",
      footer: "Date of Birth",
      //   cell: (info) => DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED),
    },
  ];
  return (
    <div>
      <p>React Table Tutorial 01</p>
      <BasicTable data={data} columns={columns} />
    </div>
  );
};

export default App;
