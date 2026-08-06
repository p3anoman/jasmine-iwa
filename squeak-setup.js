
            // will copy error logs to console
            Squeak.debugFiles = false;
		Squeak.platformName = "unix"
            const image = "BridgeDemo.image"
            const changes = "BridgeDemo.changes"
            const appName = "Croquet Jasmine"
            SqueakJS.runSqueak(image, sqCanvas, {
                appName,
                fullscreen: true,
                swapButtons: true,
                spinner: sqSpinner,
                files: [changes, "JasmineV1.sources"],
                root: "/jasmine",
                templates: { "/jasmine": "." },
            })
