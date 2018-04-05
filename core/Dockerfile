FROM gradle:alpine
WORKDIR /app
COPY . .

USER root
RUN chown -R gradle /app
USER gradle

RUN ./gradlew build bootJar

ENTRYPOINT ["java", "-jar", "/app/build/libs/examhall.jar"]
