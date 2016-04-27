**Slyce Web Developer Worktest - Rob Hays**

**Notes**

1. Unminified, human-friendly CSS & JavaScript files can be found in `src/`.

2. UserAgents are used to provide an experience on mobile devices that is slightly different from that of a narrow browser window on desktop (namely, the right set of navigation controls disappears on mobile). 

Therefore, to test the mobile responsive experience as it will appear on a device, use responsive design mode on Chrome, Safari, or Firefox (47+) to set the proper user agent string (or serve to an actual mobile device).

3. After completing the setup below, the app can be found at <http://localhost:8081/index.html#/>.

**Setup**

1. Install NPM and Node.js v5.6.0 or later. Refer to <https://nodejs.org> for instructions.

2. Run: `npm install`

3. Install Bower: `npm install -g bower`

4. Run: `bower install`

5. Launch the server via `npm start`. The server will run on <http://localhost:8081> by default.

**Making Changes**

After making changes in `src/`, run `gulp build` to update the files served by the server.

Alternatively, run `gulp watch` prior to making any changes to watch for changes and rebuild after each save.
