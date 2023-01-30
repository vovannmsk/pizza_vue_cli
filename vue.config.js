const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/styles/styles.scss";
        `
      },
      scss: {
        additionalData: `
          @import "@/assets/styles/styles.scss";
        `
      }

    }
  }
})


//module.exports = {
//  devServer: {
//    proxy: 'http://localhost:8000/api/v1/generic/list'
//  }
//}
// module.exports = {
// module: {
//   rules: [
//       {
//         test: /\.s[ac]ss$/i,
//         use: [
//           "style-loader",
//           "css-loader",
//           {
//             loader: "sass-loader",
//             options: {
//               // Prefer `dart-sass`
//               implementation: require("sass"),
//             },
//           },
//         ],
//       },
//     ],
//   },
// };

