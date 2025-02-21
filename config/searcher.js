module.exports = [
  {
    "url": "http://se.qidian.com/",
    "query": "kw=%title%",
    "name": ".qidian.com"
  },
  {
    "url": "https://book.qq.com/api/booksearch/query?keyWord=%title%&pageNo=1&pageSize=50",
    "parse": "data.data.bookList.map((x,i)=>['https://book.qq.com/book-detail/'+x.bid,x.title])",
    "name": ".qq.com"
  },
  {
    "url": "http://ebook.qq.com/search/index/keyWord/%title%.html",
    "name": ".qq.com"
  },
  {
    "url": "http://yuedu.sogou.com/search",
    "query": "keyword=%title%",
    "name": ".sogou.com"
  },
  {
    "url": "http://search.zongheng.com/s",
    "query": "keyword=%title%",
    "name": ".zongheng.com"
  },
  {
    "url": "https://search.17k.com/search.xhtml",
    "query": "c.st=1&c.q=%title%",
    "selector": "div.textmiddle > dl > dt > a",
    "name": ".17k.com"
  },
  {
    "url": "https://cn.bing.com/search",
    "query": "q=%title%&sitequery=www.jjwxc.net",
    "selector": ".b_title h2 a",
    "replace": [{".*《(.*)》.*":"$1"}],
    "filter": "http://www.jjwxc.net/onebook.php\\?novelid=\\d+",
    "name": "www.jjwxc.net"
  },
  // {
  //   "url": "http://yc.ireader.com.cn/index.php",
  //   "query": "ca=search.index&ajax_load=1&channel=all&category=&min_category=&lzstatus=&is_vip=&charnum=&updatetime=&keyword=%title%&order=default",
  //   "name": ".ireader.com"
  // },
  {
    "url": "https://www.readnovel.com/search",
    "query": "kw=%title%",
    "name": ".readnovel.com"
  },
  // {
  //   "url": "http://ireader.com.cn/index.php",
  //   "query": "ca=search.index&pca=channel.index&keyword=%title%",
  //   "name": ".ireader.com"
  // },
  {
    "url": "http://www.laikan.com/about/searchResult",
    "dataType": "json",
    "query": "value=%title%",
    "selector": "a.bigpic-book-name",
    "name": ".laikan.com"
  },
  {
    "url": "https://www.hongshu.com/homeajax.do",
    "method": "POST",
    "dataType": "json",
    "data": "method=search&Pclassids=&classids=&free=0&finish=0&charnum=0&updatetime=0&keyword=%title%&keywordtype=2&order=0&page=1&pagesize=25",
    "parse": "data.bookinfo.map(x=>['http://www.hongshu.com/book/'+x.bid+'/',x.catename])",
    "name": ".hongshu.com"
  },
  // {
  //   "url": "https://b.faloo.com/l/0/1.html",
  //   "query": "t=0&k=%title%",
  //   "charset": "gbk",
  //   "name": ".faloo.com"
  // },
  // {
  //   "url": "http://mm.faloo.com/girl/0/1.html",
  //   "query": "t=0&k=%title%",
  //   "charset": "gbk",
  //   "name": ".faloo.com"
  // },
  // {
  //   "url": "http://so.ihuaben.com/search",
  //   "query": "keyword=%title%",
  //   "name": ".ihuaben.com"
  // },
  // {
  //   "url": "http://so.kanshu.com/searchList/searchListGO",
  //   "query": "searchtype=0&sort=2&keys=%title%",
  //   "replace": "作者：.*",
  //   "name": ".kanshu.com"
  // },
  // {
  //   "url": "https://www.xs8.cn/search",
  //   "query": "kw=%title%",
  //   "name": ".xs8.cn"
  // },
  // {
  //   "url": "http://www.xxsy.net/search",
  //   "query": "s_wd=%title%",
  //   "selector": ".title > a",
  //   "name": ".xxsy.net"
  // },
  {
    "url": "https://www.hongxiu.com/so/%title%",
    "name": ".hongxiu.com"
  },
  // {
  //   "url": "http://www.zhulang.com/search/index.html",
  //   "method": "post",
  //   "data": "k=%title%",
  //   "name": ".zhulang.com"
  // },
  {
    "url": "https://www.yousuu.com/search/",
    "query": "search_type=title&search_value=%title%&from=search",
    "selector": "a.book-name",
    "name": ".yousuu.com"
  },
  // {
  //   "url": "http://book.tiexue.net/SearchResults.aspx",
  //   "query": "keywords=%title%&noveltype=1",
  //   "charset": "unicode",
  //   "name": ".tiexue.net"
  // },
  {
    "url": "https://search.heiyan.com/web/search",
    "query": "queryString=%title%&highlight=false&page=1",
    "headers":{
      "referer": "https://www.heiyan.com/search"
    },
    "parse": "data.data.content.map(x=>['https://www.heiyan.com/book/'+x.id,x.name])",
    "name": ".heiyan.com"
  },
  {
    "url": "http://search.ruochu.com/web/search",
    "query": "queryString=%title%&highlight=false&page=1",
    "headers":{
      "referer": "http://www.ruochu.com/search"
    },
    "parse": "data.data.content.map(x=>['https://www.ruochu.com/book/'+x.id,x.name])",
    "name": ".ruochu.com"
  },
  // {
  //   "url": "http://book.km.com/search.html",
  //   "query": "keyword=%title%",
  //   "charset": "gbk",
  //   "selector": ".info a",
  //   "name": ".km.com"
  // },
  // {
  //   "url": "http://3gsc.com.cn/search/index/show/pic",
  //   "method": "post",
  //   "data": "search_key=%title%&ver=new&keytype=1",
  //   "selector": "a.Article",
  //   "name": "3gsc.com.cn"
  // },
  // {
  //   "url": "http://www.tadu.com/search",
  //   "method": "post",
  //   "data": "query=%title%",
  //   "name": ".tadu.com"
  // },
  // {
  //   "url": "http://www.kujiang.com/search",
  //   "query": "keyword=%title%",
  //   "name": ".kujiang.com"
  // },
  {
    "url": "http://yuedu.163.com/search.do",
    "query": "key=%title%&type=4&docType=json",
    "parse": "data.data.map(x=>[x.sumUrl,x.title])",
    "name": ".163.com"
  },
  // {
  //   "url": "http://www.xiang5.com/search.php",
  //   "query": "keyword=%title%",
  //   "selector": "div.textmiddle > dl > dt > a",
  //   "name": ".xiang5.com"
  // },
  // {
  //   "url": "http://www.shuhai.com/search/%title%?formhash=2382a444",
  //   "headers": {
  //       "referer":"http://www.shuhai.com/search/"
  //   },
  //   "name": ".shuhai.com",
  //   "selector": ".name a"
  // },
  // {
  //   "url": "http://www.cjzww.com/search.html",
  //   "query": "searchType=All&searchKey=%title%",
  //   "name": ".cjzww.com"
  // },
  {
    "url": "https://book.douban.com/subject_search",
    "query": "search_text=%title%",
    "name": ".douban.com"
  },
  // {
  //   "url": "http://so.fmx.cn/so/",
  //   "query": "q=%title%&f=articlename",
  //   "charset": "gbk",
  //   "selector": ".so_text a",
  //   "name": ".fmx.cn"
  // },
  {
    "url": "http://www.ycsd.cn/search",
    "query": "key=%title%",
    "name": ".ycsd.cn"
  },
  {
    "url": "http://www.longyuedu.com/index/search.html",
    "method": "post",
    "charset": "gbk",
    "data": "ecmsfrom=9&searchtype=all&classid=1&searchkey=%title%&t_btnsearch=%E6%90%9C%E7%B4%A2&__hash__=599b88f945f9fb401050100d36e4b9f7_91234931c5fed2a671cd9e38a171417b",
    "name": ".longyuedu.com",
    "selector": ".shuku_z_xq a"
  },
  {
    "url": "http://www.ciweimao.com/get-search-book-list/0-0-0-0-0-0/全部/%title%/1",
    "name": ".ciweimao.com",
    "selector": "p.tit a"
  },
  {
    "url": "https://www.8kana.com/www/search/",
    "data": "keyword=%title%",
    "method":"POST",
    "headers":{
      "Cookie":"keyword="
    },
    "selector": ".results_del_R_book a",
    "name": ".8kana.com"
  },
  {
    "url": "http://s.sfacg.com/",
    "query": "Key=%title%&S=1&SS=0",
    "selector": "a.orange_link2",
    "name": ".sfacg.com"
  },
  {
    "url": "https://pre-api.youdubook.com/api/searchAll",
    "method": "POST",
    "dataType": "json",
    "data": "page=1&pageSize=10&search_type=novel&search_value=%title%",
    "name": ".youdubook.com",
    "parse": "data.data.data.map(x=>['https://www.youdubook.com/bookdetail/'+x.novel_id,x.novel_name])"
  },
  {
    "url": "http://www.ebtang.com/book/search",
    "data": "searchName=%title%",
    "name": ".ebtang.com"
  },
  {
    "url": "https://www.yueduyun.com/search",
    "query": "keyword=%title%",
    "selector":"td a",
    "name": ".yueduyun.com"
  },
  {
    "url": "http://www.bayueju.com/modules/article/search.php",
    "method": "POST",
    "query": "searchtype=all&modtype=article&searchkey=%title%",
    "selector": ".c_subject a",
    "name": ".bayueju.com"
  },
  {
    "url": "http://www.qwsy.com/shuku.aspx",
    "query": "Action=QuickSearch&RadioGroup=searchwriting&QueryType=1&keyword=%title%",
    "headers": {
      "Accept-Encoding": ""
    },
    "selector": ".results_text > div.title > a:nth-child(1)",
    "name": ".qwsy.com"
  },
  {
    "url": "http://www.tiandizw.com/search.php/newindex",
    "query": "keyword=%title%",
    "name": ".tiandizw.com"
  },
  {
    "url": "https://www.sxyj.net/Book_Search.html",
    "query": "keyword=%title%",
    "name": ".sxyj.net"
  }
]