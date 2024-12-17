import { initialData } from "../data/default"
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { DeleteUser } from "./DeleteUser"
import { toast } from "sonner"

//default pagination
const paginationModel = { page: 0, pageSize: 5 };

export function Datatable() {

  const [data, setData] = React.useState(initialData);
  const [userId, setUserId] = React.useState(null);

  const handleDelete = React.useCallback((id) => {
    setData((prevRows) => prevRows.filter((row) => row.id !== id));
    console.log(`Deleted row ID: ${id}`);
    toast.success('Success, The User have been removed!')
  }, []);

  //Columns and user Deletion mui syntax
  const columns = React.useMemo(
    () => [
      { field: 'name', headerName: 'User', width: 130 },
      { field: 'age', headerName: 'Age', width: 70 },
      {
        field: 'leaguesPlayed',
        headerName: 'Leagues Played',
        renderCell: (params: { value: string[]; }) => (
          <div>
            {params.value.map((league, index) => (
              <span key={index} className="league">
                {league}
              </span>
            ))}
          </div>
        ),
        width: 450,
      },
      {
        field: 'status',
        headerName: 'Status',
        width: 130,
        renderCell: (params: { value: string }) => (
          <div className={params.value === "active" ? "active" : "retired"}>
            {params.value}
          </div>
        )
      },
      { field: 'height', headerName: 'Height', width: 130 },
      { field: 'position', headerName: 'Position', width: 130 },
      {
        field: "actions",
        type: 'actions',
        getActions: (param) => [
          <DeleteUser
            label="Delete"
            showInMenu
            icon={<DeleteIcon />}
            deleteUser={() => handleDelete(param.id)}
            closeMenuOnClick={false}
          />,
        ]
      }
    ], [handleDelete]
  );

  function handleClick(param) {
    setUserId(param);
  }

  return (
    <div className="users-table">
      <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          rowHeight={70}
          onRowClick={handleClick}
          sx={{
            border: 0,
            fontSize: '0.875rem',
            '& .MuiDataGrid-columnHeaders': {
              fontSize: '0.9rem',
              backgroundColor: '#f5f5f5', /* Light grey color */
              color: '#333333',
            },
            '& .MuiDataGrid-cell': {
              fontSize: '0.875rem',
              padding: '4px',
            },
          }}
        />
      </Paper>
    </div>
  )
}
