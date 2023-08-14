const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    env: {
      hideCredentials:true, // quando estivermos usando um token por exemplo o token que estamos passando no header, não vazer
      requestMode: true, // para ter o fb visaul quando esta usando o modo IPI nos tcs- 
     // snapshotOnly: true

    },
    experimentalRunAllSpecs: true,

  },
  fixturesFolder: false,
  video: false,
})
