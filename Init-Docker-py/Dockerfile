FROM python:3-alpine3.15
WORKDIR /app
COPY . .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
EXPOSE 3000
CMD python ./index.py