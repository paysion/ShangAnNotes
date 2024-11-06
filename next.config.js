const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
    latex: true,
    normalizeSlashes: true, // 自动修正路径中的重复斜杠
})


module.exports = withNextra({
    // 配置图片域名
    images: {
        domains: ['kaogong-1301372224.cos.ap-nanjing.myqcloud.com'],
    },
    // 将纯 esm 模块转为 node 兼容模块
    transpilePackages: [
        'lodash-es',
        '@ant-design/icons',
        '@ant-design/pro-chat',
        'react-intersection-observer',
        '@ant-design/pro-editor',
        '@ant-design/pro-components'
    ]
})
