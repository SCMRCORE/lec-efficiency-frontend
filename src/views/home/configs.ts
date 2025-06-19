import dayjs from 'dayjs'
import * as echarts from 'echarts'
import { RankListRow } from './type'

// 顶部数据key配置
export const clockInfoDataList = [
  {
    title: '本周打卡',
    unit: 'h',
    maxValue: 38,
    icon: '/common/doc.png'
  },
  {
    title: '当前排名',
    unit: '名',
    maxValue: 38,
    icon: '/common/task.png'
  },
  {
    title: '今日截止事项',
    unit: '个',
    maxValue: 10,
    icon: '/common/chat.png'
  }
]

const oneDayTime = 24 * 60 * 60 * 1000
const dateFormatter = (date: Date) => {
  return dayjs(date.getTime()).format('MM/DD')
}

// 顶部今明后信息配置
export const weatherInfoList = [
  {
    date: dateFormatter(new Date()),
    text: '今天'
  },
  {
    date: dateFormatter(new Date(new Date().getTime() + oneDayTime)),
    text: '明天'
  },
  {
    date: dateFormatter(new Date(new Date().getTime() + oneDayTime * 2)),
    text: '后天'
  }
]

// 导航部分配置
export const platforms = {
  internDevelopment: {
    name: '内部产品导航',
    list: [
      {
        icon: 'icon-github',
        text: '乐程开源',
        clickEvent: () => {
          window.open('https://github.com/lec-org')
        }
      }
    ]
  },
  coadingWeblication: {
    name: '刷题平台',
    list: [
      {
        icon: 'https://www.luogu.com.cn/favicon.ico',
        text: '洛谷',
        clickEvent: () => {
          window.open('https://www.luogu.com.cn/')
        }
      },
      {
        icon: 'https://static.nowcoder.com/fe/common/share-logo.png',
        text: '牛客',
        clickEvent: () => {
          window.open('https://ac.nowcoder.com/')
        }
      },
      {
        icon: 'https://cdn.acwing.com/static/web/img/favicon.ico',
        text: 'AcWing',
        clickEvent: () => {
          window.open('https://www.acwing.com/')
        }
      },
      {
        icon: 'https://assets.leetcode.cn/aliyun-lc-upload/uploaded_files/2021/03/73c9f099-abbe-4d94-853f-f8abffd459cd/leetcode.png?x-oss-process=image%2Fformat%2Cwebp',
        text: '力扣',
        clickEvent: () => {
          window.open('https://leetcode.cn/')
        }
      }
    ]
  },
  courseWeblication: {
    name: '课程平台',
    list: [
      {
        icon: 'https://img3.downza.cn/download/202006/162251-5ef701db7e5c1.jpg',
        text: '学习通',
        clickEvent: () => {
          window.open('https://i.chaoxing.com/')
        }
      },
      {
        icon: 'https://sj-fd.zol-img.com.cn/t_s160x160/g5/M00/06/00/ChMkJlo4zrKIKNRVAAALnxCPHEcAAjS5QNeFoUAAAu3489.jpg',
        text: 'MOOC',
        clickEvent: () => {
          window.open('https://www.icourse163.org/')
        }
      },
      {
        icon: 'https://fe-static-yuketang.yuketang.cn/fe/static/vue_images/2.2.562/images/favicon.ico',
        text: '雨课堂',
        clickEvent: () => {
          window.open('https://www.yuketang.cn/web')
        }
      },
      {
        icon: 'https://proxt-cdn.xuetangx.com/fe-proxtassets/xuetangX/0329/logo.ico',
        text: '学堂在线',
        clickEvent: () => {
          window.open('https://www.xuetangx.com/')
        }
      }
    ]
  },
  schoolWeblication: {
    name: '学院网站导航',
    list: [
      {
        icon: 'https://deanservices.swpu.edu.cn/jwapp/sys/homeapp/home/images/favicon.ico',
        text: '门户网站',
        clickEvent: () => {
          window.open('https://www.swpu.edu.cn/')
        }
      },
      {
        icon: 'https://deanservices.swpu.edu.cn/jwapp/sys/homeapp/home/images/favicon.ico',
        text: '选课评教',
        clickEvent: () => {
          window.open(
            'https://deanservices.swpu.edu.cn/jwapp/sys/homeapp/home/index.html'
          )
        }
      },
      {
        icon: 'https://deanservices.swpu.edu.cn/jwapp/sys/homeapp/home/images/favicon.ico',
        text: '二课',
        clickEvent: () => {
          window.open('http://dekt.swpu.edu.cn/SystemForm/main.htm')
        }
      },
      {
        icon: 'https://deanservices.swpu.edu.cn/jwapp/sys/homeapp/home/images/favicon.ico',
        text: '教务处',
        clickEvent: () => {
          window.open(
            'https://www.swpu.edu.cn/dean/searchList.jsp?wbtreeid=1193'
          )
        }
      }
    ]
  },
  toolsWeblication: {
    name: '实用工具',
    list: [
      {
        icon: 'https://img.alicdn.com/imgextra/i1/O1CN01AKUdEM1qP6BQVaYhT_!!6000000005487-2-tps-512-512.png',
        text: '通义千问',
        clickEvent: () => {
          window.open('https://tongyi.aliyun.com/')
        }
      },
      {
        icon: 'https://nlp-eb.cdn.bcebos.com/logo/favicon.ico',
        text: '文心一言',
        clickEvent: () => {
          window.open('https://yiyan.baidu.com/')
        }
      },
      {
        icon: 'https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/web/logo-icon.png',
        text: '豆包',
        clickEvent: () => {
          window.open('https://www.doubao.com/')
        }
      },
      {
        icon: 'https://ydlunacommon-cdn.nosdn.127.net/31cf4b56e6c0b3af668aa079de1a898c.png',
        text: '有道翻译',
        clickEvent: () => {
          window.open('https://fanyi.youdao.com/')
        }
      },
      {
        icon: 'https://www.geogebra.org/apps/icons/graphing.ico',
        text: '函数绘制',
        clickEvent: () => {
          window.open('https://www.desmos.com/calculator?lang=zh-CN')
        }
      },
      {
        icon: 'https://cdn.boardmix.cn/app/favicon.ico?v=1',
        text: '流程图',
        clickEvent: () => {
          window.open('https://boardmix.cn/app/home')
        }
      },
      {
        icon: 'https://www.paperbye.com/favicon.ico',
        text: '论文查重',
        clickEvent: () => {
          window.open('https://www.paperbye.com/')
        }
      }
    ]
  },
  externalApplication: {
    name: '第三方产品导航',
    list: [
      {
        icon: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.wbM1iRIKYFu0IAmBm6wkQQAAAA?rs=1&pid=ImgDetMain',
        text: 'bilibili',
        clickEvent: () => {
          window.open('https://www.bilibili.com/')
        }
      },
      {
        icon: 'https://static.zhihu.com/heifetz/assets/apple-touch-icon-152.81060cab.png',
        text: '知乎',
        clickEvent: () => {
          window.open('https://www.zhihu.com/')
        }
      },
      {
        icon: 'https://lf-web-assets.juejin.cn/obj/juejin-web/xitu_juejin_web/static/favicons/apple-touch-icon.png',
        text: '掘金',
        clickEvent: () => {
          window.open('https://juejin.cn/')
        }
      },
      {
        icon: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
        text: 'CSDN',
        clickEvent: () => {
          window.open('https://www.csdn.net/')
        }
      },
      {
        icon: 'https://www.toolmao.com/wp-content/uploads/2021/03/cnblogs.png',
        text: '博客园',
        clickEvent: () => {
          window.open('https://www.cnblogs.com/')
        }
      }
    ]
  }
}

