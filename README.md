# Context Based Realtime communication app - _SubText_

## Aim
The project aims to create a Real time Communications WebApp that allows multiple parties,  where a party entails a single user or group of users to communicate in real time over  an internet connection via basic digital communication parameters like text, audio, video but also through higher formatted or derived context such as valid js code, valid HTML/CSS/Js/Ts web code that can be written inline and also run directly from the WebApp.
The parties will also be able to communicate in real time other forms of text that can be transpiled such as markdown and LaTeX, which parties would be able to write directly within the WebApp and also communicate with each other and view in the app itself.
Other form of context that can be added to a never ending context based communication WebApp are (a non exhaustive list): 
Other programming languages that can be compiled and run right from the WebApp such as Java, C, C++, C# etc. 
Having support for Calendar events that can be saved directly to a connected EMail account. Also the ability to create events and send out calendar invites.
Having a construct for polls and voting systems 
Having connected Facebook and Instagram accounts so that connected account based links can be shared in a more context aware manner.
Having a file sense system inbuilt into the WebApp so that the storage on the device where the WebApp is being used is managed intelligently and eliminates the need for the user to dig through the internal file storage and remove items.

## Introduction
There are many real time communication systems in the market where each one of them has many overlapping features but also something unique to offer which has made them popular. In some cases popularity is not a direct result of features or usability but the very simple reason of higher concentration usage in a particular demographic which has stagnated research and development in this field due to user lock in.

The purpose of creating a new WebApp in the already dense market with the plethora of communication systems is that none of the prevelen systems have been designed keeping in mind that various groups have different needs. 

A group where people are sharing cooking recipes and ingredients must provide support for inbuilt Lists so that instead of typing out all the ingredients and quantities the user should be able to add more ingredients to a list and automatically avoid any repetition and also be able to change quantities or any associated value through a UI slider. This transforms the data which was initially just plain UTF-8 text to something that both the system and user understand and can be better quantized during the discussion. And now based on the new recipe received a user will be able to create an alert in their calendar to buy those specific ingredients. 

So, in the above case the communication channel instead of being a dumb participant is actively providing context to the mesages and helpinfg the users become more productive.

Another example can be of a class group where students are discussing doubts with either themselves or the teacher and the questions pertain to a scientific origin and hence involve mathematical equations. If we take normal communication apps that support only text and emojis the person will have to solve the problem on paper then take a picture and share it and if anyone has any suggestions or opinions - they will again have to mention those suggestions on paper, take pictures and then share. This will lead to a communication stream being cluttered with pictures.

The stream should again provide a quantifiable means to this form messages as well. If the WebApp would have the ability to share graphs via Desmos then all participants individually would have been able to modify parameters and right from the app see how the graph behaves under different constraints and also provide users the ability to type in LaTeX and see beautiful app represented equations rather than pictures.

So, with features like this where the app will try and provide meaningful context  in every conversation this WebApp has a very good chance of becoming popular in scientific and technical communities where features such as these are always provided through third parties and then shared via links. Cracking the normal demographic that do not require much high level constructs will be tougher, but simpler constructs such as Voting. Polling, Alerts, Calendar events are sure to make a dent in that demographic as well.

### Goals
Everything including a UTF-8 text message which will be communicated through that WebApp is a higher level construct which tries to provide some context to a message stream. There are several constructs that can be added and the list to improve it will be non exhaustive. But the basic constructs that we would definitely like to include in our system are :-
- UTF-8 text based messages
- UNICODE Standard Emojis
- @ Annotated mentions (Optimistic)
- Giphy GIF’s library (Optimistic)
- Markdown Support
- LaTeX Support
- Web Link Display support (Optimistic)
- Polls (Optimistic)
- Lists (Optimistic)

## Running the App
````shell script
git clone https://github.com/anishLearnsToCode/subtext-client.git 
cd subtext
npm i
ng serve
````

Open on [your browser @ port:4200](localhost:4200)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## External Dependencies 
This application relies on 2 very important parsers, namely to convert from `LaTeX` to `html` and `markdown` to `html`.
Both parsers can be seen below:

- [LaTeX to HTML Parser](https://github.com/anishLearnsToCode/latex-to-html-parser)
- [Markdown to HTML Parser](https://github.com/anishLearnsToCode/md-to-html-parser)

## Examples
### Markdown to HTML
#### Strike Through
```markdown
this is markdown for representing text in ~strikethrough~
``` 

```html
this is markdown for representing text in <strike>strikethrough</strike>
```

#### Ordered Lists
```markdown
Ordered List
1. point 1
1. point 2
1. point 3
```

```html
<p>Ordered List</p>
<ol>
    <li>point 1</li>
    <li>point 2</li>
    <li>point 3</li>
</ol>
```

#### Code
```markdown
`let number = 10;`
```

````html
<pre>
    <code>let number = 10;</code>
</pre>
````
