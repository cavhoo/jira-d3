# jira-d3
A library for parsing jira responses to something that D3.js understands.
## Goal
The goal of this library is to provide programatic apis that take responses
from a JIRA server and translate them into something that D3.js can understand.
The reason for this is that the reports offered by JIRA Cloud are not very extensive,
and also not very exhaustive. Most functionality can only be achieved by purchasing expensive
plugins. This library aims at providing the base for UI libraries that want to build something
to display reports of their own.

## Future
This library marks the base of a UI library that is suppose to be written with React and D3.js
to display a set of graphs for JQL queries and other stuff that Jira can show to generate a 
vast majority of reporting graphs. That then can be embedded in web frontends, that don't
require the use of a Jira account.
