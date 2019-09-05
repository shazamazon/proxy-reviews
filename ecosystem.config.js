module.exports = {
  apps: [{
    name: 'fec_proxy',
    script: 'server/server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-207-233-156.compute-1.amazonaws.com',
      key: '~/.ssh/hratx43-FEC-proxy.pem',
      ref: 'origin/master',
      repo: 'git@github.com:shazamazon/proxy-reviews.git',
      path: '/home/ubuntu/',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}