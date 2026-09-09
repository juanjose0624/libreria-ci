pipeline {
    agent any

    environment {
        UMBRAL_COBERTURA = 70
        REPO_URL = 'https://github.com/juanjose0624/libreria-ci.git'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: "${REPO_URL}"
            }
        }

        stage('Build') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test con cobertura') {
            steps {
                bat 'npm test'
            }
        }

        stage('Quality Gate de cobertura') {
            steps {
                script {
                    def coberturaXml = readFile('coverage/cobertura-coverage.xml')
                    def matcher = (coberturaXml =~ /line-rate="([0-9.]+)"/)
                    def lineRate = matcher[0][1].toFloat()
                    def porcentaje = lineRate * 100

                    echo "Cobertura de líneas detectada: ${porcentaje}%"
                    echo "Umbral requerido: ${UMBRAL_COBERTURA}%"

                    if (porcentaje < UMBRAL_COBERTURA.toFloat()) {
                        error("Cobertura de ${porcentaje}% por debajo del umbral de ${UMBRAL_COBERTURA}%")
                    }

                    env.COBERTURA_PORCENTAJE = porcentaje.toString()
                }
            }
        }

        stage('Publicar reporte') {
    steps {
        recordCoverage(
            tools: [[parser: 'COBERTURA', pattern: 'coverage/cobertura-coverage.xml']]
        )
    }
}

        stage('Generar badges') {
            steps {
                script {
                    def porcentaje = env.COBERTURA_PORCENTAJE ?: '0'
                    def color = porcentaje.toFloat() >= 70 ? 'brightgreen' : 'red'

                    writeFile file: 'badge-build.json', text: """{
  "schemaVersion": 1,
  "label": "build",
  "message": "passing",
  "color": "brightgreen"
}"""

                    writeFile file: 'badge-coverage.json', text: """{
  "schemaVersion": 1,
  "label": "coverage",
  "message": "${porcentaje}%",
  "color": "${color}"
}"""

                    withCredentials([usernamePassword(credentialsId: 'github-credentials', usernameVariable: 'GIT_USER', passwordVariable: 'GIT_TOKEN')]) {
                        bat """
                            mkdir badges 2>nul
                            move badge-build.json badges\\badge-build.json
                            move badge-coverage.json badges\\badge-coverage.json
                            git config user.email "jenkins@local"
                            git config user.name "Jenkins CI"
                            git add badges/badge-build.json badges/badge-coverage.json
                            git commit -m "Actualizar badges [skip ci]" || echo "Sin cambios que commitear"
                            git push https://%GIT_USER%:%GIT_TOKEN%@github.com/juanjose0624/libreria-ci.git HEAD:main
                        """
                    }
                }
            }
        }
    }

    post {
        failure {
            script {
                writeFile file: 'badge-build.json', text: """{
  "schemaVersion": 1,
  "label": "build",
  "message": "failing",
  "color": "red"
}"""
                withCredentials([usernamePassword(credentialsId: 'github-credentials', usernameVariable: 'GIT_USER', passwordVariable: 'GIT_TOKEN')]) {
                    bat """
                        mkdir badges 2>nul
                        move badge-build.json badges\\badge-build.json
                        git config user.email "jenkins@local"
                        git config user.name "Jenkins CI"
                        git add badges/badge-build.json
                        git commit -m "Actualizar badge de build a failing [skip ci]" || echo "Sin cambios"
                        git push https://%GIT_USER%:%GIT_TOKEN%@github.com/juanjose0624/libreria-ci.git HEAD:main
                    """
                }
            }
        }
    }
}