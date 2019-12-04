#!/usr/local/bin/node

import greetingUser from "../components/greetingUser";
import showRules from "../brain-even/showRules";
import controller from "../brain-even/controller";

const numbers = [15, 6, 7];

greetingUser();
showRules();
controller(numbers);
