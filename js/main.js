const randomize = (start,end) => Math.round(Math.random(start,end)*10);
randomize(1,21);

const checkStr = (str, maxLng) => str.length <= maxLng;
checkStr("errrrrrwww",10);