const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
    configureWebpack: {
        resolve: {
            alias: { //配置别名,修改后需要重新编译才能生效
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
								
            }
        }
    }
}