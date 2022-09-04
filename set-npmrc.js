//  ╔═╗╦═╗╔═╗╦╔╗╔╔═╗╔╦╗╔═╗╦  ╦    ┌─┐┌─┐┌┬┐  ┌┐┌┌─┐┌┬┐┬─┐┌─┐  ┌─┐┬┬  ┌─┐
//  ╠═╝╠╦╝║╣ ║║║║╚═╗ ║ ╠═╣║  ║    └─┐├┤  │   │││├─┘│││├┬┘│    ├┤ ││  ├┤
//  ╩  ╩╚═╚═╝╩╝╚╝╚═╝ ╩ ╩ ╩╩═╝╩═╝  └─┘└─┘ ┴   ┘└┘┴  ┴ ┴┴└─└─┘  └  ┴┴─┘└─┘
//
// Used in production to install npm private modules
if (process.env.NODE_ENV !== 'production') {
  return;
}

const fs = require('fs');
fs.writeFileSync(
  '.npmrc',
  '@fortawesome:registry=https://npm.fontawesome.com/\r\n//npm.fontawesome.com/:_authToken=${FORTAWESOME_TOKEN}',
);
fs.chmodSync('.npmrc', 0600);