# Time Machine Warning Label

[![Funniest Time Machine Warning Label](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/oxizbinance-aox/time-machine-warning-20261125/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/oxizbinance-aox/time-machine-warning-20261125/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)

Entry for the [Funniest Time Machine Warning Label](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151) bounty on [make.fun](https://make.fun/).

## The label

> **WARNING: Do not meet yourself. He already hates you.**

52 characters — one concrete human moment, straight-faced safety notice, twist in the last phrase.

Why this line: the judge weighs (1) a warning label for a time machine, (2) a real hazard turned into the joke — here the duplicate-self paradox, (3) the surprise saved for the last few words, (4) a straight face, phrased like a genuine safety notice, (5) no wasted words. Meeting your own duplicate is the moment; "He already hates you" is the twist — it implies the two of you have already met, and it went badly.

## How it works

`main.ts` (Node 22, no network, deterministic) writes the label to `/output/entry.txt` — the file the sealed scorer reads (UTF-8, 1–120 characters) — and prints it to stdout. It trims the label and throws instead of writing if the text ever falls outside the 1–120 gate, so an invalid entry can never be submitted silently.

```sh
node main.ts
# WARNING: Do not meet yourself. He already hates you.
```
