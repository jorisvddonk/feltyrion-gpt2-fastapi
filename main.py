from fastapi import FastAPI
import gpt_2_simple as gpt2
from pydantic import BaseModel
from datetime import datetime


def generate_text(text: str):
    # TODO: make this global somehow
    sess = gpt2.start_tf_sess()
    gpt2.load_gpt2(sess, run_name='run1')
    return gpt2.generate(sess,
                         length=250,
                         temperature=0.7,
                         prefix=text,
                         nsamples=1,
                         batch_size=1,
                         run_name='run1',
                         return_as_list=True
                         )[0]


class Input(BaseModel):
    text: str


app = FastAPI()


@app.get("/")
def get_root():
    return "hi"


@app.post("/generate")
def generate(data: Input):
    return {"data": generate_text(data.text)}
