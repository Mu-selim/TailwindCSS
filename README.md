<h1 align="center"><b>Tailwind CSS - code snippet</b></h1>
<div align="center">
  <img alt="Logo" src="Responsive navigation bar/tailwindIcon.svg" width="100" />
</div>
<p align="center">
    <a href="https://tailwindcss.com/">Tailwind CSS</a> is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like <a href="https://getbootstrap.com">Bootstrap</a>, it does not provide a series of predefined classes for elements such as buttons or tables. Instead, it creates a list of "utility" CSS classes that can be used to style each element by mixing and matching. 
</p>

# **Documentation and Licence**
* <a href="#forkingNotes">Important forking notes.</a>
* <a href="#setup">Installation & Set Up.</a>
* <a href="#structure">Directory Structure.</a>


<h2 id="forkingNotes"><b>🚨 Forking this repo (please read!)</b></h2>

if you are asking to use my code for your application, my answer to that question is usually yes, **with attribution**.

I am keeping my code open source, but as you all know, ***plagiarism is bad***. it is a bad thing to find your code in anothor project without giving me ***credit***.  so All I ask of you all is to not claim this effort as your own.

Finally, you can fork this repo and give me credit [Muhammad Selim](https://www.linkedin.com/in/selimjs).


<h2 id="setup"><b>🛠 Installation & Set Up</b></h2>

1. Install [**Node.js**](https://nodejs.org/en/).
2. Initialize package.json
   ```bash
   npm init
   ```
3. Install Tailwind CSS
   ```bash
   npm install -D tailwindcss
   npx tailwindcss init
   ```
4. Configure your template paths
   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {},
   },
   plugins: [],
   }
   ```
5. Start the Tailwind CLI build process
   ```bash
   npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
   ```


<h2 id="structure"><b>Directory Structure</b></h2>

```bash
Component
|--- node_modules
|--- style
|--- |--- input.css
|--- |--- output.css
|--- index.html
|--- main.js
|--- package.json
|--- tailwind.config.js
|--- README.md
```