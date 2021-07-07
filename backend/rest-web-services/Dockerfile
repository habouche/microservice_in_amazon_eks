# FROM openjdk
# ARG JAR_FILE=target/*.jar
# COPY ${JAR_FILE} app.jar
# ENTRYPOINT ["java","-jar","/app.jar"]

FROM openjdk

WORKDIR /app

COPY . /app/

RUN ./mvnw package 

ENTRYPOINT ["java","-jar","target/rest-web-services-0.0.1-SNAPSHOT.jar"]