// 生成渐变色，传入四个参数x1, y1, x2, y2，是左上和右下的坐标；颜色配置，一个数组，每个元素是一个对象，包含 offset 和 color 两个字段，分别表示偏移量和颜色
const gradientColorFac = (
  points: [number, number, number, number],
  colors?: Array<{ offset: number; color: string }>
) => {
  const colorConfigs = colors || [
    {
      offset: 0,
      color: '#5fe4ff'
    },
    {
      offset: 0.4,
      color: '#2e91ff'
    },
    {
      offset: 0.5,
      color: '#666ffd'
    },
    {
      offset: 1,
      color: '#6f42fb'
    }
  ]

  return new echarts.graphic.LinearGradient(...points, colorConfigs)
}

// 折线图公用部分，用于折线图的配置，其中 series 字段是一个数组，每个元素是一个对象，包含 name、data 和其他字段，分别表示系列名称、数据和其他配置
const commonPartOfClockLineChart = {
  type: 'line',
  smooth: true, //是否平滑曲线显示
  showAllSymbol: true,
  symbol: 'circle',
  symbolSize: 14,
  lineStyle: {
    normal: {
      color: gradientColorFac([0, 0, 1, 0])
    }
  },
  itemStyle: {
    normal: {
      color: '#ffffff', //拐点颜色
      borderColor: gradientColorFac([0, 0, 1, 1]), //拐点边框颜色
      borderWidth: 4,
      lineStyle: {
        width: 5.5
      }
    }
  },
  tooltip: {
    show: true
  },
  areaStyle: {
    normal: {
      color: gradientColorFac(
        [0, 0, 0, 1],
        [
          {
            offset: 0,
            color: '#eb64fb'
          },
          {
            offset: 1,
            color: '#3fbbff0d'
          }
        ]
      )
    }
  }
}

