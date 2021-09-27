## shell


```
cat /etc/shells 查看系统已安装的shell

chsh -s /bin/zsh 设置 shell

omz update  升级 oh-my-zsh

```
### oh-my-zsh
- 安装 
```
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"


```


source ~/.zshrc 出现  check_for_upgrade.sh: line 32: syntax error near unexpected token `)' 问题

```
zsh
chsh -s $(which zsh)   设置 shell
```

每次新开终端 都会是 zsh，并没有omz，使用 zsh 即可，所以在 $HOME/.bashrc 输入zsh，这样每次打开终端就会自动输入一次zsh命令

```
vim ~/.bashrc
zsh

source ~/.bashrc

```

###  卸载 oh-my-zsh
进入到.oh-my-zsh/tools目录

```
cd .oh-my-zsh/tools
chmod +x uninstall.sh
./uninstall.sh
rm -rif .zshrc

```


### 安装 z 插件
快速跳转文件目录

```
vim ~/.zshrc

plugins=(
    git
    z
)

source ~/.zshrc

```

使用其他命令，如 nvm use 13 ，提示命令 无法找到

```
vim ~/.zshrc

// 最后一行添加
source ~/.bash_profile


source ~/.zshrc

```