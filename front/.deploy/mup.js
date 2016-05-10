module.exports = {
  servers: {
    one: {
      host: '178.62.33.50',
      username: 'root',
      pem: '/Users/adamdawkins/.ssh/id_rsa',
    },
  },

  meteor: {
    name: 'myapp',
    path: '../',
    servers: {
      one: {},
    },
    env: {
      ROOT_URL: 'http://proposals.dragondrop.uk',
      MONGO_URL: 'mongodb://proposals:newel-recline-excel@aws-us-east-1-portal.17.dblayer.com:10116/proposals',
    }
  },
};
