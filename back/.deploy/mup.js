module.exports = {
  servers: {
    one: {
      host: '178.62.2.45',
      username: 'root',
      pem: '/Users/adamdawkins/.ssh/id_rsa',
    },
  },

  meteor: {
    name: 'dolphin',
    path: '../',
    servers: {
      one: {},
    },
    env: {
      ROOT_URL: 'http://dolphin.dragondrop.xyz',
      MONGO_URL: 'mongodb://dolphin:wove-thorp-foray@aws-us-east-1-portal.17.dblayer.com:10116/proposals',
    },
  },
};
