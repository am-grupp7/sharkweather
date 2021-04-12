# sharkweather

## Install and buildinstructions

Navigate in your terminal of choice to a directory where you would like to store the project. 

Run this command to clone the project.
```
git clone git@github.com:am-grupp7/sharkweather.git
```
When the project is completly downloaded to your machine you will use node to build it. 

Use this command to make node download all necessary files.
```
npm install
```
(If the command is not recognized, it might meen that you haven't installed node yet. If you haven't, please install it from https://nodejs.org/en/download/)

When all files have been downloaded, installed and node gives you a "build complete"-message you should be ready to build the project.

```
npm run build
```

## Run the project

## Alternative 1 - With Node

1. Run this command, and keep the terminal open.

    ```
    npm run serve
    ```

2. Navigate in your favourite browser to the given IP. Usually localhost:8080.

## Alternative 2 - With VScode and live server
(<https://ritwickdey.github.io/vscode-live-server/>)
Navigate to the project and open the "dist" folder with VSCode.
Press the "Go Live" button in the bottom right corner of VScode and the project should open in your default browser. If you cannot see this button, make sure you have installed Live Server correctly and restart VSCode.
