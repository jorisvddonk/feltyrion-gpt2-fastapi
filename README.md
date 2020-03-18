# Feltyrion GUIDE entry generator

This repository contains all that's needed to finetune a simple GPT-2 model to be able to generate Noctis IV GUIDE entries.

## Quickstart

todo

## Do it yourself

1. `npm install node-fetch`
2. `node fetch_and_transform_guide_data.js`
3. Follow [Max Woolf's guide](https://minimaxir.com/2019/09/howto-gpt2/) to finetune a simple GPT-2 model using `model_input/input.txt` as input. Make sure you download the .tar file afterwards!
4. download the model, put it in this folder and name it to `model.tar`
5. `docker build . -t feltyrion-gpt2`
6. `docker run --rm -it -p 8000:8000 feltyrion-gpt2`
7. navigate to http://localhost:8000/docs and play with the API
