---
title: pm2
author: Shylock
createTime: 2024/07/09 14:25:40
permalink: /common-commands/idsg5t4e/
comment: false
---

## 启动
启动指定应用，如pm2 start index.js --name httpServer
```bash
pm2 start `script_file|config_file` [options]
```

停止指定应用，如pm2 stop httpServer
```bash
pm2 stop `appName` [options]
```
重启指定应用，如pm2 restart httpServer
```bash
pm2 reload|restart `appName` [options]
```
如果项目没有启动就执行 start  如果项目正在运行 就执行relaod
```bash
pm2 startOrReload `appName`
```
## 查看
把所有pm2启动实例列举出来，注意：pm2 stop 某个项目后，该项目还会存在pm2 list 的列表里面， 只是状态是 stop, 要想去掉该项目，用pm2 delete
```bash
pm2 list
```

显示指定应用详情，如pm2 show httpServer
```bash
pm2 show `appName` [options]
```

查看指定应用的日志，即标准输出和标准错误
```bash
pm2 logs `appName`
```

监控各个应用进程cpu和memory使用情况
```bash
pm2 monit
```

## 删除
删除指定应用，如pm2 delete httpServer，如果修改应用配置行为，最好先删除应用后，重新启动方才生效，如修改脚本入口文件
```bash
pm2 delete `appName` [options]
```

杀掉pm2管理的所有进程
pm2 kill
