import { createContentLoader } from 'vitepress'
Date.prototype.format = function(fmt) { 
  var o = { 
  "M+" : this.getMonth()+1,                 //月份 
  "d+" : this.getDate(),                    //日 
  "h+" : this.getHours(),                   //小时 
  "m+" : this.getMinutes(),                 //分 
  "s+" : this.getSeconds(),                 //秒 
  "q+" : Math.floor((this.getMonth()+3)/3), //季度 
  "S" : this.getMilliseconds()             //毫秒 
  }; 
  if(/(y+)/.test(fmt)) {
  fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
  }
  for(var k in o) {
  if(new RegExp("("+ k +")").test(fmt)){
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
  }
  }
  return fmt; 
 }

const posts = createContentLoader('src/**/*.md', {
  includeSrc: true, // include raw markdown source?
  render: true,     // include rendered full page HTML?
  excerpt: true,    // include excerpt?
  transform(rawData, siteConfig) {
 
    // map, sort, or filter the raw data as you wish.
    // the final result is what will be shipped to the client.
    return rawData.sort((a, b) => {
      return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
    })
  }
})

export default posts