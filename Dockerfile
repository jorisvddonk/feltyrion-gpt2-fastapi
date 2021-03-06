ARG TENSORFLOW_VERSION=1.14.0-gpu-py3
FROM tensorflow/tensorflow:${TENSORFLOW_VERSION}

WORKDIR /

RUN apt-get -y update && apt-get -y upgrade && apt-get install -y --no-install-recommends curl

RUN mkdir /app
RUN mkdir /model

WORKDIR /app
COPY requirements.txt /app/
RUN pip install -r requirements.txt

COPY main.py /app/main.py

EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]