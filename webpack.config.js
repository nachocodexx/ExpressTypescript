const path = require('path')
const nodeExternals = require('webpack-node-externals')
const WebpackShellPlugin=require('webpack-shell-plugin')


const config={
    stats:"errors-only",
    target:'node',
    externals:[nodeExternals()],
    mode:'development',
    entry:path.join(__dirname,'src','index.ts'),
    module:{
        rules:[
            {
                test:/\.ts/,
                use:'ts-loader',
                exclude:/node_modules/
            }
        ]
    },
    resolve:{
        extensions:['.ts','.js']
    },
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[]





}

// if(process.env.NODE_ENV !== 'production'){
//     config.plugins.push(new WebpackShellPlugin({onBuildEnd:['nodemon']}))
// }


module.exports=config