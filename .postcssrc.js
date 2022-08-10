// ESM(ECMA Script Module) 방식 
// 브라우저에서 사용하는 가져오기 내보내기 방식
// import
// export

// CommonJS 방식
// Node.js에서 사용하는 가져오기 내보내기 방식
//import
const autoprefixer = require('autoprefixer');

// export {
//   plugins: [
//     autoprefixer
//   ]
// };

module.exports = {
  plugins: [
    autoprefixer
  ]  
};

// module.exports = {
//   plugins: [
//     requires('autoprefixer')
//   ]
// }