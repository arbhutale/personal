pipeline {
    agent any

    parameters {
        string(name: 'BRANCH', defaultValue: 'dev', description: 'Git branch or release tag to build')
        choice(
            name: 'ENVIRONMENT',
            choices: ['personal', 'dev', 'prod'],
            description: 'Target Environment'
        )
    }

    environment {
        NAMESPACE = 'personal'
        IMAGE_NAME = 'portfolio'
    }

    stages {
        stage('Checkout SCM') {
            steps {
                echo "===> Checking out branch ${params.BRANCH} for personal environment..."
                git branch: "${params.BRANCH}", credentialsId: 'github-token', url: 'https://github.com/arbhutale/personal.git'
            }
        }

        stage('Docker Build & Optimize') {
            steps {
                echo "===> Building Portfolio Web App (Next.js)..."
                sh """
                    docker build -t ${IMAGE_NAME}:latest .
                """
            }
        }

        stage('Container Runtime Import') {
            steps {
                echo "===> Importing Image into K3s Containerd..."
                sh """
                    docker save ${IMAGE_NAME}:latest | ctr -n k8s.io images import -
                """
            }
        }

        stage('Kubernetes Rolling Deployment') {
            steps {
                echo "===> Deploying to Kubernetes namespace ${env.NAMESPACE}..."
                sh """
                    kubectl apply -f k8s/deployment.yaml
                    kubectl rollout restart deployment/${IMAGE_NAME} -n ${env.NAMESPACE} || true
                    kubectl rollout status deployment/${IMAGE_NAME} -n ${env.NAMESPACE} --timeout=120s
                """
            }
        }

        stage('Health Check & Smoke Test') {
            steps {
                sh """
                    echo "=== Portfolio Health Check ==="
                    curl -s -k -o /dev/null -w "Portfolio HTTP Status: %{http_code}\n" "https://ar.bhutale.in/" || true
                    kubectl get pods -n ${env.NAMESPACE} -l app=${IMAGE_NAME}
                """
            }
        }
    }

    post {
        success {
            echo "🎉 Portfolio CI/CD Pipeline Completed Successfully!"
        }
        failure {
            echo "❌ Portfolio CI/CD Pipeline Failed."
        }
    }
}
