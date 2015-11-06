#!/usr/bin/env bash

gem install chef
gem install librarian-chef
librarian-chef install
vagrant plugin install vagrant-vbguest
vagrant up
