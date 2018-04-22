### 打开三种配置文件的方法

执行下面这个命令：如果是Linux将打开 `/工作区目录/.git/config`文件, 如果是Windows:与Linux一样 
git config -e（打开版本库级别配置文件）

执行下面这个命令：如果是Linux将打开 `/home/用户主目录/.gitconfig`文件, 如果是Windows将打开:”`C:/Users/Administrator/.gitconfig` 
git config -e - -global（打开全局配置文件）

执行下面这个命令：如果是Linux将打开 `/etc/.gitconfig`文件, 如果是Windows将打开:”`/Git安装目录/mingw64/etc/gitconfig`（如果Git安装在非标准位置，则这个配置文件位置可能不同） 
git config -e –system（打开系统级配置文件）

在 Windows 系统上，Git 会找寻用户主目录下的 .gitconfig 文件。主目录即 $HOME 变量指定的目录，一般都是 C:\Documents and Settings\$USER。此外，Git 还会尝试找寻 /etc/gitconfig 文件，只不过看当初 Git 装在什么目录，就以此作为根目录来定位。

Git的三个配置文件读取优先级：版本库级别配置文件>全局配置文件->系统级配置文件

版本库级别配置文件会覆盖全局配置文件，全局配置文件覆盖系统级别配置文件，仅覆盖相同的值。

### 三个配置文件的作用

版本库级别配置文件:无论你当前在用的库是什么，特定指向该单一的库 
全局配置文件:所有用户共同的配置 
系统级别配置文件:包含了适用于系统所有用户和所有库的值

### 避免每次push都需要输入用户名和密码
#### 方法一
```
git remote set-url origin git@github.com:username/repo.git
```

#### 方法二
```
$ git config credential.helper store
$ git push https://github.com/repo.git

Username for 'https://github.com': <USERNAME>
Password for 'https://USERNAME@github.com': <PASSWORD>

git config --global credential.helper 'cache --timeout 7200'
```