#!/usr/local/bin/node

import greetingUser from "../components/greetingUser";
import game from "../games/brain-even";

const numbers = [15, 6, 7];

greetingUser();
game(numbers);
