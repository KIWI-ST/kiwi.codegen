
import { Block } from './../src/index';

const block = new Block();

const DEF_NAME = block.def([242, 33, 4]);

//console as funcion
const r = block.compile();

console.log(r);