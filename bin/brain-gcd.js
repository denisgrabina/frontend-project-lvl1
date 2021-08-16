#!/usr/bin/env node
import { runGameEngine } from '../src/cli.js';
import game from '../src/games/gcd.js';

runGameEngine(game);
