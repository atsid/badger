#!/bin/bash
export GITHUB_CLIENT_ID=$INTEG_GH_CLIENT_ID
export CF_DISTRO_ID=$INTEG_CF_DISTRO_ID
export DEPLOY_BUCKET=$INTEG_DEPLOY_BUCKET
export API_STAGE="integ"
export NODE_ENV="production"
npm-run-all bundle publish