const cloud = require("@pulumi/cloud");

let service = new cloud.Service("pulumi-node", {
    containers: {
        node: {
            build: "./Simple-App",
            memory: 128,
            ports: [{ port: 80 }],
            //environment: {process.env.ADMIN_PW }
        },
    },
    replicas: 2,
});

// export just the hostname property of the container frontend
exports.url = service.defaultEndpoint.apply(e => `http://${e.hostname}`);
