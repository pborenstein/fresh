#! /usr/bin/env bash

# from https://stackoverflow.com/a/50996201/285528

git clone --depth 1 --origin source   git@github.com:pborenstein/fresh.git  pb.frish

cd pb.frish

START_COMMIT=$(git rev-list master|tail -n 1)
# 8f2b66476319f7a27453abef64ffd399a22495c1

git checkout $START_COMMIT
# detached head 

git checkout --orphan temp
git commit -m "Initial commit"
# lots of output everything being brought into temp 

git rebase --onto temp $START_COMMIT master

hub create pb.frish 

# $ git remote -v
# origin	git@github.com:pborenstein/pb.frish.git (fetch)
# origin	git@github.com:pborenstein/pb.frish.git (push)
# source	git@github.com:pborenstein/fresh.git (fetch)
# source	git@github.com:pborenstein/fresh.git (push)


git push -u origin master
