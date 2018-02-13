# Web Application Development Basics

## Main Components of a modern web application

### Old versus new stack

#### old
Server side rendering
Each webpage is a new request

Problem: Only for a small number of clients
functionality is bound to HTML-Code

Old JavaScript

#### New
Business-logic stays in the backend
Visualization depends on client
Restifying of the backend

client side html rendering
AJAX and Rest
ES6 an beyond with compiler aka babel or typescript

### Client-Server Communication

https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods

- Wie funktioniert die Client-Server Kommunikation (http-Protokoll, …)

Actual Version is HTTP/2,
mostly used ist HTTP/1.0 1.1
Stateless, Clear
-> Sessions with Session-IDs
-> SSL with HTTPS

HTTP Header
Message Body

URL URL-Encoding

Future:
HTTP/2 backwards compatible
- multiplex
- compression (HPACK)
- binary encoded
- push

https://en.wikipedia.org/wiki/List_of_HTTP_header_fields

Example

Request:

    GET /index.html HTTP/1.1
    Host: www.example.com

Response:

    HTTP/1.1 200 OK
    Date: Mon, 23 May 2005 22:38:34 GMT
    Content-Type: text/html; charset=UTF-8
    Content-Encoding: UTF-8
    Content-Length: 138
    Last-Modified: Wed, 08 Jan 2003 23:11:55 GMT
    Server: Apache/1.3.3.7 (Unix) (Red-Hat/Linux)
    ETag: "3f80f-1b6-3e1cb03b"
    Accept-Ranges: bytes
    Connection: close

    <html>
    <head>
      <title>An Example Page</title>
    </head>
    <body>
      Hello World, this is a very simple HTML document.
    </body>
    </html>


#### GET
Byte restriction 255byte

#### POST
Body

#### HEAD
Same as Get with no body
for example browser cach

#### PATCH
Alters a document without replacing it

#### DELETE

#### TRACE
echos a request. Good for debugging

#### OPTIONS
Serverside methods

#### CONNECT
Proxy with SSL-Tunnel

### REST
Uses HTTP Methods
GET, POST, PUT/PATCH, DELETE

https://en.wikipedia.org/wiki/Representational_state_transfer

RESTful API Description Languages
https://en.wikipedia.org/wiki/Overview_of_RESTful_API_Description_Languages



## Status Codes

https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#4xx_Client_errors


1xx Information
2xx Success
3xx Redirect
4xx Client Error
5xx Server Error


## Anaylizing the communication

How send request and get the response to a server and to analyze them.

### Chrome Developer Tools

https://developers.google.com/web/tools/chrome-devtools/

- Network
- Console
- JavaScript Debugger

### Postman

## Sending and retrieving information with JavaScript

### Basic XHR Example

XHR, Promise

## Debugging JavaScript

XHR log
breakpoints

- Network
- Console
- JavaScript Debugger

## Part 3 - Deeper Dive

### Issue A: Recurring Visitors

- Cookies und Sessionmanagement
- Zweck der Cookies
- Identifikation des Clients über eine Session

### Issue B: Authentification

https://en.wikipedia.org/wiki/Basic_access_authentication


- Main issues during the authentification process
- SSL
- Basic Authentification - RFC 2617
- Common Methods


## Part 4 - Live Example Angular and json-server

- We will walk throuch a simple client-server application built on Angular 5 and a mockup server

- Architektur einer modernen Webapplikation (am Beispiel einer Angular Applikation)
- Aufbau der Angular-Applikation (Dependency Injection, wichtige Komponenten, …)

Basic Authentification with Angular:

    import {Injectable} from '@angular/core';
    import {Http, Headers} from '@angular/http';

    @Injectable()
    export class ApiService {

       constructor(private _http: Http) {}

       call(url): Observable<any> {
          let username: string = 'username';
          let password: string = 'password';
          let headers: Headers = new Headers();
          headers.append("Authorization", "Basic " + btoa(username + ":" + password));
          headers.append("Content-Type", "application/x-www-form-urlencoded");
          return this._http.post(url, data, {headers: headers})
        }
    }


## Part 5 - Finish

https://swagger.io

https://raml.org/

https://www.getpostman.com/
