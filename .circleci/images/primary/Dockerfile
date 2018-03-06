FROM circleci/node:9.7

RUN sudo apt-get -y -qq update
RUN sudo apt-get -y -qq install python python-pip python-dev
RUN sudo pip install awscli --upgrade
RUN aws --version
