module.exports = {
    configureWebpack: {
        externals: {
            "BMapGL": "BMapGL"
        }
    }
}
// OR
module.exports = {
    configureWebpack: config => {
        config.externals = {
            "BMapGL": "BMapGL"
        }
    }
}
