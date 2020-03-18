# Feltyrion GUIDE entry generator

This repository contains all that's needed to finetune a simple GPT-2 model to be able to generate Noctis IV GUIDE entries.

## Starting the finetuned model

### Preparation

0. Clone this repository
1. Download [the latest release](https://github.com/jorisvddonk/feltyrion-gpt2-fastapi/releases/download/1.0.0/model.tar) and extract it to the `model` folder
2. Build the container: `docker build . -t feltyrion-gpt2`

### Running the app

1. Run the container.
  
    on Windows (Powershell): `docker run --rm -it -p 8000:8000 -v ${PWD}/model:/model feltyrion-gpt2`

    on Linux: `docker run --rm -it -p 8000:8000 -v $(pwd)/model:/model feltyrion-gpt2`

2. navigate to http://localhost:8000/docs and play with the API


## Finetuning your own model

note: this is not needed if you download an already finetuned model

0. Clone this repository
1. `npm install node-fetch`
2. `node fetch_and_transform_guide_data.js`
3. Follow [Max Woolf's guide](https://minimaxir.com/2019/09/howto-gpt2/) to finetune a simple GPT-2 model using `model_input/input.txt` as input. Make sure you download the .tar file afterwards!
4. download the model, and extract it to the `model` folder in this repository
5. Continue from "running the app" above.

