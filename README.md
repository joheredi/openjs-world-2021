# Building Strongly-Typed REST Clients With Typescript

This repository contains the code from the _OpenJS World 2021_ talk `Building Strongly Typed REST Clients With Typescript`.

In which we build the Typescript type definitions for a client to work with an imaginary Book Catalog REST API.

The type definitions we create work together with the editor
and the Typescript Language Server to provide help to our users through IntelliSense and Autocomplete.

Some of the features these type definitions enable are:

- strongly-typed resource paths
- resource path template detection and making path parameters required.
- strongly-typed responses
- strongly-typed request payload that help users build the request without the need to go back and forth to the REST documentation.

If you are interested to see how this kind of clients would be used, take a look at the [sample](https://github.com/joheredi/openjs-world-2021/blob/main/src/sample.ts).

If you want to see the type definitions, jump right to the [index.ts](https://github.com/joheredi/openjs-world-2021/blob/main/src/index.ts)

## Questions?

- Feel free to leave any questions or comments you have as an issue in this repo
