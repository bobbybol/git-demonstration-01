import * as core from "@actions/core"; 
// import * as github from "@actions/github"; 
import * as exec from "@actions/exec";

function run() {
  // 1) Get the input values
  const bucket = core.getInput('bucket', { required: true });
  const region = core.getInput('bucket-region', { required: true });
  const folder = core.getInput('dist-folder', { required: true });

  // 2) Upload files to S3
  const s3Uri = `s3://${ bucket }`;
  exec.exec(`aws s3 sync ${ folder } ${ s3Uri } --region ${ region }`);

  const websiteUrl = `http://${ bucket }.s3-website-${ region }.amazonaws.com/`;
  core.setOutput('website-url', websiteUrl);
}

run();
