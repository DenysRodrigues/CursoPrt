pipeline{
    agent {
        docker {
            image 'node:8-alpine'
            args '--link selenium_server'
        }
    }
    stages {
        stage('Run Tests'){
            steps {
                sh "sudo npm install"
                sh "sudo npm install webdriver-manager -g"
                sh "sudo npm run wdup"
                sh "sudo npm test"
            }
        }
    }
}