module.exports = {
  pwa: {
    name: 'K53',
    themeColor: '#FFEB3B',
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: "/",
          handler: "networkFirst"
        }
      ]
    }
  }
}