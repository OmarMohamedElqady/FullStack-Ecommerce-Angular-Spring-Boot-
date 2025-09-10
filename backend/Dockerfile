# Stage 1: Build
FROM maven:3.8.4-openjdk-17 AS build

COPY . .
RUN mvn clean install




FROM openjdk:17-jdk-slim

COPY --from=build /target/backend-0.0.1-SNAPSHOT.jar backend.jar

EXPOSE 5000

ENTRYPOINT ["java", "-jar", "backend.jar"]
