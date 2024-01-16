# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version 3.1.2
* Rails 7

* Steps for setup

* rails new rails_on_react_demo --j=esbuild --database=postgresql -c bootstrap

* Gemset: 
    1. rbenv gemset init
    2. rbenv gemset create [version] [gemset]
    3. rbenv gemset list
    4. echo -e "rails_on_react" > .rbenv-gemsets
    5. rbenv gemset active

* bundle install
* cd your_project && npm i react react-dom
* Create a file in: app/javascript/react/src/components/Hello.jsx
*  Install remount:
      With remount we can render our components using simple HTML tags wherever in the project.
        $ npm i remount
* Create index.js file and import it in application.js(// Entry point for the build script in 
  package.json)


* ...# ReactOnRails
