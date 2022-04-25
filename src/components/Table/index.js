import React, { useState, useEffect } from "react";
import Table from './Table';

import axios from 'axios';

import { columns } from '../../utils/Constants';

export default function Index() {

    const [data, setData] = useState([]);
    const [skipPageReset, setSkipPageReset] = React.useState(false)

    useEffect(() => {
        (async () => {
          const result = await axios("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
          setData(result.data);
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const updateMyData = (rowIndex, columnId, value) => {
      // We also turn on the flag to not reset the page
      setSkipPageReset(true)
      setData(old =>
        old.map((row, index) => {
          if (index === rowIndex) {
            return {
              ...old[rowIndex],
              [columnId]: value,
            }
          }
          return row
        })
      )
    }

  return (
    <div>
        <Table 
            data={data} 
            setData={setData}
            columns={columns}
            updateMyData={updateMyData}
            skipPageReset={skipPageReset}
        />
    </div>
  )
}



