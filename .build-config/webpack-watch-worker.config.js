module.exports = {
    "mode": "development",
    "devtool": "none",
    "context": "/home/lenny/thingies/happy-habits",
    "watch": true,
    "entry": {
        "serviceworker": "/home/lenny/thingies/happy-habits/toolset/build/js/serviceworker.js"
    },
    "output": {
        "filename": "[name].js",
        "path": "/home/lenny/thingies/happy-habits/toolset/build/bundles/dev"
    }
}