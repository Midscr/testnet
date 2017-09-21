const connect = require('./connections');

const getCity = function (callback) {
      connect.query('SELECT * FROM addTable', callback);
      connect.end();
}  
module.exports = getCity;




// const metaTagsTemplates = {
//   title: "Компазитные бассейны недорого в {{}}",
//   description: "Компазитные бассейны в {{}} недорого. Надежные и недорогие компазитные тассейны от дилера в городе {{}}",
//   keyword: "Компазитные бассейны {{}}, Компазитные бессейны недорого, Компазитные басейны под ключ"
// }

// function makeMetaTag(name, city) {
//   return metaTagsTemplates[name].replace(/{{}}/g, city)
// }

// module.exports = [{
//   domainName: "stavropol",
//   prepositionalName: "Ставрополе",
//   name: "Ставрополь",
//   metaTags: {
//     title: makeMetaTag('title', "Ставрополе"),
//     description: makeMetaTag('description', "Ставрополе"),
//     keyword: makeMetaTag('keyword', "Ставрополе"),
//   }
// }, {
//   domainName: "armavir",
//   prepositionalName: "Армавире",
//   name: "Армавир",
//   metaTags: {
//     title: makeMetaTag('title', "Армавире"),
//     description: makeMetaTag('description', "Армавире"),
//     keyword: makeMetaTag('keyword', "Армавире"),
//   }
// }, {
//   domainName: "pyatigorsk",
//   prepositionalName: "Пятигорске",
//   name: "Пятигорск",
//   metaTags: {
//     title: makeMetaTag('title', "Пятигорске"),
//     description: makeMetaTag('description', "Пятигорске"),
//     keyword: makeMetaTag('keyword', "Пятигорске"),
//   }
// }, {
//   domainName: "default",
//   prepositionalName: "вашем городе",
//   name: "ваш город",
//   metaTags: {
//     title: makeMetaTag('title', "вашем городе"),
//     description: makeMetaTag('description', "вашем городе"),
//     keyword: makeMetaTag('keyword', "вашем городе"),
//   }
// }]