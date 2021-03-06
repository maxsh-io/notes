module.exports = [
    { text: '主页', link: '/' },
    {
        text: '练习项目',
        items: [
            {text: 'SpringBoot集成MyBatisPlus', link: '/01_proj/springboot_mybatisplus'},
        ]
    },
    {
        text: '学习笔记', items: [
            {
                text: '后端笔记', items: [
                    {text: 'java', link: '/04_java/'},
                    {text: 'spring', link: '/06_spring/'},
                    {text: 'springboot', link: '/07_springboot/'}
                ]
            }, {
                text: 'Linux',
                items: [{text: 'linux', link: '/05_linux/'}]
            }
        ]
    },
    {
        text: '工具',
        items: [
            { text: 'markdown语法', link: '/02_guide/', target:'_blank'},
            {text: 'Docker绿皮书', link: 'http://docs.nigeerhuo.com/docker'},
            {text: '用命令行生成目录结构树', link: '/08_tool/01_tree'},
            {text: 'freemarker在线手册', link: 'http://freemarker.foofun.cn/dgui_template_overallstructure.html'},
        ]
    },
    { text: 'about', link: '/03_about/', target:'_self', rel:'' },
    { text: 'Gitee', link: 'https://gitee.com/'},
]
