include_recipe 'python'

python_pip 'thefuck'

execute "Set zsh at the Default Shell" do
  command "chsh -s $(which zsh) vagrant"
end

execute "Enable Git PreloadIndex Config" do
  command "cd /app && git config core.preloadindex true"
end

execute "CD to Vagrant Dir on Login" do
  command "echo 'cd /app' >> /home/vagrant/.zshrc"
end
