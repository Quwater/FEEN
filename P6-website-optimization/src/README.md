# 网站性能优化项目

## 优化步骤

### 图片

压缩本地图片

### HTML(index.html)

1. 压缩 html css 文件
2. 去除web字体，最小化网络发送数据量
3. 给 js 文件添加 async 属性，缩短关键渲染路径
4. 给非关键 css 文档加上媒体查询属性，缩短关键渲染路径
5. 将比较小的外部样式表改为内部样式表，减少关键资源数量

### HTML(piza.html)

1. 压缩 html css 文件
2. 将比较小的外部样式表改为内部样式表，减少关键资源数量
3. 压缩图片，利用 html5 srcset 来根据大小选择合适的图片

### JavaScript(js/main.js)

1. 修改changePizzaSizes( )，updatePositions(),将样式更改移出循环，以免强制同步布局
2. 将document.getElementById()赋值语句移除循环，以免进行无意义的循环遍历
3. 减少背景披萨数量
