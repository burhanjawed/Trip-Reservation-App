import './Datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../../datatablesource';

const Datatable = () => {
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: () => {
        return (
          <div className='dashboard__datatable__cellAction'>
            <div className='dashboard__datatable__cellAction__viewButton'>
              View
            </div>
            <div className='dashboard__datatable__cellAction__deleteButton'>
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className='dashboard__datatable'>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
