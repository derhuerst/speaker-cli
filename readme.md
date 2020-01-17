# speaker-cli

**Command line tool to listen to what you pipe inside.** Remember that the input needs to be raw audio ([PCM](https://en.wikipedia.org/wiki/Pulse-code_modulation)).

```shell
npm i -g speaker-cli
# convert any audio file and play it
ffmpeg -i some-audio.mp3 -f s16le -acodec pcm_s16le - | speaker
```

[![npm version](https://img.shields.io/npm/v/speaker-cli.svg)](https://www.npmjs.com/package/speaker-cli)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/speaker-cli.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Installing

```shell
npm install -g speaker-cli
```

Or use [`npx`](https://npmjs.com/package/npx). ✨


## Usage

```js
Usage:
    speaker

Examples:
    cat some-audio.pcm | speaker
```


## Related

- [`speaker`](https://github.com/TooTallNate/node-speaker) – The library used by this tool.


## Contributing

If you have a question or have difficulties using `speaker-cli`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/speaker-cli/issues).
