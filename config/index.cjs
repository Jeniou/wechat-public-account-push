/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxba8e4600ed60b60f',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '6dd7f432725031a3a517f4e6706963d1',

  PROVINCE: '广东',
  CITY: '佛山',

  USERS: [
    {
      // 想要发送的人的名字
      name: '超级无敌美少女',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o2ChJ6ZBBGfGlnIJ1jvlYSx4jwTs',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'bD09_5JVrZgdybzqKEdYkku6hw9CI_GDZWklL7qlEXk',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '02-25',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '破壳日', name: '宇宙超级无敌美少女', year: '2003', date: '02-25',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2024-01-17' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'E7k__OsZL-sjO3u1gs_zjNEbd_dzdjava4rrKtRk55I',

  CALLBACK_USERS: [
    {
      name: 'Guois',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o2ChJ6Zdl70uICGJL4mOcyIpXiTY',
    }
  ],

}

module.exports = USER_CONFIG

