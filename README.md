### How to run these scripts

Step 0:
Have node/npm set up. Run `npm install` on the root.

Step 1:
Run `node .` to generate data. There are two command line arguments you can pass
`--users`
the number of user ids to generate
`--entries`
the number of entries per table to generate

Step 2:
Connect to PSQL and run the commands as denoted in copyPsqlScript.txt.

As long as you are running the game item location data after locations have been copied, then you're golden.

### TODO List

Move all the Math.random mocking code into a jest config
