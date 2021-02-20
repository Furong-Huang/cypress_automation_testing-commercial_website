pipeline {
    agent any

    tools {nodejs "latest"}

    environment {
        CHROME_BIN = '/bin/google-chrome'
    }

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Test Suite 1') {
            steps {
                sh 'npx cypress run --spec cypress/integration/TestSuite1.spec.js —headed'
            }
        }
        stage('Run Test Suite 2') {
            steps {
                sh 'npx cypress run --spec cypress/integration/TestSuite2.spec.js —headed'
            }
        }
        stage('Run Test Suite 3') {
            steps {
                sh 'npx cypress run --spec cypress/integration/TestSuite3.spec.js —headed'
            }
        }
    }
	
    post{
            always {
                junit 'results/cypress-report.xml'
            }
        }
}