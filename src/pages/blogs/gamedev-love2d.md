---
layout: ../../layouts/BlogLayout.astro
title: "GameDev with love(2d)"
author: ["Renato Sanchez"]
tags: ["GameDev"]
date: 2024-07-23
---

Love2d is a nice game framework to enter into game dev, that's because a lot of engines works with concepts pretty complex behind all these stuff. For this reason, I've started using Love2d on personal basic projects, so I'm here to explain to you how start on this way.

## Love2d Install

For run Love2d, first we have to install Lua, which is a powerful programming language used in a lot of actual projects like **Neovim, Web Apps and Roblox map-making**.

On Windows (Chocolatey ):

```bash
choco install lua53
```

On Ubuntu:

```bash
sudo apt install lua5.3 #or other versions
```

On others systems:

```bash
#------- Brew -------
brew install lua

#------- Arch based (pacman) -------
sudo pacman -S lua

#------- On RHEL, CentOS, Rocky & AlmaLinux -------
 yum install epel-release
 yum install lua

#------- On Fedora Linux -------
 dnf install lua
```

Once you have installed Lua, Love2d will be available. I recommend that you visit the [official website](https://love2d.org/) and follow the instructions depending on your system.

## Game structure

Love2d works in 3 basic functions: `load(), update(), draw()`. Each of the previous functions must be declared on the principal file name **main.lua** which is essential to run Love2d (where's all of the physics, classes, objects and stuff of the game).

### main.lua

Here we going to write our first Love2d game! *So let's go*. First we need put the previous functions inside the `main.lua` file.

```lua
function love.load() end
function love.update(dt) end
function love.draw() end
```

Now let's talk about them.

#### `love.load()`
#### `love.update(dt)`
#### `love.draw()`