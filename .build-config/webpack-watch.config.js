module.exports = {
    "mode": "development",
    "devtool": "none",
    "context": "/home/lenny/thingies/happy-habits",
    "watch": true,
    "entry": {
        "carrothabit": "/home/lenny/thingies/happy-habits/toolset/build/js/carrothabit.js",
        "index": "/home/lenny/thingies/happy-habits/toolset/build/js/index.js"
    },
    "output": {
        "filename": "[name].js",
        "path": "/home/lenny/thingies/happy-habits/toolset/build/bundles/dev"
    }
}