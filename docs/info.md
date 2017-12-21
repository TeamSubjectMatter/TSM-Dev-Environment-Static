# Info

## Deployments

*Staging:*
Deployments to staging are automatically triggered whenever you push to the develop branch. The `public/` directory will be pushed to an S3 bucket, so it's important that it reflects your latest changes. 

*Production:*
Production deployments will be configured to manually deploy to a production s3 bucket.

