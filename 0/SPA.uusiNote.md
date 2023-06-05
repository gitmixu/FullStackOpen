[comment]: <> (SPA uusi muistiinpano)
sequenceDiagram
    participant browser
    participant server

[comment]: <> (Palvelin vastaa kyselyyn statuskoodilla 201 created. Selain pysyy samalla sivulla ja muita HTTP-pyyntöjä ei suoriteta.)
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: HTML document
    deactivate server
[comment]: <> (SPA uusi muistiinpano)
