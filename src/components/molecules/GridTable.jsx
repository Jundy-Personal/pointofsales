import { AgGridReact } from 'ag-grid-react';
import { Div } from '../atoms';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

const GridTable = ({ columns, rows, defaults }) => {
  return (
    <Div className="ag-theme-quartz h-screen">
      <AgGridReact columnDefs={columns} rowData={rows} defaultColDef={defaults} />
    </Div>
  );
};

export default GridTable;
