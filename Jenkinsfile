pipeline {
    agent any

    tools {
        nodejs 'nodejs' // Ensure this matches the name set in Jenkins Global Tool Configuration
    }

    environment {
        SONARQUBE_ENV = 'SonarQube-server' 
        SONARQUBE_TOKEN = credentials('sonar')
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/SuchitG04/todo_app.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv("${env.SONARQUBE_ENV}") {
                    sh 'npx sonar-scanner \
                        -Dsonar.projectKey=todo_app \
                        -Dsonar.sources=. \
                        -Dsonar.host.url=http://localhost:9000 \
                        -Dsonar.login=$SONARQUBE_TOKEN'
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 1, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Deploy to GitHub Pages') {
            steps {
                sh 'npm install -g gh-pages'
                sh 'gh-pages -d out'
            }
        }
    }
}
