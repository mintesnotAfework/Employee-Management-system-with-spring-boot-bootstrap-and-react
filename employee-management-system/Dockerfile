FROM openjdk:24-oraclelinux9


RUN mkdir -p /app/ems-system
WORKDIR /app/ems-system

ARG JAR_FILE=target/*.jar 
COPY ./target/employee-management-system-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT [ "java","-jar","/app/ems-system/app.jar" ]