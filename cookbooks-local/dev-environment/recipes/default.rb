execute "Set zsh at the Default Shell" do
  command "chsh -s $(which zsh) vagrant"
end

execute "Enable Git PreloadIndex Config" do
  command "cd /app && git config core.preloadindex true"
end
