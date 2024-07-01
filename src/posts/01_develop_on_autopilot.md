---
title: 'Developer productivity Coding on autopilot'
imgUrl: '/post-images/01_develop_on_autopilot/thumbnail.jpg'
youtubeId: ''
publishedAt: '2024-06-30'
summary: 'Explore ways to make programming more fun and efficient! I share my favorite tools and tips to help you learn faster and ship your projects with ease.'
---

# Enhancing Developer Productivity
# Table of Contents
1. [Touch Typing](#touch-typing)
2. [Window Management](#window-management)
3. [Command Line Interface](#command-line-interface)
    * [iterm2](#iterm2)
    * [Starship](#starship)
    * [Basic Commands](#basic-commands)
    * [Bash Scripting](#bash-scripting)
4. [Git & GitHub](#git--github)
5. [Vim & Vim Tutor](#vim--vim-tutor)
6. [NVChad](#nvchad)
7. [Neovim](#neovim)
8. [Browser](#browser)
9. [Bonus: Building a Portfolio Site](#bonus-building-a-portfolio-site)
    * [Adding Models Using Threlte, Three.js, Autodesk Maya, Blender, Mixamo](#adding-models-using-threlte-threejs-autodesk-maya-blender-mixamo)

## Introduction
Welcome! Let's dive into some cool tools that will take your developer experience to the next
level. It all starts with...

## Touch Typing
Touch typing is essential. It helps you write and remember commands quickly. Start with
[Monkey Type](https://monkeytype.com/), disable everything except characters, and set the time to 
30 seconds. Use your score as a benchmark.

Next, try [Typing](https://www.typing.com/) to get the basics down. Practice 30 minutes a day to 
reach around 20 words per minute. Finally, use [Typing Club](https://www.typingclub.com/) to 
further improve your speed. An honorable mention is [keybr](https://www.keybr.com/) to identify and
improve on keys you frequently miss.

## Window Management
Efficient window management is crucial. I usually have Neovim in the middle and a browser or 
preview app with a book I’m reading.

- Press `Ctrl` + `↑` to open your desktops.
- Press `Ctrl` + `↓` to close your desktop.
- Press `Ctrl` + `←` to navigate to the left desktop.
- Press `Ctrl` + `→` to navigate to the right one.

## Command Line Interface

### iterm2
For running commands, I use [iterm2](https://iterm2.com/) for its enhanced features over the 
default Mac terminal.

Install [brew](https://brew.sh/):
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

The install bash:
```bash
brew install bash
```

Current running shells:
```bash
cat /etc/shells 
```

Change shell from zsh to bash and vice versa:
```bash
chsh -s /bin/bash
chsh -s /bin/zsh
```

### starship
Starship customizes your prompt and works with many shells like zsh and bash.

Install [starship](https://starship.rs/):
```bash
brew install starship
```
It comes with a default configuration, but you can customize it as you like by reading the docs.


### Basic Commands
Here are some basic commands to navigate and modify your file systems: 

```bash
ls    # list files in a directory
cd    # change directory
mkdir # create a directory
touch # create a file
cp    # copy a file 
mv    # move a file 
rm    # remove a file or directory (be cautious)
cat   # display the content of a file
```

To learn more about these commands, use their man page. For example, for the `ls` command:
```bash
man ls
```


### Bash Scripting
Bash scripting is useful for repetitive tasks. For example, create a script to automate starting a 
project. Copy this in a file called project in any directory of your choice.`[username]` is a 
placeholder. Replace with the appropriate one from your computer `username`.

```bash
#!/bin/bash
cd /Users/[username]/Documents/Learning
mkdir $0
cd $0
```

In the terminal run 
```bash
./project productivity
```
This will navigate to your Learning directory, create a folder named "productivity," and change
into that directory.

## Git & GitHub
Feature branch workflow is a great way to collaborate with Git:
```bash
git clone [repository] # Clones the specified repository to your local machine
git checkout [branch-name] # Clones the specified repository to your local machine
git pull # Updates your local repository with the latest changes from the remote repository
git checkout -b [brach-name] # Creates and switches to a new branch named feature-branch
git add -A # Stages all changes (new files, modified files, and deletions) for the next commit
git commit -m "[description]" # Commits the staged changes with a descriptive message
git push -u origin [branch-name] # Pushes the new branch to the remote repository 
```

For more in-depth understand of these commands you can checkout their man pages:
```bash 
man git 
```

## Vim motions
I recommend learning Vim motions. They significantly improve your text editing speed and efficiency.
You don't have to memorize everything right away; practice makes perfect. This is where you can 
truly leverage your touch typing skills, allowing for a smoother and more productive workflow. You 
can start learning directly from your command line interface by running:
```bash
vitutor
```

## NVChad
After learning Vim motions, you can use Vim motions in your editor of choice, like VSCode or PyCharm. 
However, there's also Neovim, which offers more flexibility in customizing your personal 
development environment (PDE). To bridge the barrier to entry, I recommend using NVChad. It is an 
already configured PDE that you can try until you're comfortable configuring your own.

One of the requirement installing noevim 
```bash
brew install neovim
```
Clones [NvChad](https://nvchad.com/docs/quickstart/install) in `~/.config/nvim`
```bash
git clone https://github.com/NvChad/starter ~/.config/nvim && nvim
```
Run :MasonInstallAll command after lazy.nvim finishes downloading plugins.
Delete the .git folder from nvim folder.
```bash
rm ~/.config/nvim/.git from your root directory
```

## Neovim
To configure my own configuration. The resources were the most helpful.
- [typecraft](https://youtube.com/playlist?list=PLsz00TDipIfd500OiPVRyZIc9TLHRRgIM&si=-0kk2tyhMImXrC2B) playlist on how to configure neovim 
- [Josean Martinez](https://youtu.be/6pAG3BHurdM?si=uuX2_-5RSLobhOa3) neovim setup.

## Browser
## Browser
I use Arc. I has keymaps keymaps I use the most.
- `cmd` + `r` to reload a site.
- `cmd` + `option`+ `j` to open the developer tool. 

## Bonus: Programming a blog you are reading this from.
Checkout my youtube video one how I use my set up to make the blog containg to post.
### Adding Models Using Threlte, Three.js, Autodesk Maya, Blender, Mixamo
## Devs see you on the next burst.
