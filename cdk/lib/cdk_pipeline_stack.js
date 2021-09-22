// const cdk = require('@aws-cdk/core');
//
// class CdkStack extends cdk.Stack {
//   /**
//    *
//    * @param {cdk.Construct} scope
//    * @param {string} id
//    * @param {cdk.StackProps=} props
//    */
//   constructor(scope, id, props) {
//     super(scope, id, props);
//
//     // The code that defines your stack goes here
//   }
// }
//
// module.exports = { CdkStack }
const cdk = require('@aws-cdk/core');
const {CodePipeline, CodePipelineSource, ShellStep} = require('@aws-cdk/pipelines');

class cdk_pipeline_stack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);

        const pipeline = new CodePipeline(this, 'Pipeline', {
            pipelineName: 'MyPipeline',
            synth: new ShellStep('Synth', {
                input: CodePipelineSource.gitHub('yoga2005live/react-pipeline', 'main'),
                commands: ['cd cdk','npm ci', 'npm run build', 'npx cdk synth']
            })
        });
    }
}

module.exports = {cdk_pipeline_stack}
