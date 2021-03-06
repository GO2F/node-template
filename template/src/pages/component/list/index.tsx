import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, message, Button, Modal, Row, Col } from 'antd';
import Link from 'umi/link';
import { Divider } from 'antd';

import request from 'umi-request';
import { TypeExtends } from '../type_extend';
import TableBase from './table_basic';
import { router } from 'umi';
// import styles from './index.less';

export default class TablePage extends React.Component<any, any> {
  state = {
    itemList: [],
  };

  // 获取unique_key对应字段, 默认为id
  getUniqueKey() {
    let extendConfig: TypeExtends = this.props.route.extendConfig;

    let keyConfigList = extendConfig.keyList;
    for (let keyConfig of keyConfigList) {
      if (keyConfig.is_unique_key) {
        return keyConfig.key;
      }
    }
    return 'id';
  }

  async asyncFetchData() {
    const extendConfig: TypeExtends = this.props.route.extendConfig;
    const baseApiPath = extendConfig?.baseApiPath;
    const api = `${baseApiPath}/list`;
    let response = await request.get(api).catch(() => {
      return {};
    });
    let itemList = response?.data || [];
    this.setState({
      itemList: itemList,
    });
  }

  async asyncRemoveItem(id: number) {
    const extendConfig: TypeExtends = this.props.route.extendConfig;
    const baseApiPath = extendConfig?.baseApiPath;
    const api = `${baseApiPath}/remove`;
    let response = await request
      .post(api, {
        params: {
          id: id,
        },
      })
      .catch(() => {
        return {};
      });
    if (response.code === 0) {
      message.info('删除成功', 1);
    }
    // 删除完毕后重新载入数据
    await this.asyncFetchData();
  }

  componentDidMount() {
    // 初始化数据
    this.asyncFetchData();
    console.log('数据初始化完毕 this.state.itemList => ', this.state.itemList);
  }

  render(): React.ReactNode {
    let extendConfig: TypeExtends = this.props.route.extendConfig;

    let keyConfigList = extendConfig.keyList;
    let tableColumnList = [];
    for (let keyConfig of keyConfigList) {
      // 目前支持直接展示int/string等文本类型

      // 处理字段隐藏逻辑
      if (keyConfig.is_show_in_list === false) {
        continue;
      }

      let columnItem = {
        title: keyConfig.title,
        dataIndex: keyConfig.key,
        key: keyConfig.key,
      };
      tableColumnList.push(columnItem);
    }
    let uniqueKey = this.getUniqueKey();
    // 添加操作栏
    tableColumnList.push({
      title: '操作',
      key: 'action',
      fixed: 'right',
      render: (text: string, record: any) => {
        return (
          <div>
            <span>
              {extendConfig?.pageConfig?.detail ? (
                <Link to={`${extendConfig.baseUrlPath}/detail/${record[uniqueKey]}`}>详情</Link>
              ) : null}
              <span>&nbsp;</span>
              {extendConfig?.pageConfig?.update ? (
                <Link to={`${extendConfig.baseUrlPath}/update/${record[uniqueKey]}`}>修改</Link>
              ) : null}
              <Divider type="vertical" />
              <Button
                type="link"
                onClick={() => {
                  Modal.confirm({
                    content: `确认删除记录${record[uniqueKey]}?`,
                    onOk: () => {
                      this.asyncRemoveItem(record[uniqueKey]);
                    },
                  });
                }}
              >
                删除
              </Button>
            </span>
          </div>
        );
      },
    });

    let createButtonEle = (
      <Row type="flex" justify="end">
        <Button
          type="primary"
          onClick={() => {
            router.push(`${extendConfig.baseUrlPath}/create`);
          }}
        >
          新建
        </Button>
      </Row>
    );

    return (
      <PageHeaderWrapper>
        <Card>
          {extendConfig?.pageConfig?.create ? createButtonEle : null}
          <TableBase columns={tableColumnList} data={this.state.itemList} />
        </Card>
      </PageHeaderWrapper>
    );
  }
}