// 折线图的配置，数据部分关注 series 字段即可，样式部分则是其余字段
export const clockLineChartOption = {
  title: {
    text: '每周打卡数据',
    left: 'center',
    bottom: '5%',
    textStyle: {
      color: '#fff',
      fontSize: 16
    }
  },
  tooltip: {
    trigger: 'axis',
    // 鼠标经过柱体的背景
    axisPointer: {
      type: 'line',
      z: 0, // 层级（权重）
      lineStyle: {
        type: 'solid', // 将虚线改为实线
        width: 40, // 设置背景的宽度
        color: gradientColorFac(
          [0, 0, 0, 1],
          [
            {
              offset: 0,
              color: '#ffffff77'
            },
            {
              offset: 0.7,
              color: '#b9dbfc77'
            }
          ]
        )
      }
    }
  },
  grid: {
    top: '20%',
    left: '10%',
    right: '10%',
    bottom: '15%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    axisLabel: {
      margin: 18,
      color: '#86909C'
    },
    axisLine: {
      show: true
    },
    axisTick: {
      show: true,
      length: 25,
      lineStyle: {
        color: '#ffffff1f'
      }
    }
  },
  yAxis: [
    {
      type: 'value',
      position: 'left',
      axisLabel: {
        margin: 20,
        color: '#86909C'
      },
      axisTick: {
        show: true,
        length: 15,
        lineStyle: {
          color: '#ffffff1f'
        }
      },
      axisLine: {
        show: false,
        formatter: (val: string) => `${val}h`
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed'
        }
      }
    }
  ],
  // Data 由外部组件配置
  series: [
    {
      name: '打卡时间'
    },
    {
      name: '打卡时间'
    }
  ].map((obj) => ({ ...obj, ...commonPartOfClockLineChart }))
}

// 排行榜配置
export const rankListColumns = [
  {
    title: '排名',
    dataIndex: 'rank'
  },
  {
    title: '用户名',
    dataIndex: 'nickname'
  },
  {
    title: '用户信息',
    dataIndex: 'userInfo',
    render: (row: RankListRow) =>
      `<img src="${row.avatar}" alt="头像" style="width:50px; height:50px;border-radius:50%;"/>`
  },
  {
    title: '当前时长',
    dataIndex: 'currentTime'
  },
  {
    title: '目标时长',
    dataIndex: 'targetTime'
  },
  {
    title: '完成度',
    dataIndex: 'completionRate',
    render: (row: RankListRow) =>
      `${
        row.completionRate !== 0
          ? Math.round(row.completionRate * 100) + '%'
          : row.completionRate
      }`
  },
  {
    title: '状态',
    dataIndex: 'status',
    render: (row: RankListRow) => `${row.status === 1 ? '内卷ing' : '休息中'}`
  }
]

// 年级配置
export const rankListGrades = [
  {
    value: 1,
    text: '2024级'
  },
  {
    value: 2,
    text: '2023级'
  },
  {
    value: 3,
    text: '2022级'
  }
]
