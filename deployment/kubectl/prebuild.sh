#!/bin/bash
$FILE = kubectl
if [ ! -f $FILE ]; then
    wget https://storage.googleapis.com/kubernetes-release/release/v1.12.4/bin/linux/amd64/kubectl
fi