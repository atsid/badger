#!/bin/bash
export GITHUB_CLIENT_ID=$PROD_GH_CLIENT_ID
export CF_DISTRO_ID=$PROD_CF_DISTRO_ID
export DEPLOY_BUCKET=$PROD_DEPLOY_BUCKET
export NODE_ENV="production"
npm-run-all bundle publish