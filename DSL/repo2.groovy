pipelineJob('Repo-2') {
    definition {
        cpsScm {
            
            scm {
                branchSources{
                    git{


                        branch('*/master')
                        extensions {
                          localBranch('master')
                                 }
                          remote {
                         credentials('gitlogin')
                             url('https://github.com/AravindMohan569/Testing-Git-Excersice.git')
                            }

                    //     remote {
                    //     credentials('gitlogin')
                    //     url('https://github.com/AravindMohan569/Testing-Git-Excersice.git')
                    //     }
                    // includes('master-*')
                    }
                }
            }
            scriptPath('Jenkinsfile')
        }
    }
    displayName('Repo-2')
    logRotator {
        numToKeep(5)
    }
    properties {
        disableConcurrentBuilds()
        pipelineTriggers {
            triggers {
                sqsTrigger {
                //queueUuid('59b44c1d-58c0-4d44-93fe-2f829134476d')
                }
            }
        }
    }
}
