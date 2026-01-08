import React, { useState } from "react";
import ReusableDialog from "./ReusableDialog";
import Table from "./Table";


const DialogTable = () => {
  const [open, setOpen] = useState(false);

  const columns = [
  { key: "name", label: "Patient Name" },
  { key: "age", label: "Age" },
  {
    key: "action",
    label: "Action",
    render: (row) => 
    <button>View</button>,
  },
];

const rows = [
  { name: "abc", age: 35 },
  { name: "pqr", age: 28 },
];


return (
    <>
      <button onClick={() => setOpen(true )}>Open Dialog</button>

      <ReusableDialog
        open={open}
        title="Patient Detail"
        onClose={() => setOpen( false )} 
        onConfirm={() => {
          alert("Confirmed");
          setOpen(false);
        }}
        confirmText="Complete">
          
        <Table columns={columns} rows={rows} />
      </ReusableDialog>
    </>
  );
};

export default DialogTable;

