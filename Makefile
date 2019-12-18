install:
	npm install

start:
	npx babel-node src/bin/brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint ./dist/bin/

prepublishOnly:
	npm run prepublishOnly
	make publish
	npm link
