import './Datatable.scss';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../../datatablesource';
import { useState } from 'react';

const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='dashboard__datatable__cellAction'>
            <Link to='/dashboard/users/123' style={{ textDecoration: 'none' }}>
              <div className='dashboard__datatable__cellAction__viewButton'>
                View
              </div>
            </Link>
            <div
              className='dashboard__datatable__cellAction__deleteButton'
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className='dashboard__datatable'>
      <div className='dashboard__datatable__title'>
        Add New User
        <Link
          to='/dashboard/users/new'
          className='dashboard__datatable__title__link'
        >
          Add New
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        className='dashboard__datatable__table'
      />
    </div>
  );
};

export default Datatable;
