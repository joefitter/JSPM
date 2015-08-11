'use strict'

import {Orchestra, Radio} from 'jspm-test';
import {Module} from 'jspm-test2';

const channel = Radio.channel('module');
const app = Orchestra.getInstance();

app.module('mod', {
  moduleClass: Module
});

app.start();

channel.request('doSomething');
