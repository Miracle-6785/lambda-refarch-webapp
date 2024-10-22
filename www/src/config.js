// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  aws_user_pools_web_client_id: "1mprun0b2sibdvuhham41o5l1", // CognitoClientID
  api_base_url: "https://4w5jfuad5e.execute-api.ap-southeast-1.amazonaws.com/prod", // TodoFunctionApi
  cognito_hosted_domain: "mytodoappdemo-miracle-stack.auth.ap-southeast-1.amazoncognito.com", // CognitoDomainName
  redirect_url: "https://master.d1pb9vnkt4bjdy.amplifyapp.com", // AmplifyURL
};

export default config;
