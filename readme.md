# speaker-cli

**Command line tool to listen to what you pipe inside.** Remember that the input needs to be raw audio ([PCM](https://en.wikipedia.org/wiki/Pulse-code_modulation)).

```shell
npm i -g speaker-cli
# convert any audio file and play it
cat foo.mp3 | ffmpeg -i pipe:0 -f s16le -acodec pcm_s16le - | speaker
```

[![npm version](https://img.shields.io/npm/v/speaker-cli.svg)](https://www.npmjs.com/package/speaker-cli)
[![build status](https://img.shields.io/travis/derhuerst/speaker-cli.svg)](https://travis-ci.org/derhuerst/speaker-cli)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/speaker-cli.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)


## Installing

```shell
npm install derhuerst/speaker-cli
```


## Usage

```js
todo
```


## Contributing

If you have a question or have difficulties using `speaker-cli`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/speaker-cli/issues).
