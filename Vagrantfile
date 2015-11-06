# encoding: utf-8
# This file originally created at http://rove.io/1165d13ffb2e91abf0bd5c2285c24fa0

# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "opscode-ubuntu-12.04_chef-11.4.0"
  config.vm.box_url = "https://opscode-vm-bento.s3.amazonaws.com/vagrant/opscode_ubuntu-12.04_chef-11.4.0.box"
  config.ssh.forward_agent = true

  config.vm.network "private_network", ip: "10.10.10.10"
  config.vm.network :forwarded_port, guest: 9000, host: 9000
  config.vm.network :forwarded_port, guest: 35729, host: 35729

  # See NOTE1
  config.vm.synced_folder "./", "/app/", type: "nfs",  mount_options: ['rw', 'vers=3', 'tcp', 'fsc' ,'actimeo=2']

  config.vm.provision :chef_solo do |chef|
    chef.cookbooks_path = ["cookbooks", "cookbooks-local"]
    chef.synced_folder_type = "nfs"
    chef.add_recipe :apt
    chef.add_recipe 'git'
    chef.add_recipe 'nginx'
    chef.add_recipe 'mongodb::default'
    chef.add_recipe 'nodejs::nodejs_from_binary'
    chef.add_recipe 'oh_my_zsh'
    chef.add_recipe 'cachefilesd' # See NOTE1
    chef.add_recipe 'dev-environment'
    chef.json = {
      :mongodb => {
        :dbpath  => "/var/lib/mongodb",
        :logpath => "/var/log/mongodb",
        :port    => "27017"
      },
      :git     => {
        :prefix => "/usr/local"
      },
      :nginx   => {
        :dir                => "/etc/nginx",
        :log_dir            => "/var/log/nginx",
        :binary             => "/usr/sbin/nginx",
        :user               => "www-data",
        :init_style         => "runit",
        :pid                => "/var/run/nginx.pid",
        :worker_connections => "1024"
      },
      :nodejs => {
        :version => "4.2.2",
        :npm => "2.14.7"
      },
      :oh_my_zsh => {
        :users => [{
          :login => "vagrant",
          :home => "/home/vagrant",
          :theme => "kolo",
          :plugins => ["git", "git-extras", "thefuck"]
        }]
      }
    }
  end

  # See NOTE1
  config.vm.provision :shell, inline: "pushd /app && git config core.preloadindex true"
end

## NOTES
## NOTE1: Improves NFS Performance (https://chase-seibert.github.io/blog/2014/03/09/vagrant-cachefilesd.html)
