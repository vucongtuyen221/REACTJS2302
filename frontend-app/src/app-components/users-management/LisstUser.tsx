import React from 'react';
    import { Space, Table, Tag } from 'antd';

    const { Column, ColumnGroup } = Table;

    interface DataType {
      key: React.Key;
      firstName: string;
      lastName: string;
      age: number;
      address: string;
      tags: string[];
    }

    const data: DataType[] = [
      {
        key: '1',
        firstName: 'Vu',
        lastName: 'Tuyen',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        firstName: 'Tran ',
        lastName: 'Oanh',
        age: 42,
        address: 'London Reactjs',
        tags: ['loser'],
      },
    ];

    const ListUser: React.FC = () => (
      <Table dataSource={data}>
        <ColumnGroup title='Name'>
          <Column title='First Name' dataIndex='firstName' key='firstName' />
          <Column title='Last Name' dataIndex='lastName' key='lastName' />
        </ColumnGroup>
        <Column title='Age' dataIndex='age' key='age' />
        <Column title='Address' dataIndex='address' key='address' />
        <Column
          title='Tags'
          dataIndex='tags'
          key='tags'
          render={(tags: string[]) => (
            <>
              {tags.map((tag) => (
                <Tag color='blue' key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        />
        <Column
          title='Action'
          key='action'
          render={(_: any, record: DataType) => (
            <Space size='middle'>
              <a>Invite {record.lastName}</a>
              <a>Delete</a>
            </Space>
          )}
        />
      </Table>
    );

    export default ListUser;