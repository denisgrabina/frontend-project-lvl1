install:
	npm install

start:
	npx babel-node src/bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint

prepublishOnly:
	npm run prepublishOnly
	make publish
	npm link
