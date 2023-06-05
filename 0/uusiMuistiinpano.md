[comment]: <> (Uuden muistiinpanon luonti)
sequenceDiagram
    participant browser
    participant server

[comment]: <> (HTTP POST-pyyntö)
[comment]: <> (Palvelin vastasi pyyntöön HTTP-statuskoodilla 302)
[comment]: <> ((ns. uudelleenohjauspyyntö (redirectaus)))
[comment]: <> (jonka avulla palvelin kehottaa selainta tekemään automaattisesti uuden HTTP GET-pyynnön (headerin Location kertomaan paikkaan (eli notes)))
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server    
[comment]: <> (Uuden muistiinpanon luonti)