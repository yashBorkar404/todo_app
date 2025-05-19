
pipeline {
    agent any

    tools {
        nodejs 'nodejs' // Ensure this matches the name set in Jenkins Global Tool Configuration
    }

    environment {
        SONARQUBE_ENV = 'SonarQube-server' 
        SONARQUBE_TOKEN = credentials('sonar')
        GITHUB_TOKEN = credentials('github-token')
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/yashBorkar404/todo_app.git', branch: 'main'
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
                        -Dsonar.host.url=http://172.19.0.1:9000 \
                        -Dsonar.token=$SONARQUBE_TOKEN'
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 6, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Deploy to GitHub Pages') {
            steps {
                sh 'git config --global user.email "jenkins@example.com"'
                sh 'git config --global user.name "Jenkins CI"'
                sh 'npm install -g gh-pages'
                sh 'gh-pages -d out --repo https://yashBorkar404:${GITHUB_TOKEN}@github.com/yashBorkar404/todo_app.git'
            }
        }
    }
}
