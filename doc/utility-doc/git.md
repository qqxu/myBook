### 仓库迁移

git clone --mirror git@gitlabxxx

cd xxx.git

git remote set-url --push origin git@gitlabxxxxnew
  
git push --mirror

// 删除远程分支
git push origin --delete feature-xx  fix-xx
