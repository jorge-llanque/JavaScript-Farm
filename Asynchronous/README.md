# Promises, Async & the Event Loop

- Promises, the most significant ES6 feature.
- Asynchronicity, the feature that makes dynamic web applications possible.
- The event loop, JavaScript's triage.
- Microtask queue, Callback queue and Web Browser features (APIs).

## Asynchronicity is the backbone of modern web development in JavaScript yet

JavaScript is:

- Single threaded (one command runs at a time).
- Synchronouly executed (each line is run in order the code appears).
  So what if we have a task:
- Accesing Twitter's server to get new tweets that takes a long time.
- Code we want to run using those tweets.
