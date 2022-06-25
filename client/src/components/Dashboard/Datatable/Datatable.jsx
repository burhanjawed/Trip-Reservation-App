import './Datatable.scss';
import { Link, useLocation } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../../datatablesource';
import useFetch from '../../../hooks/useFetch';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Datatable = ({ columns, title }) => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];

  const [list, setList] = useState();

  const { data, loading, error } = useFetch(`/${path}`);

  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/${path}/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (error) {}
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
              onClick={() => handleDelete(params.row._id)}
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
        {title}
        <Link
          to={`/dashboard/${path}/new`}
          className='dashboard__datatable__title__link'
        >
          Add New
        </Link>
      </div>
      {list && (
        <DataGrid
          rows={list}
          columns={columns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
          className='dashboard__datatable__table'
          getRowId={(row) => row._id}
        />
      )}
    </div>
  );
};

export default Datatable;
