import Roles from '../components/Table/Roles'
export const columns = [
          {
                Header: "Id",
                accessor: "id"
              },
              {
                Header: "Name",
                accessor: "name"
              },
              {
                Header: "Email",
                accessor: "email"
              },
              {
                Header: "Role",
                accessor: "role",
                Cell: ({ cell: { value } }) => <Roles value={value} />
              }
]

