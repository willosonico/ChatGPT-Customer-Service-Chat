echo $BUILD_DEVELOPMENT

if [[ -z $BUILD_DEVELOPMENT ]]; then
  echo "BUILD_DEVELOPMENT NOT SET"
  export NODE_ENV="production"
  COMMAND="start"
else
  echo "BUILD_DEVELOPMENT SET"
  export NODE_ENV="development"
  COMMAND="watch"
fi

echo "running in $NODE_ENV"
yarn $COMMAND

