 def commit 
  node('base'){
      stage('Checkout') {
          checkout scm
          commit = sh(returnStdout:true, script: "git log -n 1 --pretty=format:'%h'").trim()
        }
        stage('Build') {
                echo 'Building..'
                sh "docker build -t 1st ."
        }
        stage('Test') {
                echo 'Testing..'
        }
        stage('CCQ') {
        
            def scannerHome = tool 'SonarQube Pre-Installed';
            withSonarQubeEnv('ccq') 
               {
                  sh "sonar-scanner"
               }
        }
        stage('BlackDuck') {
                echo 'Testing..'
        }
        stage('Publish') {
        
            sh "docker tag 1st advancedcsg-docker-local.jfrog.io/advanced/dockermon:trainingfd-${commit}"

            sh "docker push advancedcsg-docker-local.jfrog.io/advanced/dockermon:trainingfd-${commit}"
                echo 'Testing..'
        }
}