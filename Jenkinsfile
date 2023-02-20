def message = "";
pipeline {
    agent any
    environment {
        TAG = sh(script: "echo `date +%Y-%m%d-%H%M`", returnStdout: true).trim()
        Registry = "pgtgs/"
        Image = "tgs-production"
        dockerhub = credentials('dockerhub')
    }
	
    stages {		    	
        stage('Prepare Env') {
            steps {
                sh "docker login -u ${dockerhub_USR} -p ${dockerhub_PSW}"
                sh "echo 'Branch: ${env.GIT_BRANCH}'"         
                script {
					env.k8s_config = 'prod-k8s-config';	
					env.kube_ns = "prod";
                    TAG = env.kube_ns + '-' + TAG
                    message += "\nBranch: ${env.GIT_BRANCH}" 
                    message += "\nImage: ${Image}"
                    message += "\nTag: ${TAG}"
                    message += "\nEnv: $env.kube_ns"
                    env.commit_url = "${env.GIT_URL}".replace(".git","/-/commit/") + "${env.GIT_COMMIT}"
                    message += "\n Commit: ${env.commit_url}"
                }

                configFileProvider([configFile(fileId: 'tgs.' + env.kube_ns, variable: 'tgsconfig')]) {
                    script {
                        def envItems = readProperties file: "$tgsconfig";
                        envItems.each { key, value -> 
                            env."tgs_${key}" = value;
                        }
                    }
                }

                sh "echo 'env: $env.kube_ns'"
                sh "echo 'tag: ${TAG}'"
            }
        }	
        stage('Docker Build') {   
            steps {	  			    
                sh "docker build -t ${Registry}${Image}:${TAG} ."
            }
        }			
        stage('Docker Push') {   
            steps {	  
                sh "docker push ${Registry}${Image}:${TAG}"
            }
        }	
        stage('Deployment') {   
            steps {	  
                script {			
                    withKubeConfig([credentialsId: env.k8s_config]) {
                        message += "\nComponent:"
						sh "kubectl set image deployment/${Image} ${Image}=${Registry}${Image}:${TAG} --record -n $env.kube_ns"
                    }
                }
            }
        }	
    }
    post {
        success {
             sendTelegram("Pipeline: ${currentBuild.fullDisplayName} OK! ${message} \n${currentBuild.getBuildCauses()[0].shortDescription}\n")
        }
        failure {
            sendTelegram("<b>Failed Pipeline:</b> ${currentBuild.fullDisplayName} Something is wrong with ${env.BUILD_URL}/console\n${currentBuild.getBuildCauses()[0].shortDescription}\n")
        }
    }
}

def sendTelegram(message) {
    def encodedMessage = URLEncoder.encode(message, "UTF-8")

    withCredentials([string(credentialsId: "telegramToken", variable: "TOKEN"), string(credentialsId: "telegramChatId", variable: "CHAT_ID")]) {

        response = httpRequest (consoleLogResponseBody: true,
                contentType: 'APPLICATION_JSON',
                httpMode: 'GET',
                url: "https://api.telegram.org/bot${TOKEN}/sendMessage?text=${encodedMessage}&chat_id=${CHAT_ID}",
                validResponseCodes: '200')
        return response
    }
}
