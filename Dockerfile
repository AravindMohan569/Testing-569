FROM advancedcsg-docker-release-virtual.jfrog.io/advanced/nodedocker:8

# create app directory
WORKDIR /usr/src/app

# install required modules
COPY package*.json ./
RUN npm i --only-production

# bundle app source
COPY . .

# Start the app
CMD [ "npm", "start" ]

# CMD docker stats --format "{\"container\": \"{{ .Container }}\", \"name\": \"{{ .Name }}\", \"metrics\": {\"MetricName\": \"CPU %\", \"Value\": \"{{ .CPUPerc }}\"},{\"MetricName\": \"Memory %\", \"Value\": \"{{ .MemPerc }}\"}}"
