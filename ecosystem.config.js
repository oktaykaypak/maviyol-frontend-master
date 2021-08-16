module.exports = {
  apps: [
    {
      name: 'Maviyyo',
      exec_mode: 'cluster',
      instances: 'max',
      script: 'yarn',
      args: 'start',
    },
  ],
}
