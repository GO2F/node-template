export default [
  {
    version: 0.1,
    data_model: {
      key_list: [
        { key: 'ID', title: 'id', var_type: 'string', is_show_in_list: true, is_unique_key: true },
        {
          key: 'DisplayName',
          title: '组件名',
          var_type: 'string',
          is_show_in_list: true,
          is_unique_key: false,
        },
        {
          key: 'PackageName',
          title: '包名',
          var_type: 'string',
          is_show_in_list: true,
          is_unique_key: false,
        },
        {
          key: 'DevListJSON',
          title: '开发者',
          var_type: 'string',
          is_show_in_list: true,
          is_unique_key: false,
        },
        {
          key: 'Description',
          title: '描述',
          var_type: 'string',
          is_show_in_list: true,
          is_unique_key: false,
        },
        {
          key: 'SiteURL',
          title: '网站主页',
          var_type: 'string',
          is_show_in_list: true,
          is_unique_key: false,
        },
        {
          key: 'Remark',
          title: '备注',
          var_type: 'string',
          is_show_in_list: false,
          is_unique_key: false,
        },
      ],
    },
    page_config: { create: true, update: true, detail: true },
    name: '测试模型',
    base_url_path: '/component',
    base_api_path: '/api/component',
  },
];
