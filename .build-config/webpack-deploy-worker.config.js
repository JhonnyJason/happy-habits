module.exports = {
    "mode": "production",
    "context": "/home/lenny/thingies/happy-habits",
    "entry": {
        "serviceworker": "/home/lenny/thingies/happy-habits/toolset/build/js/serviceworker.js"
    },
    "output": {
        "filename": "[name].js",
        "path": "/home/lenny/thingies/happy-habits/toolset/build/bundles/deploy"
    }
}